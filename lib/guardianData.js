/**
 * Guardian Portal Data (Supabase-backed)
 * Centralizes data assembly for each enrolled child.
 */
export {
  getStudentsByGuardian,
  getStudentAttendance,
  getStudentAttendanceStats,
  getStudentChallans,
  getAnnouncementsByRole,
  getAllAnnouncements,
  submitChallanPayment,
  getActiveBankConfig,
  getStudentHifzHistory,
  getStudentTestResults,
} from './db';

import { supabase } from './supabaseClient';
import { calculateHifzProgressStats } from './quranData';

/**
 * Get full guardian portal data for a specific child
 * Assembles schedule, attendance, Hifz progress, test results, and absence flags
 */
export async function getChildData(studentId) {
  if (!studentId) return null;

  // 1. Get student with class & course info
  const { data: student } = await supabase
    .from('students')
    .select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(id, course_name, course_code, course_type, class_level)
      ),
      guardian:guardians(
        id,
        user:users(first_name, last_name, cnic, phone, email, current_address)
      )
    `)
    .eq('id', studentId)
    .single();

  if (!student) return null;

  // 2. Fetch subjects, attendance, results, hifz progress, and flags in parallel
  const [
    subjectsRes,
    attendanceRes,
    testResultsRes,
    hifzDailyRes,
    hifzManzilRes,
    absenceFlagRes,
  ] = await Promise.all([
    supabase
      .from('class_subjects')
      .select(`
        *,
        teacher:teachers(
          user:users(first_name, last_name, phone)
        )
      `)
      .eq('class_id', student.class?.id || '00000000-0000-0000-0000-000000000000'),

    supabase
      .from('attendance_records')
      .select(`
        *,
        subject:class_subjects(subject_name, subject_code)
      `)
      .eq('student_id', studentId)
      .order('date', { ascending: false }),

    supabase
      .from('test_results')
      .select(`
        *,
        test_session:test_sessions(name, test_type, start_date, end_date),
        subject:class_subjects(subject_name, subject_code)
      `)
      .eq('student_id', studentId)
      .order('created_at', { ascending: false }),

    supabase
      .from('hifz_daily_progress')
      .select('*')
      .eq('student_id', studentId)
      .order('date', { ascending: false }),

    supabase
      .from('hifz_manzil_records')
      .select('*')
      .eq('student_id', studentId)
      .order('date', { ascending: false }),

    supabase
      .from('absence_flags')
      .select('*')
      .eq('student_id', studentId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const subjects = subjectsRes.data || [];
  const attendanceRecords = attendanceRes.data || [];
  const testResults = testResultsRes.data || [];
  const hifzDaily = hifzDailyRes.data || [];
  const hifzManzil = hifzManzilRes.data || [];
  const activeAbsenceFlag = absenceFlagRes.data || null;

  // Compute attendance stats
  const total = attendanceRecords.length;
  const present = attendanceRecords.filter((r) => r.status === 'present').length;
  const absent = attendanceRecords.filter((r) => r.status === 'absent').length;
  const leave = attendanceRecords.filter((r) => r.status === 'leave').length;
  const attendancePercentage = total > 0 ? parseFloat(((present / total) * 100).toFixed(1)) : 0;

  // Compute Hifz Stats
  const isHifz = student.program_type === 'hifz' || student.class?.course?.course_type === 'hifz';
  const hifzStats = isHifz ? calculateHifzProgressStats(hifzDaily, hifzManzil) : null;

  return {
    ...student,
    studentName: `${student.first_name} ${student.last_name}`,
    rollNo: student.roll_no,
    programType: isHifz ? 'hifz' : 'dars_nizami',
    classSection: student.class ? `${student.class.class_name} (Sec ${student.class.section})` : 'Not Assigned',
    guardianName: student.guardian?.user ? `${student.guardian.user.first_name} ${student.guardian.user.last_name}` : '',
    guardianCnic: student.guardian?.user?.cnic || '',
    guardianPhone: student.guardian?.user?.phone || '',
    guardianAddress: student.guardian?.user?.current_address || '',
    overallAttendance: total > 0 ? `${attendancePercentage}%` : 'N/A',
    studyProgress: isHifz ? (hifzStats?.completionPercentage || 0) : (total > 0 ? Math.round((present / total) * 100) : 0),
    activeAbsenceFlag,
    schedule: subjects.map((s, i) => ({
      id: s.id || i + 1,
      course: s.subject_name,
      code: s.subject_code,
      creditHours: s.credit_hours,
      teacher: s.teacher?.user ? `${s.teacher.user.first_name} ${s.teacher.user.last_name}` : 'Assigned',
      teacherPhone: s.teacher?.user?.phone || '',
    })),
    attendance: {
      stats: { totalClasses: total, present, absent, leave, percentage: attendancePercentage },
      records: attendanceRecords.map((r, i) => ({
        id: r.id || i + 1,
        date: r.date,
        subject: r.subject?.subject_name || (isHifz ? 'Hifz Halqa' : 'Class Session'),
        status: r.status.charAt(0).toUpperCase() + r.status.slice(1),
      })),
    },
    results: testResults.map((r, i) => ({
      id: r.id || i + 1,
      testName: r.test_session?.name || 'Academic Assessment',
      testType: r.test_session?.test_type || 'regular',
      subject: r.subject?.subject_name || r.subject_name || 'Islamic Studies',
      code: r.subject?.subject_code || '',
      marksObtained: r.marks_obtained,
      totalMarks: r.total_marks,
      grade: r.grade || 'A',
      remarks: r.remarks || '',
    })),
    hifz: {
      stats: hifzStats,
      dailyRecords: hifzDaily,
      manzilRecords: hifzManzil,
      todaySabaq: hifzDaily.length > 0 ? hifzDaily[0] : null,
    },
  };
}
