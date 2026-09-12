import React, { useState, useEffect, useRef, memo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { supabase } from '../lib/supabaseClient';
import { getCurrentUserSync, getCurrentUser, cacheUserProfile, getPortalPath } from '../lib/auth';

// ============================================================
// CNIC FORMATTER: #####-#######-#
// ============================================================
const formatCNIC = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 13);
  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
};

const isValidCNIC = (cnic) => /^\d{5}-\d{7}-\d{1}$/.test(cnic);

// ============================================================
// SVG ICON LIBRARY
// ============================================================
const Icons = {
  shield: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  user: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  idCard: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
      <path d="M6 15h2"/>
      <path d="M10 15h4"/>
    </svg>
  ),
  lock: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  eye: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  eyeOff: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  mail: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 7l-10 7L2 7"/>
    </svg>
  ),
  phone: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  arrowRight: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  alertCircle: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  checkCircle: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  loader: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite', display: 'block' }}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  key: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  ),
  plus: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  arrowLeft: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  ),
};

// ============================================================
// BACKGROUND
// ============================================================
const ParticleBackground = memo(() => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div style={{
      position: 'absolute', width: 350, height: 350, top: '15%', left: '10%',
      borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)',
      filter: 'blur(50px)',
    }} />
    <div style={{
      position: 'absolute', width: 450, height: 450, bottom: '10%', right: '10%',
      borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,33,71,0.5) 0%, transparent 70%)',
      filter: 'blur(60px)',
    }} />
  </div>
));
ParticleBackground.displayName = 'ParticleBackground';

// ============================================================
// INPUT FIELD
// ============================================================
const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, rightElement, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      {label && <label style={styles.label}>{label}</label>}
      <div style={styles.inputWrapper}>
        <span style={{ ...styles.inputIcon, color: focused ? '#F2A900' : 'rgba(255,255,255,0.4)' }}>
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...styles.input,
            ...(focused ? styles.inputFocus : {}),
            ...(rightElement ? { paddingRight: 44 } : {}),
          }}
          {...rest}
        />
        {rightElement}
      </div>
    </div>
  );
};

