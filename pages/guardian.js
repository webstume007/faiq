import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCurrentUser, getCurrentUserSync, logout } from '../lib/auth';
import { getChildData, getAnnouncementsByRole } from '../lib/guardianData';
import { getStudentsByGuardian, submitChallanPayment, getActiveBankConfig, createAdmission, getActiveSession, supabase, updateGuardianProfile } from '../lib/db';
import { QURAN_SURAHS, QURAN_PARAS, formatAyahRange } from '../lib/quranData';
import AdmissionWizard from '../components/AdmissionWizard';

const GOLD = 'var(--accent-gold)';
const NAVY = 'var(--bg-sidebar)';

const Icons = {
  home: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  book: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  calendar: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  attendance: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
  ),
  results: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  challan: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><line x1="6" y1="14" x2="6" y2="14.01"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
  ),
  admission: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  ),
  flag: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
  ),
  plus: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  bell: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  user: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  logOut: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  ),
  plus: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  check: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  flag: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
  ),
  menu: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
  close: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
};

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{
    background: 'var(--card-bg)',
    border: '1px solid var(--card-bg-hover)',
    borderRadius: 16,
    padding: 20,
    ...style,
  }}>
    {children}
  </div>
);

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
    primary: { background: `linear-gradient(135deg, ${GOLD}, #e09800)`, color: 'var(--bg-color)' },
    secondary: { background: 'var(--card-bg-hover)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' },
    success: { background: 'rgba(34,197,94,0.15)', color: 'var(--text-success)', border: '1px solid rgba(34,197,94,0.25)' },
    danger: { background: 'rgba(239,68,68,0.15)', color: 'var(--text-danger)', border: '1px solid rgba(239,68,68,0.25)' },
  };
  return (
    <button onClick={disabled ? undefined : onClick} style={{ ...baseStyle, ...variants[variant], ...style }}>{children}</button>
  );
};

