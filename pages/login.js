import React, { useState, useEffect, useRef, memo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { authenticateUser, createUser } from '../lib/users';
import { login as setSession, getCurrentUser, getPortalPath } from '../lib/auth';

// ============================================================
// SVG ICON LIBRARY (Pure SVG - Clean, Sharp, Reliable)
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
  graduationCap: (size = 20, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"/>
      <path d="M21 9v6"/>
    </svg>
  ),
  sparkle: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" style={{ display: 'block' }}>
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"/>
    </svg>
  ),
  plus: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
};

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
// MEMOIZED BACKGROUND PARTICLES (Prevents glitch / re-triggering)
// ============================================================
const ParticleBackground = memo(() => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute',
        width: 350,
        height: 350,
        top: '15%',
        left: '10%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />
      <div style={{
        position: 'absolute',
        width: 450,
        height: 450,
        bottom: '10%',
        right: '10%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,33,71,0.5) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
    </div>
  );
});
ParticleBackground.displayName = 'ParticleBackground';

// ============================================================
// REUSABLE INPUT FIELD (Isolated component)
// ============================================================
const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, rightElement, ...rest }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      {label && <label style={styles.label}>{label}</label>}
      <div style={styles.inputWrapper}>
        <span style={{
          ...styles.inputIcon,
          color: focused ? '#F2A900' : 'rgba(255,255,255,0.4)'
        }}>
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
// MAIN LOGIN / SIGNUP PAGE
// ============================================================
export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);

  // Login fields
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  // Signup fields
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    cnic: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      router.replace(getPortalPath(user.role));
    }
  }, []);

  const handleCnicChange = (e, isSignup = false) => {
    const formatted = formatCNIC(e.target.value);
    if (isSignup) {
      setSignupData((prev) => ({ ...prev, cnic: formatted }));
    } else {
      setCnic(formatted);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!isValidCNIC(cnic)) {
      setMessage({ type: 'error', text: 'Please enter a valid CNIC (#####-#######-#)' });
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 600));

    const user = await authenticateUser(cnic, password);
    if (!user) {
      setMessage({ type: 'error', text: 'Invalid CNIC or password. Please try again.' });
      setLoading(false);
      return;
    }

    setSession(user);
    setMessage({ type: 'success', text: `Welcome, ${user.first_name}! Redirecting...` });

    setTimeout(() => {
      router.push(getPortalPath(user.role));
    }, 800);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const { firstName, lastName, cnic, phone, email, password, confirmPassword } = signupData;

    if (!isValidCNIC(cnic)) {
      setMessage({ type: 'error', text: 'Please enter a valid CNIC (#####-#######-#)' });
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 600));

    const result = await createUser({
      firstName,
      lastName,
      cnic,
      phone,
      email,
      password,
      role: 'guardian',
    });

    if (result.error) {
      setMessage({ type: 'error', text: result.error });
      setLoading(false);
      return;
    }

    setMessage({
      type: 'success',
      text: 'Account created successfully! Switching to sign in...',
    });
    setLoading(false);

    setTimeout(() => {
      setMode('login');
      setCnic(cnic);
      setMessage({ type: '', text: '' });
    }, 1500);
  };

  const fillTestAccount = (testCnic, testPassword) => {
    setCnic(testCnic);
    setPassword(testPassword);
    setMode('login');
    setMessage({ type: '', text: '' });
  };

  return (
    <>
      <Head>
        <title>Al-Faeq Education System</title>
        <link rel="icon" href="/faeq-logo.png" />
      </Head>

      <div style={styles.page}>
        <ParticleBackground />

        <div style={styles.container}>
          {/* Logo & Header */}
          <div style={styles.logoHeader}>
            <div style={styles.logoBadge}>
              <img
                src="/faeq-logo.png"
                alt="Al-Faeq Logo"
                style={styles.logoImage}
              />
            </div>
            <h1 style={styles.title}>Al-Faeq Education System</h1>
            <p style={styles.subtitle}>Portal Sign In</p>
          </div>

          {/* Main Card */}
          <div style={styles.card}>
            {/* Status Message */}
            {message.text && (
              <div style={styles.message(message.type)}>
                {message.type === 'error'
                  ? Icons.alertCircle(18, '#fca5a5')
                  : Icons.checkCircle(18, '#86efac')}
                <span>{message.text}</span>
              </div>
            )}

            {/* LOGIN FORM */}
            {mode === 'login' && (
              <form onSubmit={handleLogin}>
                <InputField
                  icon={Icons.idCard(20, 'currentColor')}
                  label="CNIC Number"
                  value={cnic}
                  onChange={(e) => handleCnicChange(e)}
                  placeholder="12345-1234567-1"
                  maxLength={15}
                  required
                />

                <InputField
                  icon={Icons.lock(20, 'currentColor')}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  rightElement={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={styles.passwordToggle}
                      tabIndex={-1}
                    >
                      {showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')}
                    </button>
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={styles.submitBtn}
                >
                  {loading ? (
                    <>
                      {Icons.loader(18, '#0a0e1a')}
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Sign In
                      {Icons.arrowRight(18, '#0a0e1a')}
                    </>
                  )}
                </button>
              </form>
            )}

            {/* SIGNUP FORM */}
            {mode === 'signup' && (
              <form onSubmit={handleSignup}>
                <div style={styles.inputRow}>
                  <InputField
                    icon={Icons.user(18, 'currentColor')}
                    label="First Name"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData((p) => ({ ...p, firstName: e.target.value }))}
                    placeholder="First name"
                    required
                  />
                  <InputField
                    icon={Icons.user(18, 'currentColor')}
                    label="Last Name"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData((p) => ({ ...p, lastName: e.target.value }))}
                    placeholder="Last name"
                    required
                  />
                </div>

                <InputField
                  icon={Icons.idCard(18, 'currentColor')}
                  label="CNIC Number"
                  value={signupData.cnic}
                  onChange={(e) => handleCnicChange(e, true)}
                  placeholder="12345-1234567-1"
                  maxLength={15}
                  required
                />

                <InputField
                  icon={Icons.phone(18, 'currentColor')}
                  label="Phone Number"
                  type="tel"
                  value={signupData.phone}
                  onChange={(e) => setSignupData((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="03001234567"
                  required
                />

                <InputField
                  icon={Icons.mail(18, 'currentColor')}
                  label="Email Address"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                />

                <InputField
                  icon={Icons.lock(18, 'currentColor')}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={signupData.password}
                  onChange={(e) => setSignupData((p) => ({ ...p, password: e.target.value }))}
                  placeholder="Min 6 characters"
                  required
                  rightElement={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={styles.passwordToggle}
                      tabIndex={-1}
                    >
                      {showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')}
                    </button>
                  }
                />

                <InputField
                  icon={Icons.shield(18, 'currentColor')}
                  label="Confirm Password"
                  type="password"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData((p) => ({ ...p, confirmPassword: e.target.value }))}
                  placeholder="Re-enter password"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={styles.submitBtn}
                >
                  {loading ? (
                    <>
                      {Icons.loader(18, '#0a0e1a')}
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      {Icons.arrowRight(18, '#0a0e1a')}
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Toggle Button Below Form */}
            <div style={styles.toggleSection}>
              {mode === 'login' ? (
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setMessage({ type: '', text: '' }); }}
                  style={styles.toggleBtn}
                >
                  {Icons.plus(16, '#F2A900')}
                  Create new account
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setMode('login'); setMessage({ type: '', text: '' }); }}
                  style={styles.toggleBtn}
                >
                  {Icons.user(16, '#F2A900')}
                  Already have an account? Sign In
                </button>
              )}
            </div>
          </div>

          {/* Test Accounts Quick Fill */}
          {mode === 'login' && (
            <div style={styles.testAccounts}>
              <div style={styles.testTitle}>
                {Icons.sparkle(12, '#F2A900')}
                <span>Quick Demo Login</span>
              </div>
              <div style={styles.testGrid}>
                {[
                  { role: 'Admin', cnic: '35202-1234567-1', pass: 'admin123', icon: Icons.shield(14, '#F2A900') },
                  { role: 'Teacher', cnic: '35202-7654321-2', pass: 'teacher123', icon: Icons.graduationCap(14, '#F2A900') },
                  { role: 'Guardian', cnic: '35202-1111111-3', pass: 'guardian123', icon: Icons.user(14, '#F2A900') },
                ].map((acc) => (
                  <button
                    key={acc.role}
                    type="button"
                    style={styles.testCard}
                    onClick={() => fillTestAccount(acc.cnic, acc.pass)}
                  >
                    <span style={styles.testRole}>
                      {acc.icon}
                      {acc.role}
                    </span>
                    <span style={styles.testCnic}>{acc.cnic}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={styles.footer}>
            <p>Al-Faeq Education System © 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================
// STYLES OBJECT (Clean, crisp, slightly rounded corners)
// ============================================================
const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '24px 16px',
    position: 'relative',
    background: '#0a0e1a',
  },
  container: {
    width: '100%',
    maxWidth: '430px',
    position: 'relative',
    zIndex: 1,
  },
  logoHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '28px',
    textAlign: 'center',
  },
  logoBadge: {
    width: 72,
    height: 72,
    borderRadius: 20,
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(242, 169, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    padding: 10,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.45)',
    fontWeight: 500,
  },
  card: {
    background: 'rgba(18, 26, 51, 0.75)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '32px 28px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  label: {
    display: 'block',
    fontSize: '0.76rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '13px 14px 13px 44px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    fontSize: '0.92rem',
    color: '#ffffff',
    outline: 'none',
    boxSizing: 'border-box',
  },
  inputFocus: {
    borderColor: '#F2A900',
    background: 'rgba(255,255,255,0.07)',
    boxShadow: '0 0 0 3px rgba(242, 169, 0, 0.15)',
  },
  passwordToggle: {
    position: 'absolute',
    right: 12,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.4)',
    display: 'flex',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
  },
  submitBtn: {
    width: '100%',
    padding: '14px 20px',
    background: 'linear-gradient(135deg, #F2A900 0%, #d99600 100%)',
    border: 'none',
    borderRadius: 10,
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#0a0e1a',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    boxShadow: '0 4px 16px rgba(242, 169, 0, 0.25)',
  },
  toggleSection: {
    marginTop: 20,
    paddingTop: 18,
    borderTop: '1px solid rgba(255,255,255,0.06)',
    textAlign: 'center',
  },
  toggleBtn: {
    background: 'rgba(242, 169, 0, 0.08)',
    border: '1px solid rgba(242, 169, 0, 0.2)',
    borderRadius: 10,
    padding: '11px 20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#F2A900',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
  },
  message: (type) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 14px',
    borderRadius: 10,
    fontSize: '0.84rem',
    fontWeight: 500,
    marginBottom: 20,
    background: type === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
    border: `1px solid ${type === 'error' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(34, 197, 94, 0.25)'}`,
    color: type === 'error' ? '#fca5a5' : '#86efac',
  }),
  testAccounts: {
    marginTop: 20,
    padding: '16px 18px',
    background: 'rgba(255,255,255,0.02)',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.05)',
  },
  testTitle: {
    fontSize: '0.74rem',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  testGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 8,
  },
  testCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 8,
    padding: '10px 8px',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  testRole: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.8)',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  testCnic: {
    fontSize: '0.68rem',
    color: 'rgba(242, 169, 0, 0.7)',
    fontFamily: 'monospace',
  },
  inputRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  footer: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.25)',
  },
};