// ============================================================
// OTP INPUT (6 boxes)
// ============================================================
const OtpInput = ({ value, onChange }) => {
  const inputRefs = useRef([]);
  const digits = value.split('').concat(Array(6).fill('')).slice(0, 6);

  const handleKeyDown = (idx, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newVal = digits.map((d, i) => (i === idx ? '' : d)).join('');
      onChange(newVal);
      if (idx > 0) inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleChange = (idx, e) => {
    const char = e.target.value.replace(/\D/g, '').slice(-1);
    const newDigits = [...digits];
    newDigits[idx] = char;
    const newVal = newDigits.join('');
    onChange(newVal);
    if (char && idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    onChange(pasted.padEnd(6, '').slice(0, 6));
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', margin: '24px 0' }}>
      {digits.map((d, idx) => (
        <input
          key={idx}
          ref={el => inputRefs.current[idx] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={(e) => handleChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onPaste={handlePaste}
          style={styles.otpBox}
        />
      ))}
    </div>
  );
};

// ============================================================
// MAIN LOGIN PAGE
// ============================================================
export default function LoginPage() {
  const router = useRouter();
  // mode: 'login' | 'signup' | 'otp' | 'forgot'
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);

  // Login
  const [loginCnic, setLoginCnic] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup
  const [signupData, setSignupData] = useState({
    firstName: '', lastName: '', cnic: '', phone: '', email: '', password: '', confirmPassword: '',
  });

  // OTP
  const [otpCode, setOtpCode] = useState('');
  const [otpEmail, setOtpEmail] = useState(''); // email used during signup

  // Forgot password
  const [forgotCnic, setForgotCnic] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // On mount: if already logged in, redirect
  useEffect(() => {
    const cached = getCurrentUserSync();
    if (cached) {
      router.replace(getPortalPath(cached.role));
      return;
    }
    // Also check live session
    getCurrentUser().then((user) => {
      if (user) {
        cacheUserProfile(user);
        router.replace(getPortalPath(user.role));
      }
    });
  }, []);

  const setErr = (text) => setMessage({ type: 'error', text });
  const setSuccess = (text) => setMessage({ type: 'success', text });
  const clearMsg = () => setMessage({ type: '', text: '' });

  // ------------------------------------------------------------------
  // LOGIN
  // ------------------------------------------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    clearMsg();

    if (!isValidCNIC(loginCnic)) {
      setErr('Please enter a valid CNIC (e.g. 35202-1234567-1)');
      setLoading(false);
      return;
    }

    // Step 1: Look up email by CNIC
    const { data: emailResult, error: rpcError } = await supabase
      .rpc('get_email_by_cnic', { p_cnic: loginCnic });

    if (rpcError || !emailResult) {
      setErr('No account found for this CNIC. Please sign up or check your CNIC.');
      setLoading(false);
      return;
    }

    // Step 2: Sign in with email + password
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: emailResult,
      password: loginPassword,
    });

    if (authError) {
      setErr('Incorrect password. Please try again or use Forgot Password.');
      setLoading(false);
      return;
    }

    // Step 3: Fetch profile from public.users
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', authData.user.id)
      .single();

    if (!profile) {
      setErr('Account found but profile is missing. Please contact support.');
      setLoading(false);
      return;
    }

    const { password_hash, ...safeProfile } = profile;
    cacheUserProfile(safeProfile);
    setSuccess(`Welcome, ${safeProfile.first_name}! Redirecting...`);

    setTimeout(() => {
      router.push(getPortalPath(safeProfile.role));
    }, 800);
  };

  // ------------------------------------------------------------------
  // SIGNUP (Guardian self-registration)
  // ------------------------------------------------------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    clearMsg();

    const { firstName, lastName, cnic, phone, email, password, confirmPassword } = signupData;

    if (!isValidCNIC(cnic)) {
      setErr('Please enter a valid CNIC (e.g. 35202-1234567-1)');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setErr('Password must be at least 8 characters');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setErr('Passwords do not match');
      setLoading(false);
      return;
    }

    // Check if CNIC already registered
    const { data: existing } = await supabase.rpc('get_email_by_cnic', { p_cnic: cnic });
    if (existing) {
      setErr('An account with this CNIC already exists. Please sign in.');
      setLoading(false);
      return;
    }

    // Sign up with Supabase — sends OTP email
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          cnic,
          phone,
          role: 'guardian',
        },
      },
    });

    if (error) {
      setErr(error.message);
      setLoading(false);
      return;
    }

    setOtpEmail(email);
    setLoading(false);
    setMode('otp');
    setSuccess('A 6-digit verification code has been sent to your email.');
  };

  // ------------------------------------------------------------------
  // OTP VERIFICATION
  // ------------------------------------------------------------------
  const handleOtpVerify = async (e) => {
    e.preventDefault();
    if (otpCode.replace(/\D/g, '').length !== 6) {
      setErr('Please enter the complete 6-digit code.');
      return;
    }
    setLoading(true);
    clearMsg();

    const { data, error } = await supabase.auth.verifyOtp({
      email: otpEmail,
      token: otpCode,
      type: 'signup',
    });

    if (error) {
      setErr('Invalid or expired code. Please try again or resend.');
      setLoading(false);
      return;
    }

    // Fetch the newly created profile
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profile) {
      const { password_hash, ...safeProfile } = profile;
      // Also insert into guardians table
      await supabase.from('guardians').upsert({ id: profile.id }).select();
      cacheUserProfile(safeProfile);
      setSuccess('Email verified! Redirecting to your portal...');
      setTimeout(() => router.push(getPortalPath(safeProfile.role)), 1000);
    } else {
      setSuccess('Verified! Please sign in.');
      setTimeout(() => { setMode('login'); clearMsg(); }, 1500);
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    setLoading(true);
    clearMsg();
    const { error } = await supabase.auth.resend({ type: 'signup', email: otpEmail });
    if (error) {
      setErr('Failed to resend code: ' + error.message);
    } else {
      setSuccess('A new code has been sent to your email.');
    }
    setLoading(false);
  };

  // ------------------------------------------------------------------
  // FORGOT PASSWORD
  // ------------------------------------------------------------------
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    clearMsg();

    if (!isValidCNIC(forgotCnic)) {
      setErr('Please enter a valid CNIC.');
      setLoading(false);
      return;
    }

    const { data: email } = await supabase.rpc('get_email_by_cnic', { p_cnic: forgotCnic });
    if (!email) {
      setErr('No account found for this CNIC.');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setErr(error.message);
    } else {
      setForgotSent(true);
      setSuccess(`Password reset link sent to the email associated with this CNIC.`);
    }
    setLoading(false);
  };

  // ------------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------------
  return (
    <>
      <Head>
        <title>Al-Faeq Education System</title>
        <link rel="icon" href="/faeq-logo.png" />
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          input::placeholder { color: rgba(255,255,255,0.25); }
          input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px rgba(18,26,51,0.95) inset !important; -webkit-text-fill-color: #fff !important; }
        `}</style>
      </Head>

      <div style={styles.page}>
        <ParticleBackground />
        <div style={styles.container}>

          {/* Logo & Header */}
          <div style={styles.logoHeader}>
            <div style={styles.logoBadge}>
              <img src="/faeq-logo.png" alt="Al-Faeq Logo" style={styles.logoImage} />
            </div>
            <h1 style={styles.title}>Al-Faeq Education System</h1>
            <p style={styles.subtitle}>
              {mode === 'login'   && 'Portal Sign In'}
              {mode === 'signup'  && 'Create Account'}
              {mode === 'otp'     && 'Verify Your Email'}
              {mode === 'forgot'  && 'Recover Password'}
            </p>
          </div>

          {/* Main Card */}
          <div style={styles.card}>

            {/* Status Message */}
            {message.text && (
              <div style={styles.message(message.type)}>
                {message.type === 'error' ? Icons.alertCircle(18, '#fca5a5') : Icons.checkCircle(18, '#86efac')}
                <span>{message.text}</span>
              </div>
            )}

            {/* ---- LOGIN ---- */}
            {mode === 'login' && (
              <form onSubmit={handleLogin}>
                <InputField
                  icon={Icons.idCard(20, 'currentColor')}
                  label="CNIC Number"
                  value={loginCnic}
                  onChange={(e) => setLoginCnic(formatCNIC(e.target.value))}
                  placeholder="12345-1234567-1"
                  maxLength={15}
                  required
                />
                <InputField
                  icon={Icons.lock(20, 'currentColor')}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  rightElement={
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.passwordToggle} tabIndex={-1}>
                      {showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')}
                    </button>
                  }
                />

                {/* Forgot password link */}
                <div style={{ textAlign: 'right', marginBottom: 16, marginTop: -10 }}>
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); clearMsg(); }}
                    style={styles.linkBtn}
                  >
                    Forgot password?
                  </button>
                </div>

                <button type="submit" disabled={loading} style={styles.submitBtn}>
                  {loading ? <>{Icons.loader(18, '#0a0e1a')} Authenticating...</> : <>Sign In {Icons.arrowRight(18, '#0a0e1a')}</>}
                </button>
              </form>
            )}

            {/* ---- SIGNUP ---- */}
            {mode === 'signup' && (
              <form onSubmit={handleSignup}>
                <div style={styles.inputRow}>
                  <InputField
                    icon={Icons.user(18, 'currentColor')}
                    label="First Name"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData(p => ({ ...p, firstName: e.target.value }))}
                    placeholder="First name"
                    required
                  />
                  <InputField
                    icon={Icons.user(18, 'currentColor')}
                    label="Last Name"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData(p => ({ ...p, lastName: e.target.value }))}
                    placeholder="Last name"
                    required
                  />
                </div>

                <InputField
                  icon={Icons.idCard(18, 'currentColor')}
                  label="CNIC Number"
                  value={signupData.cnic}
                  onChange={(e) => setSignupData(p => ({ ...p, cnic: formatCNIC(e.target.value) }))}
                  placeholder="12345-1234567-1"
                  maxLength={15}
                  required
                />

                <InputField
                  icon={Icons.phone(18, 'currentColor')}
                  label="Phone Number"
                  type="tel"
                  value={signupData.phone}
                  onChange={(e) => setSignupData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="03001234567"
                  required
                />

                <InputField
                  icon={Icons.mail(18, 'currentColor')}
                  label="Email Address"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                />

                <InputField
                  icon={Icons.lock(18, 'currentColor')}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={signupData.password}
                  onChange={(e) => setSignupData(p => ({ ...p, password: e.target.value }))}
                  placeholder="Min 8 characters"
                  required
                  rightElement={
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.passwordToggle} tabIndex={-1}>
                      {showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')}
                    </button>
                  }
                />

                <InputField
                  icon={Icons.shield(18, 'currentColor')}
                  label="Confirm Password"
                  type="password"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData(p => ({ ...p, confirmPassword: e.target.value }))}
                  placeholder="Re-enter password"
                  required
                />

                <button type="submit" disabled={loading} style={styles.submitBtn}>
                  {loading ? <>{Icons.loader(18, '#0a0e1a')} Creating Account...</> : <>Create Account {Icons.arrowRight(18, '#0a0e1a')}</>}
                </button>
              </form>
            )}

            {/* ---- OTP VERIFICATION ---- */}
            {mode === 'otp' && (
              <form onSubmit={handleOtpVerify}>
                <p style={styles.otpHint}>
                  Enter the 6-digit code sent to <strong style={{ color: '#F2A900' }}>{otpEmail}</strong>
                </p>

                <OtpInput value={otpCode} onChange={setOtpCode} />

                <button type="submit" disabled={loading} style={styles.submitBtn}>
                  {loading ? <>{Icons.loader(18, '#0a0e1a')} Verifying...</> : <>Verify Code {Icons.arrowRight(18, '#0a0e1a')}</>}
                </button>

                <div style={{ textAlign: 'center', marginTop: 16 }}>
                  <button type="button" onClick={handleResendOtp} disabled={loading} style={styles.linkBtn}>
                    Didn&apos;t receive it? Resend code
                  </button>
                </div>
              </form>
            )}

            {/* ---- FORGOT PASSWORD ---- */}
            {mode === 'forgot' && !forgotSent && (
              <form onSubmit={handleForgotPassword}>
                <p style={styles.otpHint}>
                  Enter your CNIC. We&apos;ll send a password reset link to your registered email.
                </p>
                <InputField
                  icon={Icons.idCard(20, 'currentColor')}
                  label="CNIC Number"
                  value={forgotCnic}
                  onChange={(e) => setForgotCnic(formatCNIC(e.target.value))}
                  placeholder="12345-1234567-1"
                  maxLength={15}
                  required
                />
                <button type="submit" disabled={loading} style={styles.submitBtn}>
                  {loading ? <>{Icons.loader(18, '#0a0e1a')} Sending...</> : <>Send Reset Link {Icons.arrowRight(18, '#0a0e1a')}</>}
                </button>
              </form>
            )}

            {/* ---- TOGGLE / BACK BUTTONS ---- */}
            <div style={styles.toggleSection}>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => { setMode('signup'); clearMsg(); }}
                  style={styles.toggleBtn}
                >
                  {Icons.plus(16, '#F2A900')}
                  Create new account
                </button>
              )}
              {(mode === 'signup' || mode === 'forgot') && (
                <button
                  type="button"
                  onClick={() => { setMode('login'); clearMsg(); setForgotSent(false); }}
                  style={styles.toggleBtn}
                >
                  {Icons.arrowLeft(16, '#F2A900')}
                  Back to Sign In
                </button>
              )}
              {mode === 'otp' && (
                <button
                  type="button"
                  onClick={() => { setMode('signup'); clearMsg(); setOtpCode(''); }}
                  style={styles.toggleBtn}
                >
                  {Icons.arrowLeft(16, '#F2A900')}
                  Back to Signup
                </button>
              )}
            </div>
          </div>

          <div style={styles.footer}>
            <p>Al-Faeq Education System © 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  page: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    minHeight: '100vh', padding: '24px 16px', position: 'relative', background: '#0a0e1a',
  },
  container: { width: '100%', maxWidth: '430px', position: 'relative', zIndex: 1 },
  logoHeader: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px', textAlign: 'center',
  },
  logoBadge: {
    width: 72, height: 72, borderRadius: 20, background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(242, 169, 0, 0.3)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', marginBottom: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.3)', padding: 10,
  },
  logoImage: { width: '100%', height: '100%', objectFit: 'contain' },
  title: { fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 4 },
  subtitle: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 },
  card: {
    background: 'rgba(18, 26, 51, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
    borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', padding: '32px 28px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  label: {
    display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)',
    marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em',
  },
  inputWrapper: { position: 'relative', display: 'flex', alignItems: 'center' },
  inputIcon: {
    position: 'absolute', left: 14, display: 'flex', alignItems: 'center',
    justifyContent: 'center', zIndex: 1, pointerEvents: 'none',
  },
  input: {
    width: '100%', padding: '13px 14px 13px 44px', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: '0.92rem',
    color: '#ffffff', outline: 'none', boxSizing: 'border-box',
  },
  inputFocus: {
    borderColor: '#F2A900', background: 'rgba(255,255,255,0.07)',
    boxShadow: '0 0 0 3px rgba(242, 169, 0, 0.15)',
  },
  passwordToggle: {
    position: 'absolute', right: 12, background: 'none', border: 'none', cursor: 'pointer',
    color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', padding: 4, borderRadius: 6,
  },
  submitBtn: {
    width: '100%', padding: '14px 20px',
    background: 'linear-gradient(135deg, #F2A900 0%, #d99600 100%)',
    border: 'none', borderRadius: 10, fontSize: '0.92rem', fontWeight: 700, color: '#0a0e1a',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    marginTop: 8, boxShadow: '0 4px 16px rgba(242, 169, 0, 0.25)',
  },
  toggleSection: {
    marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center',
  },
  toggleBtn: {
    background: 'rgba(242, 169, 0, 0.08)', border: '1px solid rgba(242, 169, 0, 0.2)',
    borderRadius: 10, padding: '11px 20px', fontSize: '0.85rem', fontWeight: 600, color: '#F2A900',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, width: '100%',
  },
  linkBtn: {
    background: 'none', border: 'none', color: 'rgba(242,169,0,0.75)', cursor: 'pointer',
    fontSize: '0.8rem', fontWeight: 500, padding: 0,
    textDecoration: 'underline', textDecorationStyle: 'dotted',
  },
  message: (type) => ({
    display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px',
    borderRadius: 10, fontSize: '0.84rem', fontWeight: 500, marginBottom: 20,
    background: type === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
    border: `1px solid ${type === 'error' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(34, 197, 94, 0.25)'}`,
    color: type === 'error' ? '#fca5a5' : '#86efac',
  }),
  inputRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  otpHint: { textAlign: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 4 },
  otpBox: {
    width: 48, height: 56, textAlign: 'center', fontSize: '1.4rem', fontWeight: 700,
    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 10, color: '#ffffff', outline: 'none', caretColor: '#F2A900',
  },
  footer: { textAlign: 'center', marginTop: 24, fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' },
};