export default function GuardianPortal() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [childrenList, setChildrenList] = useState([]);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [announcements, setAnnouncements] = useState([]);
  const [bankConfig, setBankConfig] = useState(null);
  const [activeSession, setActiveSession] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Guardian Profile & Onboarding State
  const [guardianProfile, setGuardianProfile] = useState(null);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [onboardingLoading, setOnboardingLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [onboardingForm, setOnboardingForm] = useState({
    firstName: '', lastName: '', cnic: '', phone: '', email: '',
    fatherName: '', relation: 'Father', occupation: '', earning: '', address: '', childCount: 1
  });

  // Challan Payment state
  const [challans, setChallans] = useState([]);
  const [payingChallan, setPayingChallan] = useState(null);
  const [tidInput, setTidInput] = useState('');
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // Admission Application state
  const [admissionLoading, setAdmissionLoading] = useState(false);

  const loadData = useCallback(async (currentUser) => {
    const students = await getStudentsByGuardian(currentUser.id);
    const childDataList = [];
    if (students && students.length > 0) {
      for (const student of students) {
        const childInfo = await getChildData(student.id);
        if (childInfo) childDataList.push(childInfo);
      }
    }

    const { data: apps } = await supabase
      .from('admission_applications')
      .select('*')
      .eq('guardian_id', currentUser.id)
      .eq('status', 'pending');

    if (apps && apps.length > 0) {
      for (const app of apps) {
        childDataList.push({
          id: `app_${app.id}`,
          isPending: true,
          studentName: `${app.student_first_name} ${app.student_last_name}`,
          programType: app.course_type,
          courseName: app.desired_course,
          profilePic: app.profile_picture_url,
          rollNo: 'TBD',
          classSection: 'Pending Approval',
        });
      }
    }

    setChildrenList(childDataList);

    const { data: gProfile } = await supabase.from('guardians').select('*').eq('id', currentUser.id).single();
    setGuardianProfile(gProfile);
    
    if (!gProfile?.onboarding_complete) {
      setIsOnboarding(true);
      setOnboardingForm((prev) => ({
        ...prev,
        firstName: currentUser.first_name || '',
        lastName: currentUser.last_name || '',
        cnic: currentUser.cnic || '',
        phone: currentUser.phone || '',
        email: currentUser.email || '',
        address: currentUser.current_address || '',
      }));
    }

    const [anns, bank, sess, { data: courses }] = await Promise.all([
      getAnnouncementsByRole('guardian'),
      getActiveBankConfig(),
      getActiveSession(),
      supabase.from('courses').select('*')
    ]);
    setAnnouncements(anns || []);
    setBankConfig(bank);
    setActiveSession(sess);
    setAvailableCourses(courses || []);
  }, []);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser || currentUser.role !== 'guardian') {
      router.replace('/login');
      return;
    }
    setUser(currentUser);
    loadData(currentUser);
  }, [router, loadData]);

  const currentChild = childrenList[selectedChildIndex] || null;

  // Load challans for active child
  const loadChallans = useCallback(async () => {
    if (!currentChild) return;
    const { data } = await supabase
      .from('challans')
      .select('*, payment:challan_payments(*)')
      .eq('student_id', currentChild.id)
      .order('due_date', { ascending: false });

    // Mask compensated status as paid
    const mapped = (data || []).map((c) => ({
      ...c,
      status: c.compensation_status === 'compensated' ? 'paid' : c.status,
    }));
    setChallans(mapped);
  }, [currentChild]);

  useEffect(() => {
    if (activeTab === 'challans') {
      loadChallans();
    }
  }, [activeTab, loadChallans]);

  const handlePayChallan = async () => {
    if (!tidInput.trim()) {
      alert('Please enter your Bank Transaction ID (TID).');
      return;
    }
    setSubmittingPayment(true);
    await submitChallanPayment({
      challan_id: payingChallan.id,
      payment_method: 'bank',
      transaction_id: tidInput.trim(),
      amount_paid: payingChallan.amount,
    });
    setPayingChallan(null);
    setTidInput('');
    setToastMsg('Payment submitted! Administration will verify shortly.');
    loadChallans();
    setSubmittingPayment(false);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const handleApplyAdmission = async (formData, photoBlob) => {
    setAdmissionLoading(true);
    let picUrl = null;
    
    if (photoBlob) {
      const fileName = `student-${user.id}-${Date.now()}.jpg`;
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('profiles')
        .upload(fileName, photoBlob, { cacheControl: '3600', upsert: false });
      
      if (!uploadErr && uploadData) {
        const { data: publicUrlData } = supabase.storage.from('profiles').getPublicUrl(fileName);
        picUrl = publicUrlData.publicUrl;
      }
    }

    const { admission, error } = await createAdmission({
      ...formData,
      guardian_id: user.id,
      session_id: activeSession?.id || 'e0000000-0000-0000-0000-000000000001',
      profile_picture_url: picUrl,
      status: 'pending',
    });

    if (error) {
      alert(`Error submitting application: ${error}`);
    } else {
      setActiveTab('home');
      setToastMsg('Application submitted & Admission Fee Challan generated!');
      setTimeout(() => setToastMsg(''), 3500);
      loadData(user);
    }
    setAdmissionLoading(false);
  };

  const handleOnboardingSubmit = async (e) => {
    e.preventDefault();
    setOnboardingLoading(true);

    let picUrl = null;
    if (profilePic) {
      const ext = profilePic.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${ext}`;
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('profiles')
        .upload(fileName, profilePic, { cacheControl: '3600', upsert: false });
      
      if (!uploadErr && uploadData) {
        const { data: publicUrlData } = supabase.storage.from('profiles').getPublicUrl(fileName);
        picUrl = publicUrlData.publicUrl;
      }
    }

    const { error } = await updateGuardianProfile(
      user.id,
      {
        first_name: onboardingForm.firstName,
        last_name: onboardingForm.lastName,
        phone: onboardingForm.phone,
        current_address: onboardingForm.address,
        profile_picture_url: picUrl,
      },
      {
        father_name: onboardingForm.fatherName,
        relation_to_student: onboardingForm.relation,
        occupation: onboardingForm.occupation,
        estimated_earning: onboardingForm.earning ? parseFloat(onboardingForm.earning) : null,
        child_count: onboardingForm.childCount ? parseInt(onboardingForm.childCount, 10) : 1,
      }
    );

    setOnboardingLoading(false);
    if (error) {
      alert(`Error updating profile: ${error}`);
    } else {
      setIsOnboarding(false);
      setToastMsg('Profile setup completed successfully!');
      setTimeout(() => setToastMsg(''), 3500);
      loadData(user); // Reload data to get updated guardianProfile
    }
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Parent Portal — Al-Faiq Islamic Education System</title>
        <style>{`
          .mobile-hide { display: flex; }
          .desktop-hide { display: none; }
          @media (max-width: 768px) {
            .mobile-hide { display: none !important; }
            .desktop-hide { display: flex !important; }
          }
        `}</style>
      </Head>

      <div style={{ minHeight: '100vh', background: 'var(--bg-color)', fontFamily: "'Inter', sans-serif", color: 'var(--text-primary)', position: 'relative' }}>
        
        {isOnboarding ? (
          <div style={{ padding: 24, maxWidth: 600, margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: GOLD, marginBottom: 8, textAlign: 'center' }}>Complete Your Guardian Profile</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 24, fontSize: '0.9rem' }}>
              Please provide the required details before accessing the parent portal.
            </p>
            <form onSubmit={handleOnboardingSubmit} style={{ background: 'var(--bg-dropdown)', padding: 24, borderRadius: 16, border: '1px solid var(--border-color)' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ width: 80, height: 80, borderRadius: 40, background: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, overflow: 'hidden' }}>
                  {profilePic ? (
                    <img src={URL.createObjectURL(profilePic)} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    Icons.user(32, 'var(--text-tertiary)')
                  )}
                </div>
                <label style={{ color: GOLD, fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}>
                  Upload Photo (Optional)
                  <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => { if(e.target.files[0]) setProfilePic(e.target.files[0]); }} />
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>First Name *</label>
                  <input required value={onboardingForm.firstName} onChange={e => setOnboardingForm(p => ({...p, firstName: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Last Name *</label>
                  <input required value={onboardingForm.lastName} onChange={e => setOnboardingForm(p => ({...p, lastName: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Father's Name *</label>
                  <input required value={onboardingForm.fatherName} onChange={e => setOnboardingForm(p => ({...p, fatherName: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Relationship to Student *</label>
                  <select required value={onboardingForm.relation} onChange={e => setOnboardingForm(p => ({...p, relation: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--bg-dropdown)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }}>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>CNIC *</label>
                  <input required value={onboardingForm.cnic} onChange={e => setOnboardingForm(p => ({...p, cnic: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Phone *</label>
                  <input required type="tel" value={onboardingForm.phone} onChange={e => setOnboardingForm(p => ({...p, phone: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Occupation *</label>
                  <input required value={onboardingForm.occupation} onChange={e => setOnboardingForm(p => ({...p, occupation: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Estimated Earning (PKR)</label>
                  <input type="number" value={onboardingForm.earning} onChange={e => setOnboardingForm(p => ({...p, earning: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Address *</label>
                <textarea required value={onboardingForm.address} onChange={e => setOnboardingForm(p => ({...p, address: e.target.value}))} rows={2} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)', resize: 'none' }} />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Number of Children to Enroll *</label>
                <input required type="number" min="1" max="10" value={onboardingForm.childCount} onChange={e => setOnboardingForm(p => ({...p, childCount: e.target.value}))} style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }} />
              </div>

              <Button type="submit" disabled={onboardingLoading} style={{ width: '100%' }}>
                {onboardingLoading ? 'Saving...' : 'Complete Profile Setup'}
              </Button>
            </form>
          </div>
        ) : (
          <>
            {/* Global Header */}
            <header style={{
              padding: '16px 24px', background: 'var(--bg-sidebar)', borderBottom: '1px solid var(--card-bg-hover)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/faiq-logo.png" alt="" style={{ width: 34, height: 34, borderRadius: 10 }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800 }}>Al-Faiq Education</div>
                  <div style={{ fontSize: '0.68rem', color: GOLD, fontWeight: 700 }}>Parent / Guardian Portal</div>
                </div>
              </div>

              {/* Desktop User Info & Logout */}
              <div className="mobile-hide" style={{ alignItems: 'center', gap: 14 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>{user.first_name} {user.last_name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>CNIC: {user.cnic}</div>
                </div>
                {guardianProfile?.profile_picture_url ? (
                  <img src={guardianProfile.profile_picture_url} style={{ width: 36, height: 36, borderRadius: 18, objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Icons.user(18, 'var(--text-secondary)')}
                  </div>
                )}
                <button
                  onClick={() => { logout().then(() => router.push('/login')); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', marginLeft: 10,
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: 8, color: 'var(--text-danger)', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600,
                  }}
                >
                  {Icons.logOut(14, 'var(--text-danger)')} Sign Out
                </button>
              </div>

              {/* Mobile Hamburger Menu Icon */}
              <button 
                className="desktop-hide" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
              >
                {Icons.menu(28)}
              </button>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
              <div style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end'
              }} onClick={() => setIsMobileMenuOpen(false)}>
                <div style={{
                  width: 280, background: 'var(--bg-sidebar)', height: '100%', borderLeft: '1px solid var(--border-color)',
                  padding: 24, display: 'flex', flexDirection: 'column'
                }} onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {guardianProfile?.profile_picture_url ? (
                        <img src={guardianProfile.profile_picture_url} style={{ width: 44, height: 44, borderRadius: 22, objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: 44, height: 44, borderRadius: 22, background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {Icons.user(24, 'var(--text-secondary)')}
                        </div>
                      )}
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{user.first_name} {user.last_name}</div>
                        <div style={{ fontSize: '0.7rem', color: GOLD }}>Edit Profile</div>
                      </div>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)' }}>
                      {Icons.close(24)}
                    </button>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    {[
                      { id: 'home', label: 'Home Overview', icon: Icons.home },
                      { id: 'admissions', label: 'Admissions & Enrollment', icon: Icons.admission },
                      ...(currentChild?.programType === 'hifz' ? [{ id: 'hifz', label: 'Hifz Sabaq & Manzil', icon: Icons.book }] : []),
                      ...(currentChild?.programType !== 'hifz' ? [{ id: 'results', label: 'Test Results', icon: Icons.results }] : []),
                      { id: 'attendance', label: 'Attendance', icon: Icons.attendance },
                      { id: 'challans', label: 'Fee Challans', icon: Icons.challan },
                      { id: 'schedule', label: 'Classes & Scholars', icon: Icons.calendar },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setActiveTab(t.id); setIsMobileMenuOpen(false); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                          borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700,
                          background: activeTab === t.id ? `${GOLD}20` : 'transparent',
                          color: activeTab === t.id ? GOLD : 'var(--text-primary)',
                          textAlign: 'left'
                        }}
                      >
                        {t.icon(18, activeTab === t.id ? GOLD : 'var(--text-secondary)')}
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => { logout().then(() => router.push('/login')); }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px',
                      background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: 10, color: 'var(--text-danger)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700,
                      marginTop: 'auto'
                    }}
                  >
                    {Icons.logOut(18, 'var(--text-danger)')} Sign Out
                  </button>
                </div>
              </div>
            )}

            {/* Desktop Sub-Header Tabs */}
            <div className="mobile-hide" style={{
              display: 'flex', gap: 4, padding: '10px 24px', background: 'var(--card-bg)',
              borderBottom: '1px solid var(--card-bg-hover)', overflowX: 'auto',
            }}>
              {[
                { id: 'home', label: 'Home Overview', icon: Icons.home },
                { id: 'admissions', label: 'Admissions & Enrollment', icon: Icons.admission },
                ...(currentChild?.programType === 'hifz' ? [{ id: 'hifz', label: 'Hifz Sabaq & Manzil', icon: Icons.book }] : []),
                ...(currentChild?.programType !== 'hifz' ? [{ id: 'results', label: 'Test Results', icon: Icons.results }] : []),
                { id: 'attendance', label: 'Attendance', icon: Icons.attendance },
                { id: 'challans', label: 'Fee Challans', icon: Icons.challan },
                { id: 'schedule', label: 'Classes & Scholars', icon: Icons.calendar },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px',
                    borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700,
                    background: activeTab === t.id ? `${GOLD}20` : 'transparent',
                    color: activeTab === t.id ? GOLD : 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.icon(16, activeTab === t.id ? GOLD : 'var(--text-tertiary)')}
                  {t.label}
                </button>
              ))}
            </div>

        {/* Toast */}
        {toastMsg && (
          <div style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
            background: 'var(--color-success)', color: 'var(--bg-color)', padding: '12px 20px',
            borderRadius: 12, fontWeight: 700, fontSize: '0.88rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}>
            {toastMsg}
          </div>
        )}

        <main style={{ padding: '24px', maxWidth: 1100, margin: '0 auto' }}>
          {/* Active Absence Escalation Warning Banner */}
          {currentChild?.activeAbsenceFlag && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.08))',
              border: '2px solid rgba(239,68,68,0.5)', borderRadius: 16, padding: '16px 20px',
              marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--color-danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {Icons.flag(24, 'var(--text-primary)')}
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-danger)' }}>
                  Urgent Notice: {currentChild.studentName} has {currentChild.activeAbsenceFlag.consecutive_absences} Consecutive Absences
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginTop: 3 }}>
                  Please visit the Al-Faiq administration office as soon as possible regarding your child's continuous absence.
                </div>
              </div>
            </div>
          )}

          {/* Child Selector Card */}
          {childrenList.length > 0 && (
            <Card style={{ marginBottom: 20, border: '1px solid rgba(242,169,0,0.3)', background: 'linear-gradient(135deg, rgba(242,169,0,0.06), rgba(0,33,71,0.2))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: `${GOLD}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, fontSize: '1.2rem', fontWeight: 900 }}>
                    {currentChild?.studentName?.[0]}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800 }}>{currentChild?.studentName}</span>
                      <Badge text={currentChild?.programType === 'hifz' ? 'Hifz Ul Quran' : 'Dars-e-Nizami'} color={currentChild?.programType === 'hifz' ? GOLD : 'var(--color-info)'} />
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                      Roll No: <strong style={{ color: GOLD }}>{currentChild?.rollNo}</strong> &bull; Class: {currentChild?.classSection}
                    </div>
                  </div>
                </div>

                {/* Child Switcher Dropdown */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {childrenList.length > 1 && (
                    <select
                      value={selectedChildIndex}
                      onChange={(e) => setSelectedChildIndex(Number(e.target.value))}
                      style={{
                        padding: '8px 12px', background: 'var(--bg-dropdown)', border: '1px solid rgba(242,169,0,0.4)',
                        borderRadius: 10, color: GOLD, fontWeight: 700, fontSize: '0.82rem', outline: 'none',
                      }}
                    >
                      {childrenList.map((ch, idx) => (
                        <option key={ch.id} value={idx}>
                          Switch to: {ch.studentName} ({ch.programType === 'hifz' ? 'Hifz' : 'Dars'})
                        </option>
                      ))}
                    </select>
                  )}
                  <Button variant="secondary" onClick={() => setActiveTab('admissions')} style={{ padding: '8px 14px', fontSize: '0.78rem' }}>
                    {Icons.plus(14)} Enroll Another Child
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* TAB: HOME OVERVIEW */}
          {activeTab === 'home' && (
            <div>
              {/* Main Dashboard Quick Navigation Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 24 }}>
                <Card style={{ textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} onClick={() => setActiveTab('admissions')}>
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Icons.admission(24, GOLD)}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Admissions</div>
                </Card>
                <Card style={{ textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} onClick={() => setActiveTab('schedule')}>
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: `rgba(59,130,246,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Icons.book(24, 'var(--color-info)')}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Our Courses</div>
                </Card>
                <Card style={{ textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} onClick={() => setActiveTab('schedule')}>
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: `rgba(34,197,94,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Icons.calendar(24, 'var(--color-success)')}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Schedule</div>
                </Card>
                <Card style={{ textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} onClick={() => window.open('https://al-faiq.edu.pk', '_blank')}>
                  <div style={{ width: 48, height: 48, borderRadius: 24, background: `rgba(168,85,247,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Icons.flag(24, 'var(--color-purple)')}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Life at Al-Faiq</div>
                </Card>
              </div>

              {/* Quick Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 24 }}>
                <Card>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>OVERALL ATTENDANCE</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-success)', marginTop: 4 }}>
                    {currentChild?.overallAttendance || '100%'}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                    {currentChild?.attendance?.stats?.present || 0} Days Present / {currentChild?.attendance?.stats?.totalClasses || 0} Total
                  </div>
                </Card>

                {currentChild?.programType === 'hifz' ? (
                  <Card>
                    <div style={{ fontSize: '0.75rem', color: GOLD, fontWeight: 700 }}>HIFZ MEMORIZATION</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: 4 }}>
                      {currentChild?.hifz?.stats?.completionPercentage || 0}%
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                      {currentChild?.hifz?.stats?.totalAyahsMemorized || 0} / 6,236 Ayahs
                    </div>
                  </Card>
                ) : (
                  <Card>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-info)', fontWeight: 700 }}>DARS-E-NIZAMI CLASS</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: 6 }}>
                      {currentChild?.class?.class_name || 'Sanviya Aamah'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                      {currentChild?.schedule?.length || 4} Islamic Subjects
                    </div>
                  </Card>
                )}
              </div>

              {/* Today's Sabaq Highlight (for Hifz) */}
              {currentChild?.programType === 'hifz' && currentChild?.hifz?.todaySabaq && (
                <Card style={{ marginBottom: 24, border: '1px solid rgba(242,169,0,0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {Icons.book(20, GOLD)}
                      <h3 style={{ margin: 0, fontSize: '1.05rem', color: GOLD, fontWeight: 800 }}>Latest Sabaq & Memorization</h3>
                    </div>
                    <Badge text={currentChild.hifz.todaySabaq.sabaq_quality} color="var(--color-success)" />
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                    {formatAyahRange(currentChild.hifz.todaySabaq.sabaq_surah_start, currentChild.hifz.todaySabaq.sabaq_ayah_start, currentChild.hifz.todaySabaq.sabaq_surah_end, currentChild.hifz.todaySabaq.sabaq_ayah_end)}
                  </div>
                  {currentChild.hifz.todaySabaq.sabaq_notes && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', background: 'var(--card-bg)', padding: '10px 14px', borderRadius: 8 }}>
                      Teacher Note: {currentChild.hifz.todaySabaq.sabaq_notes}
                    </div>
                  )}
                </Card>
              )}

              {/* Notice Board */}
              <Card>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  {Icons.bell(18, GOLD)}
                  <h3 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 800 }}>Madrassa Notice Board</h3>
                </div>
                <div style={{ display: 'grid', gap: 10 }}>
                  {announcements.map((a) => (
                    <div key={a.id} style={{ padding: '12px 16px', background: 'var(--card-bg)', borderRadius: 10 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: GOLD }}>{a.title}</div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0 0', lineHeight: 1.4 }}>{a.content}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* TAB: ADMISSIONS WIZARD */}
          {activeTab === 'admissions' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px 0' }}>Student Admissions & Enrollment</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 20 }}>
                Please fill out all the mandatory information carefully. Once submitted, an Admission Challan will be auto-generated.
              </p>
              
              <AdmissionWizard 
                availableCourses={availableCourses}
                onCancel={() => setActiveTab('home')}
                onSubmit={handleApplyAdmission}
              />
            </div>
          )}

          {/* TAB: HIFZ SABAQ & MANZIL (Detailed) */}
          {activeTab === 'hifz' && currentChild?.programType === 'hifz' && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 16px 0', color: GOLD }}>
                Hifz Ul Quran Daily Progress & History
              </h2>

              {/* 30 Paras Manzil Visual Grid */}
              <Card style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px 0' }}>30 Paras (Juz) Manzil Revision Coverage</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 6 }}>
                  {QURAN_PARAS.map((p) => {
                    const isRevised = currentChild.hifz?.stats?.revisedParas?.includes(p.number);
                    return (
                      <div
                        key={p.number}
                        style={{
                          padding: '8px 4px', textAlign: 'center', borderRadius: 8,
                          background: isRevised ? 'rgba(34,197,94,0.2)' : 'var(--card-bg)',
                          border: isRevised ? '1px solid #22c55e' : '1px solid var(--border-color)',
                          color: isRevised ? 'var(--text-success)' : 'var(--text-tertiary)',
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>Para {p.number}</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>{p.name_arabic}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* History Table */}
              <Card>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 14px 0' }}>Daily Sabaq Log History</h3>
                <div style={{ display: 'grid', gap: 10 }}>
                  {(currentChild.hifz?.dailyRecords || []).map((r) => (
                    <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--card-bg)', borderRadius: 8 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                          Surah {r.sabaq_surah_start}, Ayah {r.sabaq_ayah_start} to {r.sabaq_ayah_end}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>Date: {r.date}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Badge text={r.sabaq_quality} color="var(--color-success)" />
                        <span style={{ fontWeight: 900, color: GOLD }}>{r.overall_grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* TAB: TEST RESULTS (Dars-e-Nizami) */}
          {activeTab === 'results' && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--color-info)' }}>
                Academic & Examination Test Results
              </h2>

              <div style={{ display: 'grid', gap: 12 }}>
                {(currentChild?.results || []).map((res) => (
                  <Card key={res.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{res.subject}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                        {res.testName} &bull; {res.remarks}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: GOLD }}>
                        {res.marksObtained} <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>/ {res.totalMarks}</span>
                      </div>
                      <Badge text={`Grade ${res.grade}`} color="var(--color-success)" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ATTENDANCE */}
          {activeTab === 'attendance' && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 16px 0' }}>Daily Attendance Log</h2>
              <div style={{ display: 'grid', gap: 8 }}>
                {(currentChild?.attendance?.records || []).map((att) => (
                  <Card key={att.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{att.date}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{att.subject}</div>
                    </div>
                    <Badge text={att.status} color={att.status.toLowerCase() === 'present' ? 'var(--color-success)' : 'var(--color-danger)'} />
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CHALLANS & PAYMENTS */}
          {activeTab === 'challans' && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 16px 0' }}>Fee Challans & Online Payment</h2>

              {/* Bank Account Details Card */}
              {bankConfig && (
                <Card style={{ marginBottom: 20, border: '1px solid rgba(242,169,0,0.3)', background: 'rgba(242,169,0,0.05)' }}>
                  <div style={{ fontSize: '0.75rem', color: GOLD, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>
                    Institute Bank Account for Fee Deposit:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Bank Name</div>
                      <div style={{ fontWeight: 700 }}>{bankConfig.bank_name}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Account Title</div>
                      <div style={{ fontWeight: 700 }}>{bankConfig.account_title}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>Account Number</div>
                      <div style={{ fontWeight: 800, color: GOLD }}>{bankConfig.account_number}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>IBAN</div>
                      <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>{bankConfig.iban || '—'}</div>
                    </div>
                  </div>
                </Card>
              )}

              <div style={{ display: 'grid', gap: 12 }}>
                {challans.map((ch) => (
                  <Card key={ch.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>{ch.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                        Challan No: {ch.challan_no} &bull; Due: {ch.due_date}
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: GOLD, marginTop: 4 }}>
                        Rs. {Number(ch.amount).toLocaleString()}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Badge
                        text={ch.status === 'paid' ? 'Paid' : (ch.status === 'pending_verification' ? 'Pending Verification' : 'Unpaid')}
                        color={ch.status === 'paid' ? 'var(--color-success)' : (ch.status === 'pending_verification' ? 'var(--color-warning)' : 'var(--color-danger)')}
                      />
                      {ch.status === 'unpaid' && (
                        <Button onClick={() => setPayingChallan(ch)} style={{ padding: '8px 16px' }}>
                          I Have Paid &rarr;
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SCHEDULE */}
          {activeTab === 'schedule' && (
            <div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 16px 0' }}>Enrolled Classes & Assigned Faculty</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {(currentChild?.schedule || []).map((s) => (
                  <Card key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem' }}>{s.course}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: 2 }}>
                        Code: {s.code} &bull; Scholar: <strong style={{ color: GOLD }}>{s.teacher}</strong>
                      </div>
                    </div>
                    <Badge text="Enrolled" color="var(--color-success)" />
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Payment Modal */}
        {payingChallan && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
          }}>
            <div style={{ background: 'var(--bg-dropdown)', border: '1px solid var(--border-color)', borderRadius: 20, width: '100%', maxWidth: 500, padding: 24 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1.1rem', color: GOLD }}>Submit Fee Payment</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>
                Please transfer <strong>Rs. {Number(payingChallan.amount).toLocaleString()}</strong> to the institute bank account and enter the <strong>Transaction ID (TID)</strong> below:
              </p>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 6 }}>Bank Transaction ID (TID) *</label>
                <input
                  type="text"
                  placeholder="e.g. TRX-98234123"
                  value={tidInput}
                  onChange={(e) => setTidInput(e.target.value)}
                  style={{
                    width: '100%', padding: '10px 14px', background: 'var(--border-light)',
                    border: '1px solid rgba(242,169,0,0.3)', borderRadius: 10, color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <Button variant="secondary" onClick={() => setPayingChallan(null)}>Cancel</Button>
                <Button onClick={handlePayChallan} disabled={submittingPayment}>
                  {submittingPayment ? 'Submitting...' : 'Confirm I Have Paid'}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* New Admission Modal */}
        {showAdmissionModal && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
          }}>
            <div style={{ background: 'var(--bg-dropdown)', border: '1px solid var(--border-color)', borderRadius: 20, width: '100%', maxWidth: 560, padding: 24 }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', color: GOLD }}>Apply for Student Admission</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Fill out the applicant details for admission into Hifz Ul Quran or Dars-e-Nizami.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 14px', marginBottom: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>First Name *</label>
                  <input
                    type="text"
                    value={admissionForm.student_first_name}
                    onChange={(e) => setAdmissionForm((p) => ({ ...p, student_first_name: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Last Name *</label>
                  <input
                    type="text"
                    value={admissionForm.student_last_name}
                    onChange={(e) => setAdmissionForm((p) => ({ ...p, student_last_name: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', background: 'var(--border-light)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 14px', marginBottom: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Program *</label>
                  <select
                    value={admissionForm.course_type}
                    onChange={(e) => setAdmissionForm((p) => ({
                      ...p,
                      course_type: e.target.value,
                      desired_course: e.target.value === 'hifz' ? 'Hifz Ul Quran' : 'Pre 9th / Sanviya Aamah',
                    }))}
                    style={{ width: '100%', padding: '9px 12px', background: 'var(--bg-dropdown)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }}
                  >
                    <option value="hifz">Hifz Ul Quran</option>
                    <option value="dars_nizami">Dars-e-Nizami</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>Specific Class Level</label>
                  <select
                    value={admissionForm.desired_course}
                    onChange={(e) => setAdmissionForm((p) => ({ ...p, desired_course: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', background: 'var(--bg-dropdown)', border: '1px solid var(--border-color)', borderRadius: 8, color: 'var(--text-primary)' }}
                  >
                    {admissionForm.course_type === 'hifz' ? (
                      <option value="Hifz Ul Quran">Hifz Ul Quran (حفظ القرآن)</option>
                    ) : (
                      <>
                        <option value="Pre 9th / Sanviya Aamah">Pre 9th / Sanviya Aamah (سنویہ عامہ)</option>
                        <option value="9th / Sanviya Khasa">9th / Sanviya Khasa (سنویہ خاصہ)</option>
                        <option value="10th / Shahadah Aaliya">10th / Shahadah Aaliya (شہادہ عالیہ)</option>
                        <option value="11th / Shahadah Aalmiya">11th / Shahadah Aalmiya (شہادہ عالمیہ)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setShowAdmissionModal(false)}>Cancel</Button>
                <Button onClick={handleApplyAdmission}>Submit Application</Button>
              </div>
            </div>
          </div>
        )}
        </>
        )}
      </div>
    </>
  );
}
