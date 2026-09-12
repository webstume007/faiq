import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCurrentUser, getCurrentUserSync, logout } from '../lib/auth';
import * as db from '../lib/db';
import { QURAN_SURAHS, QURAN_PARAS, formatAyahRange } from '../lib/quranData';

const GOLD = '#F2A900';
const NAVY = '#002147';

const Icons = {
  dashboard: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
  ),
  book: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  attendance: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  results: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  users: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  check: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  logout: (s = 18, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  ),
  menu: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
};

const Card = ({ children, style }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 24,
    ...style,
  }}>
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'primary', style, disabled }) => {
  const baseStyle = {
    padding: '10px 18px',
    borderRadius: 12,
    fontSize: '0.82rem',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: 'none',
    opacity: disabled ? 0.5 : 1,
  };
  const variants = {
    primary: { background: `linear-gradient(135deg, ${GOLD}, #e09800)`, color: '#0a0e1a' },
    secondary: { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' },
    danger: { background: 'rgba(239,68,68,0.15)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.25)' },
    success: { background: 'rgba(34,197,94,0.15)', color: '#86efac', border: '1px solid rgba(34,197,94,0.25)' },
  };
  return (
    <button onClick={disabled ? undefined : onClick} style={{ ...baseStyle, ...variants[variant], ...style }}>{children}</button>
  );
};

const Badge = ({ text, color = GOLD }) => (
  <span style={{
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: 20,
    fontSize: '0.7rem',
    fontWeight: 600,
    background: `${color}20`,
    color: color,
    textTransform: 'capitalize',
  }}>{text}</span>
);

export default function TeacherPortal() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [saving, setSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // Hifz daily entry state map: { [studentId]: { sabaq_surah_start, sabaq_ayah_start, sabaq_ayah_end, sabaq_quality, sabaq_notes, manzil_paras: [], overall_grade } }
  const [hifzEntries, setHifzEntries] = useState({});

  // Attendance state map: { [studentId]: 'present' | 'absent' | 'leave' }
  const [attendanceMap, setAttendanceMap] = useState({});

  // Test Results state
  const [testSessions, setTestSessions] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [testMarksMap, setTestMarksMap] = useState({});

  useEffect(() => {
    const u = getCurrentUserSync();
    if (!u || u.role !== 'teacher') {
      router.replace('/login');
      return;
    }
    setUser(u);

    // Load teacher classes
    const init = async () => {
      const cls = await db.getTeacherClasses(u.id);
      setClasses(cls);
      if (cls.length > 0) {
        setSelectedClassId(cls[0].id);
      }
      const tests = await db.getTestSessions();
      setTestSessions(tests);
    };
    init();
  }, [router]);

  // Load students when selected class changes
  const loadClassStudents = useCallback(async () => {
    if (!selectedClassId) return;
    const { data } = await db.supabase
      .from('students')
      .select('id, roll_no, first_name, last_name, photo_url, program_type')
      .eq('class_id', selectedClassId)
      .eq('status', 'active')
      .order('roll_no');

    const list = data || [];
    setStudents(list);

    // Init attendance map with default 'present'
    const attObj = {};
    list.forEach((s) => { attObj[s.id] = 'present'; });
    setAttendanceMap(attObj);

    // Init Hifz entries with existing or defaults
    const entries = await db.getHifzEntriesForClass(selectedClassId, selectedDate);
    const hObj = {};
    entries.forEach((e) => {
      hObj[e.student.id] = {
        sabaq_surah_start: e.daily?.sabaq_surah_start || 1,
        sabaq_ayah_start: e.daily?.sabaq_ayah_start || 1,
        sabaq_ayah_end: e.daily?.sabaq_ayah_end || 7,
        sabaq_quality: e.daily?.sabaq_quality || 'good',
        sabaq_notes: e.daily?.sabaq_notes || '',
        manzil_para: e.manzil?.para_number || 1,
        overall_grade: e.daily?.overall_grade || 'A',
      };
    });
    setHifzEntries(hObj);
  }, [selectedClassId, selectedDate]);

  useEffect(() => { loadClassStudents(); }, [loadClassStudents]);

  const selectedClass = classes.find((c) => c.id === selectedClassId);
  const isHifzClass = selectedClass?.course?.course_type === 'hifz' || selectedClass?.class_name?.toLowerCase().includes('hifz');

  // Save Hifz Sabaq & Manzil
  const handleSaveHifz = async () => {
    setSaving(true);
    const dailyPayload = [];
    const manzilPayload = [];

    students.forEach((st) => {
      const entry = hifzEntries[st.id];
      if (entry) {
        dailyPayload.push({
          student_id: st.id,
          teacher_id: user.id,
          session_id: selectedClass.session_id || 'e0000000-0000-0000-0000-000000000001',
          date: selectedDate,
          sabaq_surah_start: Number(entry.sabaq_surah_start),
          sabaq_ayah_start: Number(entry.sabaq_ayah_start),
          sabaq_surah_end: Number(entry.sabaq_surah_start),
          sabaq_ayah_end: Number(entry.sabaq_ayah_end),
          sabaq_quality: entry.sabaq_quality,
          sabaq_notes: entry.sabaq_notes,
          overall_grade: entry.overall_grade,
        });

        if (entry.manzil_para) {
          manzilPayload.push({
            student_id: st.id,
            teacher_id: user.id,
            session_id: selectedClass.session_id || 'e0000000-0000-0000-0000-000000000001',
            date: selectedDate,
            para_number: Number(entry.manzil_para),
            quality: entry.sabaq_quality,
          });
        }
      }
    });

    await Promise.all([
      db.saveHifzDailyProgress(dailyPayload, user.id),
      manzilPayload.length > 0 ? db.saveManzilRecords(manzilPayload, user.id) : Promise.resolve(),
    ]);

    setToastMsg('Daily Sabaq & Manzil successfully logged!');
    setSaving(false);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // Save Attendance
  const handleSaveAttendance = async () => {
    setSaving(true);
    const payload = students.map((st) => ({
      student_id: st.id,
      class_subject_id: selectedClass?.subjects?.[0]?.id || selectedClass.id,
      date: selectedDate,
      status: attendanceMap[st.id] || 'present',
      marked_by: user.id,
    }));

    await db.markAttendance(payload, user.id);
    setToastMsg('Attendance successfully recorded!');
    setSaving(false);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // Save Test Results
  const handleSaveTestResults = async () => {
    if (!selectedTestId || !selectedSubjectId) {
      alert('Please select both a Test Session and Subject.');
      return;
    }
    setSaving(true);
    const payload = students.map((st) => {
      const marks = Number(testMarksMap[st.id]?.obtained || 0);
      const total = Number(testMarksMap[st.id]?.total || 50);
      const pct = (marks / total) * 100;
      let grade = 'F';
      if (pct >= 90) grade = 'A+';
      else if (pct >= 80) grade = 'A';
      else if (pct >= 70) grade = 'B';
      else if (pct >= 60) grade = 'C';
      else if (pct >= 50) grade = 'D';

      return {
        test_session_id: selectedTestId,
        student_id: st.id,
        class_subject_id: selectedSubjectId,
        marks_obtained: marks,
        total_marks: total,
        grade,
        remarks: testMarksMap[st.id]?.remarks || '',
        entered_by: user.id,
      };
    });

    await db.submitTestResults(payload, user.id);
    setToastMsg('Test results successfully submitted & published!');
    setSaving(false);
    setTimeout(() => setToastMsg(''), 3000);
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Teacher Portal — Al-Faeq Islamic Institute</title>
      </Head>

      <div style={{ minHeight: '100vh', background: '#0a0e1a', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
        {/* Global Header */}
        <header style={{
          padding: '16px 28px', background: '#0d111e',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'sticky', top: 0, zIndex: 100,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/faeq-logo.png" alt="" style={{ width: 34, height: 34, borderRadius: 10 }} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff' }}>Al-Faeq Portal</div>
              <div style={{ fontSize: '0.68rem', color: GOLD, fontWeight: 700 }}>Teacher & Scholar Workstation</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>{user.first_name} {user.last_name}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Faculty ID: {user.employee_id || 'Scholar'}</div>
            </div>
            <button
              onClick={() => { logout().then(() => router.push('/login')); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
                background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 10, color: '#fca5a5', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600,
              }}
            >
              {Icons.logout(14, '#fca5a5')} Sign Out
            </button>
          </div>
        </header>

        {/* Sub-Header Navigation Tabs */}
        <div style={{
          display: 'flex', gap: 6, padding: '12px 28px', background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto',
        }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Icons.dashboard },
            { id: 'hifz', label: 'Hifz Sabaq & Manzil', icon: Icons.book },
            { id: 'attendance', label: 'Daily Attendance', icon: Icons.attendance },
            { id: 'results', label: 'Test Marks Entry', icon: Icons.results },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
                borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700,
                background: activeTab === t.id ? `${GOLD}20` : 'transparent',
                color: activeTab === t.id ? GOLD : 'rgba(255,255,255,0.5)',
                whiteSpace: 'nowrap',
              }}
            >
              {t.icon(16, activeTab === t.id ? GOLD : 'rgba(255,255,255,0.4)')}
              {t.label}
            </button>
          ))}
        </div>

        {/* Toast Notification */}
        {toastMsg && (
          <div style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
            background: '#22c55e', color: '#0a0e1a', padding: '12px 20px',
            borderRadius: 12, fontWeight: 700, fontSize: '0.88rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}>
            {toastMsg}
          </div>
        )}

        {/* Main Content Area */}
        <main style={{ padding: '28px', maxWidth: 1200, margin: '0 auto' }}>
          {/* Class & Date Selector Bar (for entry tabs) */}
          {activeTab !== 'dashboard' && (
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: 16, background: 'rgba(255,255,255,0.03)', borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.08)', marginBottom: 24, flexWrap: 'wrap', gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '0.82rem', color: GOLD, fontWeight: 700 }}>Select Class:</span>
                <select
                  value={selectedClassId}
                  onChange={(e) => setSelectedClassId(e.target.value)}
                  style={{
                    padding: '8px 12px', background: '#111625', border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8, color: '#fff', fontSize: '0.85rem', outline: 'none',
                  }}
                >
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.class_name} ({c.section}) — {c.course?.course_code}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Date:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    padding: '8px 12px', background: '#111625', border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8, color: '#fff', fontSize: '0.85rem', outline: 'none',
                  }}
                />
              </div>
            </div>
          )}

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Welcome, {user.first_name}!</h2>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', marginTop: 4 }}>
                  Faculty workstation for Islamic instruction, daily Quranic Sabaq tracking, and student attendance.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
                {classes.map((c) => (
                  <Card key={c.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 4px 0' }}>{c.class_name}</h3>
                        <Badge text={c.course?.course_code || 'Class'} color={c.course?.course_type === 'hifz' ? GOLD : '#3b82f6'} />
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>Section {c.section}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 14 }}>
                      Role: <strong>{c.role}</strong> &bull; Capacity: {c.max_students}
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                      <Button onClick={() => { setSelectedClassId(c.id); setActiveTab(c.course?.course_type === 'hifz' ? 'hifz' : 'attendance'); }} style={{ flex: 1, padding: '8px' }}>
                        Mark Today
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HIFZ SABAQ & MANZIL ENTRY */}
          {activeTab === 'hifz' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Hifz Sabaq & Manzil Tracker</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    Record daily memorization (Surah/Ayah range) and Para revision for each student in your Halqa.
                  </p>
                </div>
                <Button onClick={handleSaveHifz} disabled={saving} variant="primary">
                  {saving ? 'Saving Entries...' : 'Save All Hifz Entries'}
                </Button>
              </div>

              {students.length === 0 ? (
                <Card style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>
                  No active students enrolled in this class / halqa.
                </Card>
              ) : (
                <div style={{ display: 'grid', gap: 14 }}>
                  {students.map((st) => {
                    const entry = hifzEntries[st.id] || { sabaq_surah_start: 1, sabaq_ayah_start: 1, sabaq_ayah_end: 7, sabaq_quality: 'good', manzil_para: 1, overall_grade: 'A' };
                    const currentSurah = QURAN_SURAHS.find((s) => s.number === Number(entry.sabaq_surah_start));

                    return (
                      <Card key={st.id} style={{ background: 'rgba(255,255,255,0.025)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, fontWeight: 800 }}>
                              {st.first_name[0]}
                            </div>
                            <div>
                              <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>{st.first_name} {st.last_name}</div>
                              <div style={{ fontSize: '0.75rem', color: GOLD }}>{st.roll_no}</div>
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>Overall Grade:</span>
                            <select
                              value={entry.overall_grade}
                              onChange={(e) => setHifzEntries((p) => ({
                                ...p,
                                [st.id]: { ...p[st.id], overall_grade: e.target.value },
                              }))}
                              style={{ padding: '6px 10px', background: '#111625', border: '1px solid rgba(242,169,0,0.4)', borderRadius: 8, color: GOLD, fontWeight: 700, outline: 'none' }}
                            >
                              {['A+', 'A', 'B', 'C', 'D', 'F'].map((g) => <option key={g} value={g}>{g}</option>)}
                            </select>
                          </div>
                        </div>

                        {/* Sabaq & Manzil Form Inputs */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14 }}>
                          {/* Surah Picker */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>Sabaq Surah</label>
                            <select
                              value={entry.sabaq_surah_start}
                              onChange={(e) => setHifzEntries((p) => ({
                                ...p,
                                [st.id]: { ...p[st.id], sabaq_surah_start: Number(e.target.value) },
                              }))}
                              style={{ width: '100%', padding: '8px 10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.82rem', outline: 'none' }}
                            >
                              {QURAN_SURAHS.map((s) => (
                                <option key={s.number} value={s.number}>
                                  {s.number}. {s.name_arabic} — {s.name_english} ({s.ayahs} Ayahs)
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Ayah Range */}
                          <div style={{ display: 'flex', gap: 8 }}>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>From Ayah</label>
                              <input
                                type="number"
                                min="1"
                                max={currentSurah?.ayahs || 286}
                                value={entry.sabaq_ayah_start}
                                onChange={(e) => setHifzEntries((p) => ({
                                  ...p,
                                  [st.id]: { ...p[st.id], sabaq_ayah_start: e.target.value },
                                }))}
                                style={{ width: '100%', padding: '8px 10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.82rem', outline: 'none' }}
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>To Ayah</label>
                              <input
                                type="number"
                                min="1"
                                max={currentSurah?.ayahs || 286}
                                value={entry.sabaq_ayah_end}
                                onChange={(e) => setHifzEntries((p) => ({
                                  ...p,
                                  [st.id]: { ...p[st.id], sabaq_ayah_end: e.target.value },
                                }))}
                                style={{ width: '100%', padding: '8px 10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.82rem', outline: 'none' }}
                              />
                            </div>
                          </div>

                          {/* Sabaq Quality */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>Sabaq Quality</label>
                            <select
                              value={entry.sabaq_quality}
                              onChange={(e) => setHifzEntries((p) => ({
                                ...p,
                                [st.id]: { ...p[st.id], sabaq_quality: e.target.value },
                              }))}
                              style={{ width: '100%', padding: '8px 10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.82rem', outline: 'none' }}
                            >
                              <option value="excellent">Mumtaz / Excellent (ممتاز)</option>
                              <option value="good">Jayyid Jiddan / Good (جيد جداً)</option>
                              <option value="average">Jayyid / Average (جيد)</option>
                              <option value="needs_improvement">Needs Revision (مقبول / تكرار)</option>
                            </select>
                          </div>

                          {/* Manzil (Para Revision) */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>Manzil (Para Revision)</label>
                            <select
                              value={entry.manzil_para}
                              onChange={(e) => setHifzEntries((p) => ({
                                ...p,
                                [st.id]: { ...p[st.id], manzil_para: Number(e.target.value) },
                              }))}
                              style={{ width: '100%', padding: '8px 10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.82rem', outline: 'none' }}
                            >
                              {QURAN_PARAS.map((p) => (
                                <option key={p.number} value={p.number}>
                                  Para {p.number}: {p.name_arabic} ({p.name_english})
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Teacher notes */}
                        <div style={{ marginTop: 10 }}>
                          <input
                            type="text"
                            placeholder="Teacher feedback / Makharij & Tajweed notes..."
                            value={entry.sabaq_notes || ''}
                            onChange={(e) => setHifzEntries((p) => ({
                              ...p,
                              [st.id]: { ...p[st.id], sabaq_notes: e.target.value },
                            }))}
                            style={{
                              width: '100%', padding: '8px 12px', background: '#111625',
                              border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8,
                              color: '#fff', fontSize: '0.8rem', outline: 'none',
                            }}
                          />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ATTENDANCE */}
          {activeTab === 'attendance' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Class Attendance Register</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    Mark attendance for {selectedClass?.class_name}. Marking a student absent automatically tracks escalation.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <Button variant="secondary" onClick={() => {
                    const obj = {};
                    students.forEach((s) => { obj[s.id] = 'present'; });
                    setAttendanceMap(obj);
                  }}>
                    Mark All Present
                  </Button>
                  <Button onClick={handleSaveAttendance} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Attendance'}
                  </Button>
                </div>
              </div>

              <div style={{ display: 'grid', gap: 10 }}>
                {students.map((st) => {
                  const currentStatus = attendanceMap[st.id] || 'present';
                  return (
                    <Card key={st.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                          {st.first_name[0]}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{st.first_name} {st.last_name}</div>
                          <div style={{ fontSize: '0.74rem', color: GOLD }}>{st.roll_no}</div>
                        </div>
                      </div>

                      {/* Status Toggle Buttons */}
                      <div style={{ display: 'flex', gap: 6 }}>
                        {[
                          { id: 'present', label: 'Present', color: '#22c55e' },
                          { id: 'absent', label: 'Absent', color: '#ef4444' },
                          { id: 'leave', label: 'Leave', color: '#f97316' },
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            onClick={() => setAttendanceMap((p) => ({ ...p, [st.id]: btn.id }))}
                            style={{
                              padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                              fontSize: '0.78rem', fontWeight: 700, transition: 'all 0.2s',
                              background: currentStatus === btn.id ? btn.color : 'rgba(255,255,255,0.04)',
                              color: currentStatus === btn.id ? '#0a0e1a' : 'rgba(255,255,255,0.5)',
                            }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: TEST RESULTS ENTRY */}
          {activeTab === 'results' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Dars-e-Nizami Test Marks Entry</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                    Record examination / test marks for 15-day, monthly, or terminal Islamic tests.
                  </p>
                </div>
                <Button onClick={handleSaveTestResults} disabled={saving}>
                  {saving ? 'Submitting...' : 'Submit & Publish Results'}
                </Button>
              </div>

              {/* Test & Subject Selectors */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <Card style={{ padding: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: GOLD, fontWeight: 700, marginBottom: 6 }}>Select Test Session:</label>
                  <select
                    value={selectedTestId}
                    onChange={(e) => setSelectedTestId(e.target.value)}
                    style={{ width: '100%', padding: '10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.85rem', outline: 'none' }}
                  >
                    <option value="">Select Test Session...</option>
                    {testSessions.map((t) => (
                      <option key={t.id} value={t.id}>{t.name} ({t.test_type})</option>
                    ))}
                  </select>
                </Card>

                <Card style={{ padding: 16 }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: GOLD, fontWeight: 700, marginBottom: 6 }}>Select Subject:</label>
                  <select
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    style={{ width: '100%', padding: '10px', background: '#111625', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff', fontSize: '0.85rem', outline: 'none' }}
                  >
                    <option value="">Select Subject...</option>
                    {selectedClass?.subjects?.map((s) => (
                      <option key={s.id} value={s.id}>{s.subject_name} ({s.subject_code})</option>
                    ))}
                  </select>
                </Card>
              </div>

              {/* Marks Entry Grid */}
              <div style={{ display: 'grid', gap: 10 }}>
                {students.map((st) => (
                  <Card key={st.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{st.first_name} {st.last_name}</div>
                      <div style={{ fontSize: '0.74rem', color: GOLD }}>{st.roll_no}</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 2 }}>Marks Obtained</span>
                        <input
                          type="number"
                          placeholder="e.g. 45"
                          value={testMarksMap[st.id]?.obtained ?? ''}
                          onChange={(e) => setTestMarksMap((p) => ({
                            ...p,
                            [st.id]: { ...p[st.id], obtained: e.target.value },
                          }))}
                          style={{ width: 90, padding: '8px', background: '#111625', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', textAlign: 'center', fontWeight: 700 }}
                        />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>/</span>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 2 }}>Total Marks</span>
                        <input
                          type="number"
                          value={testMarksMap[st.id]?.total ?? 50}
                          onChange={(e) => setTestMarksMap((p) => ({
                            ...p,
                            [st.id]: { ...p[st.id], total: e.target.value },
                          }))}
                          style={{ width: 80, padding: '8px', background: '#111625', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', textAlign: 'center' }}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
