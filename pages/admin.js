import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCurrentUser, getCurrentUserSync, logout } from '../lib/auth';
import * as db from '../lib/db';
import { QURAN_SURAHS, QURAN_PARAS } from '../lib/quranData';

// ============================================================
// SVG ICONS (Pure vector, zero emojis)
// ============================================================
const Icons = {
  dashboard: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
  ),
  users: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  teacher: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" /><path d="M21 9v6" /></svg>
  ),
  calendar: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  student: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  admission: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  ),
  challan: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /><line x1="6" y1="14" x2="6" y2="14.01" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
  ),
  guardian: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  attendance: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 14l2 2 4-4" /></svg>
  ),
  results: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
  ),
  announcement: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
  ),
  search: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
  ),
  plus: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
  ),
  check: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  x: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  ),
  logout: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
  ),
  chevronDown: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  ),
  edit: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
  ),
  trash: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
  ),
  eye: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  menu: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
  ),
  activity: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
  ),
  settings: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
  ),
  flag: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
  ),
  download: (s = 16, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
  ),
  book: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
  ),
};

const GOLD = '#F2A900';
const NAVY = '#002147';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: Icons.dashboard },
  { id: 'teachers', label: 'Teachers', icon: Icons.teacher },
  { id: 'sessions', label: 'Sessions & Classes', icon: Icons.calendar },
  { id: 'students', label: 'Students', icon: Icons.student },
  { id: 'admissions', label: 'Admissions', icon: Icons.admission },
  { id: 'challans', label: 'Challans & Fees', icon: Icons.challan },
  { id: 'guardians', label: 'Guardians', icon: Icons.guardian },
  { id: 'audit', label: 'Audit Trail', icon: Icons.activity },
  { id: 'settings', label: 'Settings', icon: Icons.settings },
  { id: 'announcements', label: 'Announcements', icon: Icons.announcement },
];

// ============================================================
// REUSABLE UI ATOMS
// ============================================================

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 24,
    transition: 'all 0.3s ease',
    ...style,
  }}>
    {children}
  </div>
);

const StatCard = ({ label, value, icon, color, sublabel }) => (
  <Card style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'default' }}>
    <div style={{
      width: 48, height: 48, borderRadius: 14,
      background: `${color}18`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {icon(22, color)}
    </div>
    <div>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, fontWeight: 600 }}>{label}</div>
      {sublabel && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{sublabel}</div>}
    </div>
  </Card>
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
    gold: { background: 'rgba(242,169,0,0.15)', color: GOLD, border: '1px solid rgba(242,169,0,0.3)' },
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

const InputField = ({ label, value, onChange, type = 'text', placeholder, required, disabled }) => (
  <div style={{ marginBottom: 14 }}>
    {label && <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontWeight: 500 }}>{label}{required && <span style={{ color: '#ef4444' }}> *</span>}</label>}
    <input
      type={type}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        color: '#fff',
        fontSize: '0.85rem',
        outline: 'none',
        transition: 'border-color 0.2s',
      }}
    />
  </div>
);

const SelectField = ({ label, value, onChange, options, required, disabled }) => (
  <div style={{ marginBottom: 14 }}>
    {label && <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontWeight: 500 }}>{label}{required && <span style={{ color: '#ef4444' }}> *</span>}</label>}
    <select
      value={value ?? ''}
      onChange={onChange}
      required={required}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        color: '#fff',
        fontSize: '0.85rem',
        outline: 'none',
      }}
    >
      <option value="" style={{ background: '#1a1f2e' }}>Select...</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} style={{ background: '#1a1f2e' }}>{o.label}</option>
      ))}
    </select>
  </div>
);

const Modal = ({ title, onClose, children, width = 560 }) => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 20,
  }}>
    <div style={{
      background: '#111625',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 20,
      width: '100%',
      maxWidth: width,
      maxHeight: '88vh',
      overflow: 'auto',
      boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0,
        background: '#111625',
        zIndex: 1,
        borderRadius: '20px 20px 0 0',
      }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>{title}</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: 4 }}>
          {Icons.x(18)}
        </button>
      </div>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  </div>
);

const Table = ({ columns, data, actions }) => (
  <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
      <thead>
        <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
          {columns.map((col) => (
            <th key={col.key} style={{ padding: '12px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{col.label}</th>
          ))}
          {actions && <th style={{ padding: '12px 16px', textAlign: 'right', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.75rem' }}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan={columns.length + (actions ? 1 : 0)} style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.25)' }}>No records found</td></tr>
        ) : data.map((row, i) => (
          <tr key={row.id || i} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            {columns.map((col) => (
              <td key={col.key} style={{ padding: '12px 16px', color: '#e2e8f0', whiteSpace: col.nowrap ? 'nowrap' : 'normal' }}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
            {actions && (
              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                  {actions(row)}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionHeader = ({ title, subtitle, action }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
    <div>
      <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{subtitle}</p>}
    </div>
    {action}
  </div>
);

const ActionButton = ({ icon, onClick, title, color = 'rgba(255,255,255,0.4)' }) => (
  <button onClick={onClick} title={title} style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 8, padding: 6,
    cursor: 'pointer', transition: 'all 0.2s',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color,
  }}>
    {icon}
  </button>
);

// ============================================================
// SECTION 1: DASHBOARD
// ============================================================
function DashboardSection({ user, activeSession }) {
  const [stats, setStats] = useState(null);
  const [flags, setFlags] = useState([]);
  const [resolvingFlag, setResolvingFlag] = useState(null);
  const [resolutionNotes, setResolutionNotes] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(false);

  const loadData = useCallback(async () => {
    const [s, f] = await Promise.all([
      db.getDashboardStats(activeSession?.id),
      db.getActiveAbsenceFlags(),
    ]);
    setStats(s);
    setFlags(f);
  }, [activeSession]);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults(null); return; }
    const t = setTimeout(async () => {
      setSearching(true);
      const results = await db.globalSearch(searchQuery);
      setSearchResults(results);
      setSearching(false);
    }, 400);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const handleResolveFlag = async () => {
    if (!resolvingFlag) return;
    await db.resolveAbsenceFlag(resolvingFlag.id, user.id, resolutionNotes);
    setResolvingFlag(null);
    setResolutionNotes('');
    loadData();
  };

  return (
    <div>
      {/* Mega Search Bar */}
      <div style={{ position: 'relative', marginBottom: 28 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16, padding: '14px 20px',
        }}>
          {Icons.search(20, 'rgba(255,255,255,0.4)')}
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students, teachers, guardians by name, CNIC, or roll number..."
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: '#fff', fontSize: '0.92rem',
            }}
          />
          {searching && <div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.1)', borderTopColor: GOLD, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />}
        </div>
        {searchResults && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 8,
            background: '#151928', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 14, padding: 16, zIndex: 100,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            maxHeight: 320, overflow: 'auto',
          }}>
            {['students', 'teachers', 'guardians'].map((cat) => (
              searchResults[cat]?.length > 0 && (
                <div key={cat} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', marginBottom: 6, letterSpacing: '0.1em' }}>{cat}</div>
                  {searchResults[cat].map((item) => (
                    <div key={item.id} style={{ padding: '8px 12px', borderRadius: 8, cursor: 'pointer', fontSize: '0.85rem', color: '#e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{item.first_name} {item.last_name} {item.roll_no && <span style={{ color: GOLD, marginLeft: 8 }}>({item.roll_no})</span>}</span>
                      {item.program_type && <Badge text={item.program_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami'} color="#3b82f6" />}
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
        )}
      </div>

      {/* KPI Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16, marginBottom: 28 }}>
        <StatCard label="Hifz Students" value={stats?.hifzStudents ?? '—'} icon={Icons.book} color={GOLD} sublabel="Quran Memorization" />
        <StatCard label="Dars-e-Nizami" value={stats?.darsStudents ?? '—'} icon={Icons.student} color="#3b82f6" sublabel="Sanviya & Shahadah" />
        <StatCard label="Total Teachers" value={stats?.totalTeachers ?? '—'} icon={Icons.teacher} color="#10b981" />
        <StatCard label="Pending Admissions" value={stats?.pendingAdmissions ?? '—'} icon={Icons.admission} color="#f97316" />
        <StatCard label="Pending Challans" value={stats?.pendingChallans ?? '—'} icon={Icons.challan} color="#a855f7" />
        <StatCard label="Absence Escalations" value={stats?.activeAbsenceFlags ?? '—'} icon={Icons.flag} color="#ef4444" sublabel="Requires Office Visit" />
      </div>

      {/* Absence Escalation Banner Widget */}
      {flags.length > 0 && (
        <Card style={{ marginBottom: 28, border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            {Icons.flag(20, '#ef4444')}
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#fca5a5', fontWeight: 700 }}>
              Flagged Students (2+ Consecutive Absences — Visit Office Requested)
            </h3>
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            {flags.map((f) => (
              <div key={f.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 16px', background: 'rgba(0,0,0,0.2)', borderRadius: 10, flexWrap: 'wrap', gap: 8,
              }}>
                <div>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{f.student?.first_name} {f.student?.last_name}</span>
                  <span style={{ color: GOLD, marginLeft: 8, fontSize: '0.8rem' }}>({f.student?.roll_no})</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: 12, fontSize: '0.78rem' }}>
                    Class: {f.student?.class?.class_name} &bull; Guardian: {f.student?.guardian?.user?.first_name} ({f.student?.guardian?.user?.phone})
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Badge text={`${f.consecutive_absences} Absences`} color="#ef4444" />
                  <Button variant="success" onClick={() => setResolvingFlag(f)} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                    Mark Visited & Clear
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Flag Resolution Modal */}
      {resolvingFlag && (
        <Modal title={`Resolve Absence Flag: ${resolvingFlag.student?.first_name}`} onClose={() => setResolvingFlag(null)}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: 14 }}>
            Guardian {resolvingFlag.student?.guardian?.user?.first_name} visited the office regarding {resolvingFlag.student?.first_name}'s {resolvingFlag.consecutive_absences} consecutive absences. Enter resolution notes to clear the portal banner.
          </p>
          <InputField label="Resolution Remarks" value={resolutionNotes} onChange={(e) => setResolutionNotes(e.target.value)} placeholder="e.g. Guardian visited, student had medical leave, submitted doctor note." required />
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="secondary" onClick={() => setResolvingFlag(null)}>Cancel</Button>
            <Button variant="success" onClick={handleResolveFlag}>Clear Absence Flag</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 2: TEACHERS
// ============================================================
function TeachersSection({ user }) {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({
    cnic: '', password: '', first_name: '', last_name: '', email: '', phone: '',
    education: '', employee_id: '', qualification: '', specialization: '', joining_date: '',
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  const loadTeachers = useCallback(async () => {
    setLoading(true);
    const data = await db.getAllTeachers();
    setTeachers(data);
    setLoading(false);
  }, []);

  useEffect(() => { loadTeachers(); }, [loadTeachers]);

  const handleSave = async () => {
    setSaving(true); setMsg('');
    if (editingTeacher) {
      // Update existing
      await db.updateTeacher(editingTeacher.id, {
        qualification: formData.qualification,
        specialization: formData.specialization,
      }, user.id);
      await db.updateUser(editingTeacher.id, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
      }, user.id);
    } else {
      // Create new
      const result = await db.createTeacher(
        { cnic: formData.cnic, password: formData.password, first_name: formData.first_name, last_name: formData.last_name, email: formData.email, phone: formData.phone, education: formData.education },
        { employee_id: formData.employee_id, qualification: formData.qualification, specialization: formData.specialization, joining_date: formData.joining_date },
        user.id
      );
      if (result.error) { setMsg(result.error); setSaving(false); return; }
    }
    setShowModal(false);
    setEditingTeacher(null);
    loadTeachers();
    setSaving(false);
  };

  const openEdit = (t) => {
    setEditingTeacher(t);
    setFormData({
      cnic: t.user?.cnic || '',
      password: '',
      first_name: t.user?.first_name || '',
      last_name: t.user?.last_name || '',
      email: t.user?.email || '',
      phone: t.user?.phone || '',
      education: t.user?.education || '',
      employee_id: t.employee_id || '',
      qualification: t.qualification || '',
      specialization: t.specialization || '',
      joining_date: t.joining_date || '',
    });
    setShowModal(true);
  };

  const columns = [
    { key: 'employee_id', label: 'ID', nowrap: true },
    { key: 'name', label: 'Name', render: (r) => `${r.user?.first_name || ''} ${r.user?.last_name || ''}` },
    { key: 'cnic', label: 'CNIC', render: (r) => r.user?.cnic, nowrap: true },
    { key: 'phone', label: 'Phone', render: (r) => r.user?.phone || '—', nowrap: true },
    { key: 'specialization', label: 'Specialization' },
    { key: 'qualification', label: 'Qualification' },
    { key: 'status', label: 'Status', render: (r) => <Badge text={r.status} color={r.status === 'active' ? '#22c55e' : '#ef4444'} /> },
  ];

  return (
    <div>
      <SectionHeader title="Teachers" subtitle={`${teachers.length} registered Islamic scholars & teachers`} action={
        <Button onClick={() => { setEditingTeacher(null); setFormData({}); setShowModal(true); }}>{Icons.plus(16)} Add Teacher</Button>
      } />
      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <>
          <div className="desktop-hide-on-mobile">
            <Table columns={columns} data={teachers} actions={(row) => (
              <>
                <ActionButton icon={Icons.edit(14)} title="Edit Teacher" color="#3b82f6" onClick={() => openEdit(row)} />
              </>
            )} />
          </div>
          
          <div className="mobile-show-only" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {teachers.map((t) => (
              <div key={t.id} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 22, background: 'rgba(242,169,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {Icons.teacher(20, GOLD)}
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{t.user?.first_name} {t.user?.last_name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{t.employee_id} &bull; {t.user?.phone || 'No Phone'}</div>
                    </div>
                  </div>
                  <Badge text={t.status} color={t.status === 'active' ? '#22c55e' : '#ef4444'} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, background: 'rgba(0,0,0,0.2)', padding: 12, borderRadius: 8, marginTop: 4 }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 2 }}>Specialization</div>
                    <div style={{ fontSize: '0.8rem', color: '#fff' }}>{t.specialization || '—'}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 2 }}>Qualification</div>
                    <div style={{ fontSize: '0.8rem', color: '#fff' }}>{t.qualification || '—'}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                  <Button variant="secondary" onClick={() => openEdit(t)} style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {Icons.edit(14)} Edit Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showModal && (
        <Modal title={editingTeacher ? `Edit Teacher: ${editingTeacher.user?.first_name}` : 'Create Teacher Account'} onClose={() => setShowModal(false)} width={600}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <InputField label="First Name" value={formData.first_name} onChange={(e) => setFormData((p) => ({ ...p, first_name: e.target.value }))} required />
            <InputField label="Last Name" value={formData.last_name} onChange={(e) => setFormData((p) => ({ ...p, last_name: e.target.value }))} required />
            <InputField label="CNIC" value={formData.cnic} onChange={(e) => setFormData((p) => ({ ...p, cnic: e.target.value }))} placeholder="35202-1234567-1" required disabled={!!editingTeacher} />
            {!editingTeacher && <InputField label="Password" value={formData.password} onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))} type="password" required />}
            <InputField label="Email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} type="email" />
            <InputField label="Phone" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} />
            <InputField label="Employee ID" value={formData.employee_id} onChange={(e) => setFormData((p) => ({ ...p, employee_id: e.target.value }))} placeholder="EMP-008" required disabled={!!editingTeacher} />
            <InputField label="Qualification" value={formData.qualification} onChange={(e) => setFormData((p) => ({ ...p, qualification: e.target.value }))} placeholder="e.g. Shahadah Aalmiya / Wifaq" />
            <InputField label="Specialization" value={formData.specialization} onChange={(e) => setFormData((p) => ({ ...p, specialization: e.target.value }))} placeholder="e.g. Hifz, Fiqh, Hadith, Nahw" />
            {!editingTeacher && <InputField label="Joining Date" value={formData.joining_date} onChange={(e) => setFormData((p) => ({ ...p, joining_date: e.target.value }))} type="date" />}
          </div>
          {msg && <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: 12 }}>{msg}</div>}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : (editingTeacher ? 'Update Teacher' : 'Create Teacher')}</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 3: SESSIONS, CLASSES & PROMOTION
// ============================================================
function SessionsSection({ user, activeSession, onSessionChange }) {
  const [sessions, setSessions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSession, setExpandedSession] = useState(activeSession?.id || null);

  // Wizard state
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    name: '', start_date: '', end_date: '', cloneFrom: '',
    hifz_fee: 4000, dars_fee: 5000,
  });

  // Promotion state
  const [showPromotion, setShowPromotion] = useState(false);
  const [promoStudents, setPromoStudents] = useState([]);
  const [promoSelection, setPromoSelection] = useState({});

  const loadData = useCallback(async () => {
    setLoading(true);
    const [s, cl, co] = await Promise.all([
      db.getAllSessions(),
      db.getAllClasses(),
      db.getAllCourses(),
    ]);
    setSessions(s);
    setClasses(cl);
    setCourses(co);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleCreateSessionWizard = async () => {
    if (wizardData.cloneFrom) {
      await db.cloneSession(wizardData.cloneFrom, {
        name: wizardData.name,
        start_date: wizardData.start_date,
        end_date: wizardData.end_date,
        is_active: true,
        fee_structure: { hifz_monthly: wizardData.hifz_fee, dars_monthly: wizardData.dars_fee },
      }, user.id);
    } else {
      await db.createSession({
        name: wizardData.name,
        start_date: wizardData.start_date,
        end_date: wizardData.end_date,
        is_active: true,
        fee_structure: { hifz_monthly: wizardData.hifz_fee, dars_monthly: wizardData.dars_fee },
      }, user.id);
    }
    setShowWizard(false);
    loadData();
    onSessionChange && onSessionChange();
  };

  const openPromotion = async () => {
    if (!activeSession) return;
    const studs = await db.getPromotionCandidates(activeSession.id);
    setPromoStudents(studs);
    const initialMap = {};
    studs.forEach((s) => {
      // Default: Hifz stays in Hifz, Dars progresses
      initialMap[s.id] = {
        action: 'promote',
        hold_back: false,
      };
    });
    setPromoSelection(initialMap);
    setShowPromotion(true);
  };

  const handleExecutePromotion = async () => {
    // Construct promotion payloads
    const activeNewSession = sessions.find((s) => s.id !== activeSession.id && s.is_active);
    if (!activeNewSession) {
      alert('Please create and activate the new session before executing student promotions.');
      return;
    }

    const payload = promoStudents.map((st) => {
      const sel = promoSelection[st.id] || { hold_back: false };
      const isHifz = st.program_type === 'hifz';
      const promoType = sel.hold_back ? 'held_back' : (isHifz ? 'promoted' : 'promoted');

      return {
        student_id: st.id,
        from_session_id: activeSession.id,
        to_session_id: activeNewSession.id,
        from_class_id: st.class_id,
        to_class_id: st.class_id, // can be refined
        from_class_level: st.class?.course?.class_level || null,
        to_class_level: st.class?.course?.class_level || null,
        promotion_type: promoType,
        notes: isHifz ? 'Cumulative Hifz progress maintained across session' : 'Standard class promotion',
      };
    });

    await db.promoteStudents(payload, user.id);
    setShowPromotion(false);
    loadData();
  };

  const handleDeleteSession = async (sessionId) => {
    const confirmation = prompt('Type "Delete" to confirm session deletion:');
    if (confirmation === 'Delete') {
      await db.deleteSession(sessionId, user.id);
      loadData();
      if (activeSession?.id === sessionId) onSessionChange && onSessionChange();
    } else if (confirmation !== null) {
      alert('Deletion cancelled: You must type exactly "Delete".');
    }
  };

  const handleEditFees = async (sessionId, currentFees) => {
    const hifz = prompt('Enter Hifz Ul Quran Monthly Fee (Rs):', currentFees?.hifz_monthly || 4000);
    if (hifz === null) return;
    const dars = prompt('Enter Dars-e-Nizami Monthly Fee (Rs):', currentFees?.dars_monthly || 5000);
    if (dars === null) return;
    
    await db.updateSession(sessionId, {
      fee_structure: { hifz_monthly: Number(hifz), dars_monthly: Number(dars) }
    }, user.id);
    loadData();
  };

  return (
    <div>
      <SectionHeader
        title="Sessions & Academic Programs"
        subtitle={`${sessions.length} sessions, ${courses.length} courses, ${classes.length} classes`}
        action={
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="gold" onClick={openPromotion}>
              {Icons.activity(16, GOLD)} Promote / Rollover Students
            </Button>
            <Button onClick={() => { setWizardStep(1); setShowWizard(true); }}>
              {Icons.plus(16)} New Session Wizard
            </Button>
          </div>
        }
      />

      {/* Sessions List */}
      {sessions.map((session) => {
        const sessionClasses = classes.filter((c) => c.session_id === session.id || c.session?.name === session.name);
        const sessionCourses = courses.filter((c) => c.session_id === session.id || c.session?.name === session.name);
        const isExpanded = expandedSession === session.id;

        return (
          <Card key={session.id} style={{ marginBottom: 16, cursor: 'pointer' }} onClick={() => setExpandedSession(isExpanded ? null : session.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: session.is_active ? `${GOLD}20` : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {Icons.calendar(20, session.is_active ? GOLD : 'rgba(255,255,255,0.4)')}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                    {session.name}
                    {session.is_active && <Badge text="Active Session" color="#22c55e" />}
                    {session.status === 'archived' && <Badge text="Archived (Read-Only)" color="#6b7280" />}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
                    {session.start_date} — {session.end_date || 'Ongoing'}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                  {sessionCourses.length} programs, {sessionClasses.length} classes
                </span>
                <div style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  {Icons.chevronDown(16, 'rgba(255,255,255,0.4)')}
                </div>
              </div>
            </div>

            {isExpanded && (
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }} onClick={(e) => e.stopPropagation()}>
                
                {/* Fee Structure Display & Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: 12, background: 'rgba(255,255,255,0.03)', borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', marginBottom: 6, letterSpacing: '0.08em' }}>Monthly Fee Structure</div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{ fontSize: '0.85rem', color: '#fff' }}><span style={{ color: 'rgba(255,255,255,0.5)' }}>Hifz:</span> Rs {session.fee_structure?.hifz_monthly || 0}</div>
                      <div style={{ fontSize: '0.85rem', color: '#fff' }}><span style={{ color: 'rgba(255,255,255,0.5)' }}>Dars-e-Nizami:</span> Rs {session.fee_structure?.dars_monthly || 0}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="secondary" onClick={() => handleEditFees(session.id, session.fee_structure)} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                      {Icons.edit(14)} Edit Fees
                    </Button>
                    <Button variant="danger" onClick={() => handleDeleteSession(session.id)} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                      {Icons.trash(14)} Delete Session
                    </Button>
                  </div>
                </div>

                {/* Courses / Programs UI Enhancement */}
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.08em' }}>
                  Academic Programs in this Session
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, marginBottom: 24 }}>
                  {sessionCourses.map((c) => (
                    <div key={c.id} style={{
                      background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)',
                      padding: '12px 14px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12
                    }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: c.course_type === 'hifz' ? `${GOLD}20` : 'rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {Icons.book(18, c.course_type === 'hifz' ? GOLD : '#3b82f6')}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{c.course_name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 2, textTransform: 'uppercase' }}>{c.course_code} &bull; {c.course_type}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Classes Table (Responsive) */}
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.08em' }}>
                  Enrolled Classes & Assigned Teachers
                </div>
                
                <div className="desktop-hide-on-mobile">
                  <Table
                    columns={[
                      { key: 'class_name', label: 'Class / Halqa' },
                      { key: 'section', label: 'Section' },
                      { key: 'course', label: 'Program', render: (r) => r.course ? `${r.course.course_code} (${r.course.course_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami'})` : '—' },
                      { key: 'incharge', label: 'Incharge Scholar', render: (r) => r.incharge?.user ? `${r.incharge.user.first_name} ${r.incharge.user.last_name}` : 'Assigned' },
                      { key: 'max_students', label: 'Capacity' },
                    ]}
                    data={sessionClasses}
                  />
                </div>
                
                <div className="mobile-show-only" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {sessionClasses.map((cl) => (
                    <div key={cl.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{cl.class_name} <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>({cl.section})</span></div>
                        <Badge text={cl.course?.course_type === 'hifz' ? 'Hifz' : 'Dars'} color={cl.course?.course_type === 'hifz' ? GOLD : '#3b82f6'} />
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                        <strong>Scholar:</strong> {cl.incharge?.user ? `${cl.incharge.user.first_name} ${cl.incharge.user.last_name}` : 'Pending Assignment'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                        <strong>Capacity:</strong> {cl.max_students} Students
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </Card>
        );
      })}

      {/* New Session Wizard Modal */}
      {showWizard && (
        <Modal title="New Academic Session Wizard" onClose={() => setShowWizard(false)} width={600}>
          {wizardStep === 1 && (
            <div>
              <InputField label="Session Name" value={wizardData.name} onChange={(e) => setWizardData((p) => ({ ...p, name: e.target.value }))} placeholder="e.g. Dora 2027 (دورہ 2027) / 1448-49 Hijri" required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <InputField label="Start Date" value={wizardData.start_date} onChange={(e) => setWizardData((p) => ({ ...p, start_date: e.target.value }))} type="date" required />
                <InputField label="End Date" value={wizardData.end_date} onChange={(e) => setWizardData((p) => ({ ...p, end_date: e.target.value }))} type="date" required />
              </div>
              <SelectField
                label="Clone Structure From Existing Session"
                value={wizardData.cloneFrom}
                onChange={(e) => setWizardData((p) => ({ ...p, cloneFrom: e.target.value }))}
                options={sessions.map((s) => ({ value: s.id, label: `${s.name} (Copies all programs, classes & subjects)` }))}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                <Button onClick={() => setWizardStep(2)}>Next: Fee Structure &rarr;</Button>
              </div>
            </div>
          )}

          {wizardStep === 2 && (
            <div>
              <h4 style={{ color: GOLD, margin: '0 0 12px 0' }}>Configure Monthly Tuition Fees</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <InputField label="Hifz Ul Quran Fee (Rs.)" value={wizardData.hifz_fee} onChange={(e) => setWizardData((p) => ({ ...p, hifz_fee: e.target.value }))} type="number" />
                <InputField label="Dars-e-Nizami Fee (Rs.)" value={wizardData.dars_fee} onChange={(e) => setWizardData((p) => ({ ...p, dars_fee: e.target.value }))} type="number" />
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                Creating this session will automatically activate it and archive the previous session.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setWizardStep(1)}>&larr; Back</Button>
                <Button onClick={handleCreateSessionWizard}>Create & Activate Session</Button>
              </div>
            </div>
          )}
        </Modal>
      )}

      {/* Promotion / Rollover Modal */}
      {showPromotion && (
        <Modal title="Student Promotion & Session Rollover" onClose={() => setShowPromotion(false)} width={700}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
            Review students eligible for session transition. Hifz students preserve cumulative memorization progress, while Dars-e-Nizami students advance to the next class level. Check "Hold Back" to retain specific students.
          </p>
          <div style={{ maxHeight: 350, overflowY: 'auto', marginBottom: 16 }}>
            <Table
              columns={[
                { key: 'name', label: 'Student', render: (r) => `${r.first_name} ${r.last_name} (${r.roll_no})` },
                { key: 'program', label: 'Program', render: (r) => <Badge text={r.program_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami'} color={r.program_type === 'hifz' ? GOLD : '#3b82f6'} /> },
                { key: 'current_class', label: 'Current Class', render: (r) => r.class?.class_name || '—' },
                {
                  key: 'action', label: 'Action', render: (r) => (
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#fff', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={promoSelection[r.id]?.hold_back || false}
                        onChange={(e) => setPromoSelection((p) => ({
                          ...p,
                          [r.id]: { ...p[r.id], hold_back: e.target.checked },
                        }))}
                        style={{ accentColor: '#ef4444' }}
                      />
                      Hold Back
                    </label>
                  ),
                },
              ]}
              data={promoStudents}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={() => setShowPromotion(false)}>Cancel</Button>
            <Button onClick={handleExecutePromotion}>Confirm & Execute Promotion</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 4: STUDENTS
// ============================================================
function StudentsSection({ user, activeSession }) {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [filterProgram, setFilterProgram] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [viewingHifzHistory, setViewingHifzHistory] = useState(null);
  const [hifzData, setHifzData] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const [s, cl] = await Promise.all([
      db.getAllStudents(),
      db.getAllClasses(),
    ]);
    setStudents(s);
    setClasses(cl);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleUpdate = async () => {
    await db.updateStudent(editingStudent.id, editForm, user.id);
    setEditingStudent(null);
    loadData();
  };

  const handleViewHifz = async (student) => {
    setViewingHifzHistory(student);
    const data = await db.getStudentHifzHistory(student.id);
    setHifzData(data);
  };

  // CSV Export
  const exportCSV = () => {
    const headers = ['Roll No', 'First Name', 'Last Name', 'Program', 'Class', 'Guardian', 'Guardian Phone', 'B-Form', 'Status'];
    const rows = students.map((s) => [
      s.roll_no, s.first_name, s.last_name, s.program_type, s.class?.class_name,
      `${s.guardian?.user?.first_name || ''} ${s.guardian?.user?.last_name || ''}`,
      s.guardian?.user?.phone, s.b_form_no, s.status,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Al_Faiq_Students_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = filterProgram === 'ALL' ? students : students.filter((s) => s.program_type === filterProgram);

  const columns = [
    { key: 'roll_no', label: 'Roll No', nowrap: true },
    { key: 'name', label: 'Student Name', render: (r) => `${r.first_name} ${r.last_name}` },
    { key: 'program', label: 'Program', render: (r) => <Badge text={r.program_type === 'hifz' ? 'Hifz Ul Quran' : 'Dars-e-Nizami'} color={r.program_type === 'hifz' ? GOLD : '#3b82f6'} /> },
    { key: 'class', label: 'Class / Halqa', render: (r) => r.class ? `${r.class.class_name} (${r.class.section})` : '—' },
    { key: 'guardian', label: 'Guardian', render: (r) => r.guardian?.user ? `${r.guardian.user.first_name} ${r.guardian.user.last_name}` : '—' },
    { key: 'status', label: 'Status', render: (r) => <Badge text={r.status} color={r.status === 'active' ? '#22c55e' : '#ef4444'} /> },
  ];

  return (
    <div>
      <SectionHeader
        title="Students Roster"
        subtitle={`${filtered.length} students enrolled`}
        action={
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="secondary" onClick={exportCSV}>
              {Icons.download(16)} Export CSV
            </Button>
          </div>
        }
      />

      {/* Program Filter Pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {[
          { id: 'ALL', label: 'All Students' },
          { id: 'hifz', label: 'Hifz Ul Quran' },
          { id: 'dars_nizami', label: 'Dars-e-Nizami' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterProgram(tab.id)}
            style={{
              padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600,
              background: filterProgram === tab.id ? `${GOLD}22` : 'rgba(255,255,255,0.04)',
              color: filterProgram === tab.id ? GOLD : 'rgba(255,255,255,0.5)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <Table columns={columns} data={filtered} actions={(row) => (
          <>
            {row.program_type === 'hifz' && (
              <ActionButton icon={Icons.book(14)} title="Hifz Quran Progress" color={GOLD} onClick={() => handleViewHifz(row)} />
            )}
            <ActionButton icon={Icons.edit(14)} title="Edit Student" color="#3b82f6" onClick={() => {
              setEditingStudent(row);
              setEditForm({
                first_name: row.first_name,
                last_name: row.last_name,
                class_id: row.class_id,
                b_form_no: row.b_form_no || '',
                blood_group: row.blood_group || '',
                status: row.status,
              });
            }} />
          </>
        )} />
      )}

      {/* Edit Student Modal */}
      {editingStudent && (
        <Modal title={`Edit Student: ${editingStudent.first_name} ${editingStudent.last_name}`} onClose={() => setEditingStudent(null)}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <InputField label="First Name" value={editForm.first_name} onChange={(e) => setEditForm((p) => ({ ...p, first_name: e.target.value }))} />
            <InputField label="Last Name" value={editForm.last_name} onChange={(e) => setEditForm((p) => ({ ...p, last_name: e.target.value }))} />
            <InputField label="B-Form No" value={editForm.b_form_no} onChange={(e) => setEditForm((p) => ({ ...p, b_form_no: e.target.value }))} />
            <InputField label="Blood Group" value={editForm.blood_group} onChange={(e) => setEditForm((p) => ({ ...p, blood_group: e.target.value }))} />
            <SelectField
              label="Assigned Class"
              value={editForm.class_id}
              onChange={(e) => setEditForm((p) => ({ ...p, class_id: e.target.value }))}
              options={classes.map((c) => ({ value: c.id, label: `${c.class_name} (${c.section})` }))}
            />
            <SelectField
              label="Status"
              value={editForm.status}
              onChange={(e) => setEditForm((p) => ({ ...p, status: e.target.value }))}
              options={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'graduated', label: 'Graduated' },
                { value: 'promoted', label: 'Promoted' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="secondary" onClick={() => setEditingStudent(null)}>Cancel</Button>
            <Button onClick={handleUpdate}>Save Changes</Button>
          </div>
        </Modal>
      )}

      {/* Hifz History Modal */}
      {viewingHifzHistory && (
        <Modal title={`Hifz Progress: ${viewingHifzHistory.first_name} (${viewingHifzHistory.roll_no})`} onClose={() => setViewingHifzHistory(null)} width={640}>
          {hifzData?.stats && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              <div style={{ padding: 16, background: 'rgba(242,169,0,0.1)', borderRadius: 12, border: '1px solid rgba(242,169,0,0.2)' }}>
                <div style={{ fontSize: '0.75rem', color: GOLD, fontWeight: 700 }}>MEMORIZATION COMPLETION</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginTop: 4 }}>{hifzData.stats.completionPercentage}%</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{hifzData.stats.totalAyahsMemorized} / 6,236 Ayahs</div>
              </div>
              <div style={{ padding: 16, background: 'rgba(59,130,246,0.1)', borderRadius: 12, border: '1px solid rgba(59,130,246,0.2)' }}>
                <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 700 }}>MANZIL (PARAS REVISED)</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginTop: 4 }}>{hifzData.stats.revisedParasCount} / 30 Paras</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{hifzData.stats.manzilPercentage}% Revision Coverage</div>
              </div>
            </div>
          )}
          <h4 style={{ color: GOLD, margin: '0 0 10px 0' }}>Recent Daily Sabaq Logs</h4>
          <Table
            columns={[
              { key: 'date', label: 'Date', nowrap: true },
              { key: 'sabaq', label: 'Sabaq Range', render: (r) => `Surah ${r.sabaq_surah_start}:${r.sabaq_ayah_start} - ${r.sabaq_ayah_end}` },
              { key: 'sabaq_quality', label: 'Quality', render: (r) => <Badge text={r.sabaq_quality} color="#22c55e" /> },
              { key: 'overall_grade', label: 'Grade', render: (r) => <span style={{ fontWeight: 800, color: GOLD }}>{r.overall_grade}</span> },
            ]}
            data={hifzData?.dailyRecords || []}
          />
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 5: ADMISSIONS
// ============================================================
function AdmissionsSection({ user, activeSession }) {
  const [admissions, setAdmissions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [saving, setSaving] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    const [a, cl] = await Promise.all([
      db.getAllAdmissions(),
      db.getAllClasses(),
    ]);
    setAdmissions(a);
    setClasses(cl);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleApprove = async () => {
    if (!selectedClassId) {
      alert('Please assign a class / halqa for this student upon admission approval.');
      return;
    }
    setSaving(true);
    await db.approveAdmissionAndEnroll(selectedApp.id, selectedClassId, user.id);
    setSelectedApp(null);
    loadData();
    setSaving(false);
  };

  const handleReject = async () => {
    setSaving(true);
    await db.updateAdmission(selectedApp.id, { status: 'rejected' }, user.id);
    setSelectedApp(null);
    loadData();
    setSaving(false);
  };

  const columns = [
    { key: 'student', label: 'Applicant Name', render: (r) => `${r.student_first_name} ${r.student_last_name}` },
    { key: 'program', label: 'Program', render: (r) => <Badge text={r.course_type === 'hifz' ? 'Hifz Ul Quran' : (r.desired_course || 'Dars-e-Nizami')} color={r.course_type === 'hifz' ? GOLD : '#3b82f6'} /> },
    { key: 'guardian', label: 'Guardian', render: (r) => r.guardian?.user ? `${r.guardian.user.first_name} ${r.guardian.user.last_name}` : '—' },
    { key: 'phone', label: 'Contact', render: (r) => r.guardian?.user?.phone || '—', nowrap: true },
    { key: 'status', label: 'Status', render: (r) => <Badge text={r.status} color={r.status === 'pending' ? '#f97316' : (r.status === 'approved' ? '#22c55e' : '#ef4444')} /> },
    { key: 'created_at', label: 'Applied On', render: (r) => new Date(r.created_at).toLocaleDateString(), nowrap: true },
  ];

  return (
    <div>
      <SectionHeader title="Admission Applications" subtitle={`${admissions.filter((a) => a.status === 'pending').length} pending admissions`} />
      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <Table columns={columns} data={admissions} actions={(row) => (
          <Button variant={row.status === 'pending' ? 'primary' : 'secondary'} onClick={() => { setSelectedApp(row); setSelectedClassId(''); }} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
            {row.status === 'pending' ? 'Review & Approve' : 'View Details'}
          </Button>
        )} />
      )}

      {/* Review Modal */}
      {selectedApp && (
        <Modal title={`Application: ${selectedApp.student_first_name} ${selectedApp.student_last_name}`} onClose={() => setSelectedApp(null)} width={600}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {[
              ['Applicant Name', `${selectedApp.student_first_name} ${selectedApp.student_last_name}`],
              ['Program Applied', selectedApp.course_type === 'hifz' ? 'Hifz Ul Quran' : (selectedApp.desired_course || 'Dars-e-Nizami')],
              ['Date of Birth', selectedApp.student_dob || '—'],
              ['B-Form No', selectedApp.student_b_form || '—'],
              ['Guardian Name', `${selectedApp.guardian?.user?.first_name || ''} ${selectedApp.guardian?.user?.last_name || ''}`],
              ['Guardian Phone', selectedApp.guardian?.user?.phone || '—'],
              ['Guardian CNIC', selectedApp.guardian?.user?.cnic || '—'],
              ['Previous Madrassa / School', selectedApp.previous_school || 'None'],
            ].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase' }}>{l}</div>
                <div style={{ fontSize: '0.88rem', color: '#fff', marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>

          {selectedApp.status === 'pending' ? (
            <div>
              <SelectField
                label="Assign Class / Halqa for Enrollment"
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                options={classes.map((c) => ({ value: c.id, label: `${c.class_name} (${c.section})` }))}
                required
              />
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                Approving this admission will generate a Student ID/Roll number and automatically issue the initial fee challan.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                <Button variant="danger" onClick={handleReject} disabled={saving}>Reject Application</Button>
                <Button variant="success" onClick={handleApprove} disabled={saving}>{saving ? 'Approving...' : 'Approve & Issue Challan'}</Button>
              </div>
            </div>
          ) : (
            <div style={{ padding: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 10, color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
              Status: <strong>{selectedApp.status.toUpperCase()}</strong>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 6: CHALLANS & FEE MANAGEMENT
// ============================================================
function ChallansSection({ user, activeSession }) {
  const [challans, setChallans] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('all');
  const [reviewingChallan, setReviewingChallan] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState({
    student_id: '', title: '', amount: 4000, due_date: '', month: '',
  });

  const loadData = useCallback(async () => {
    setLoading(true);
    const [c, s] = await Promise.all([
      db.getAllChallans(),
      db.getAllStudents(),
    ]);
    setChallans(c);
    setStudents(s);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleVerify = async (status) => {
    if (!reviewingChallan) return;
    const payment = reviewingChallan.payment?.[0];
    await db.verifyChallanPayment(payment?.id, reviewingChallan.id, status, user.id);
    setReviewingChallan(null);
    loadData();
  };

  const handleCreateManualChallan = async () => {
    await db.createChallan({
      ...createForm,
      amount: Number(createForm.amount),
      session_id: activeSession?.id,
      created_by: user.id,
    }, user.id);
    setShowCreate(false);
    loadData();
  };

  const filtered = challans.filter((c) => {
    if (tab === 'pending') return c.status === 'pending_verification';
    if (tab === 'compensated') return c.compensation_status === 'compensated';
    if (tab === 'paid') return c.status === 'paid' && c.compensation_status !== 'compensated';
    if (tab === 'unpaid') return c.status === 'unpaid';
    return true;
  });

  const columns = [
    { key: 'challan_no', label: 'Challan No', nowrap: true },
    { key: 'student', label: 'Student', render: (r) => r.student ? `${r.student.first_name} ${r.student.last_name}` : '—' },
    { key: 'roll', label: 'Roll No', render: (r) => r.student?.roll_no, nowrap: true },
    { key: 'title', label: 'Fee Title' },
    { key: 'amount', label: 'Amount', render: (r) => `Rs. ${Number(r.amount).toLocaleString()}`, nowrap: true },
    { key: 'due_date', label: 'Due Date', nowrap: true },
    {
      key: 'status', label: 'Status', render: (r) => {
        if (r.compensation_status === 'compensated') return <Badge text="Compensated (Needy)" color="#a855f7" />;
        return <Badge text={r.status?.replace('_', ' ')} color={r.status === 'paid' ? '#22c55e' : (r.status === 'pending_verification' ? '#f97316' : '#ef4444')} />;
      },
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Fee Challans & Collection"
        subtitle={`${challans.length} total issued challans`}
        action={
          <Button onClick={() => setShowCreate(true)}>{Icons.plus(16)} Create Manual Challan</Button>
        }
      />

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {[
          { id: 'all', label: 'All Challans' },
          { id: 'pending', label: `Pending Verification (${challans.filter((c) => c.status === 'pending_verification').length})` },
          { id: 'paid', label: 'Paid' },
          { id: 'compensated', label: 'Compensated / Concession' },
          { id: 'unpaid', label: 'Unpaid' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600,
              background: tab === t.id ? `${GOLD}22` : 'rgba(255,255,255,0.04)',
              color: tab === t.id ? GOLD : 'rgba(255,255,255,0.5)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <Table columns={columns} data={filtered} actions={(row) => (
          <Button variant="secondary" onClick={() => setReviewingChallan(row)} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
            {row.status === 'pending_verification' ? 'Review & Verify' : 'View / Override'}
          </Button>
        )} />
      )}

      {/* Review / Override Modal */}
      {reviewingChallan && (
        <Modal title={`Challan: ${reviewingChallan.challan_no}`} onClose={() => setReviewingChallan(null)} width={600}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {[
              ['Student', `${reviewingChallan.student?.first_name || ''} ${reviewingChallan.student?.last_name || ''}`],
              ['Roll No', reviewingChallan.student?.roll_no],
              ['Amount', `Rs. ${Number(reviewingChallan.amount).toLocaleString()}`],
              ['Due Date', reviewingChallan.due_date],
              ['Transaction ID (TID)', reviewingChallan.payment?.[0]?.transaction_id || 'Not Submitted'],
              ['Payment Channel', reviewingChallan.payment?.[0]?.payment_method?.toUpperCase() || 'Bank Transfer'],
              ['Current Status', reviewingChallan.status.toUpperCase()],
              ['Concession Status', reviewingChallan.compensation_status.toUpperCase()],
            ].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase' }}>{l}</div>
                <div style={{ fontSize: '0.88rem', color: '#fff', marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
            <h4 style={{ color: GOLD, margin: '0 0 10px 0', fontSize: '0.85rem' }}>Admin Approval / Concession Actions:</h4>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button variant="success" onClick={() => handleVerify('approved')}>
                {Icons.check(16)} Mark Paid (Approved)
              </Button>
              <Button variant="gold" onClick={() => handleVerify('compensated')}>
                Mark Compensated (Needy/Scholarship)
              </Button>
              <Button variant="danger" onClick={() => handleVerify('rejected')}>
                {Icons.x(16)} Reject / Mark Unpaid
              </Button>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>
              Note: Marking as "Compensated" will show up as "Paid" on the Guardian's portal while recorded as a concession in admin reports.
            </p>
          </div>
        </Modal>
      )}

      {/* Manual Challan Modal */}
      {showCreate && (
        <Modal title="Create Manual Fee Challan" onClose={() => setShowCreate(false)}>
          <SelectField
            label="Select Student"
            value={createForm.student_id}
            onChange={(e) => setCreateForm((p) => ({ ...p, student_id: e.target.value }))}
            options={students.map((s) => ({ value: s.id, label: `${s.first_name} ${s.last_name} (${s.roll_no})` }))}
            required
          />
          <InputField label="Challan Title" value={createForm.title} onChange={(e) => setCreateForm((p) => ({ ...p, title: e.target.value }))} placeholder="e.g. Monthly Tuition Fee" required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <InputField label="Amount (Rs.)" value={createForm.amount} onChange={(e) => setCreateForm((p) => ({ ...p, amount: e.target.value }))} type="number" required />
            <InputField label="Due Date" value={createForm.due_date} onChange={(e) => setCreateForm((p) => ({ ...p, due_date: e.target.value }))} type="date" required />
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="secondary" onClick={() => setShowCreate(false)}>Cancel</Button>
            <Button onClick={handleCreateManualChallan}>Issue Challan</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// SECTION 7: GUARDIANS
// ============================================================
function GuardiansSection() {
  const [guardians, setGuardians] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.getAllGuardians().then((data) => {
      setGuardians(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    { key: 'name', label: 'Guardian Name', render: (r) => r.user ? `${r.user.first_name} ${r.user.last_name}` : '—' },
    { key: 'cnic', label: 'CNIC', render: (r) => r.user?.cnic, nowrap: true },
    { key: 'phone', label: 'Phone', render: (r) => r.user?.phone || '—', nowrap: true },
    { key: 'occupation', label: 'Occupation' },
    { key: 'students_count', label: 'Enrolled Children', render: (r) => r.students?.length || 0 },
  ];

  return (
    <div>
      <SectionHeader title="Guardians Roster" subtitle={`${guardians.length} registered guardians`} />
      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <Table columns={columns} data={guardians} />
      )}
    </div>
  );
}

// ============================================================
// SECTION 8: ACTIVITY LOG (AUDIT TRAIL)
// ============================================================
function AuditSection() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.getActivityLog(100).then((data) => {
      setLogs(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    { key: 'timestamp', label: 'Time', render: (r) => new Date(r.created_at).toLocaleString(), nowrap: true },
    { key: 'user', label: 'Admin / Scholar', render: (r) => r.user ? `${r.user.first_name} (${r.user.role})` : 'System' },
    { key: 'action', label: 'Action', render: (r) => <Badge text={r.action} color={r.action === 'create' ? '#22c55e' : (r.action === 'delete' ? '#ef4444' : GOLD)} /> },
    { key: 'entity', label: 'Entity Type', render: (r) => r.entity_type },
    { key: 'description', label: 'Description', render: (r) => r.description || '—' },
  ];

  return (
    <div>
      <SectionHeader title="System Audit Trail & Activity Logs" subtitle="Permanent record of administrative overrides, modifications, and actions" />
      {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
        <Table columns={columns} data={logs} />
      )}
    </div>
  );
}

// ============================================================
// SECTION 9: SETTINGS & CONFIGURATION
// ============================================================
function SettingsSection({ user }) {
  const [bank, setBank] = useState({
    bank_name: '', account_title: '', account_number: '', branch_name: '', iban: '',
  });
  const [savingBank, setSavingBank] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    db.getActiveBankConfig().then((b) => {
      if (b) setBank(b);
    });
  }, []);

  const handleSaveBank = async () => {
    setSavingBank(true);
    await db.updateBankConfig(bank, user.id);
    setMsg('Bank details successfully updated.');
    setSavingBank(false);
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div>
      <SectionHeader title="Institute & System Settings" subtitle="Configure bank accounts, fee details, and system preferences" />

      {/* Bank Account Config Card */}
      <Card style={{ maxWidth: 650, marginBottom: 24 }}>
        <h3 style={{ color: GOLD, margin: '0 0 16px 0', fontSize: '1.05rem' }}>Challan Bank Account Configuration</h3>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
          These bank details are automatically presented to parents when viewing and paying fee challans via TID.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
          <InputField label="Bank Name" value={bank.bank_name} onChange={(e) => setBank((p) => ({ ...p, bank_name: e.target.value }))} placeholder="e.g. Meezan Bank Ltd." required />
          <InputField label="Account Title" value={bank.account_title} onChange={(e) => setBank((p) => ({ ...p, account_title: e.target.value }))} placeholder="e.g. Al-Faiq Islamic Institute" required />
          <InputField label="Account Number" value={bank.account_number} onChange={(e) => setBank((p) => ({ ...p, account_number: e.target.value }))} placeholder="01020304050607" required />
          <InputField label="Branch Name" value={bank.branch_name} onChange={(e) => setBank((p) => ({ ...p, branch_name: e.target.value }))} placeholder="Main Branch" />
        </div>
        <InputField label="IBAN Number" value={bank.iban} onChange={(e) => setBank((p) => ({ ...p, iban: e.target.value }))} placeholder="PK36MEZN0001020304050607" />

        {msg && <div style={{ color: '#22c55e', fontSize: '0.82rem', marginBottom: 12 }}>{msg}</div>}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
          <Button onClick={handleSaveBank} disabled={savingBank}>
            {savingBank ? 'Saving...' : 'Save Bank Details'}
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ============================================================
// SECTION 10: ANNOUNCEMENTS
// ============================================================
function AnnouncementsSection({ user }) {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', category: 'General', is_pinned: false });

  const loadData = useCallback(async () => {
    setLoading(true);
    const a = await db.getAllAnnouncements();
    setAnnouncements(a);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const handleCreate = async () => {
    await db.createAnnouncement({
      ...form,
      created_by: user.id,
      target_roles: ['admin', 'teacher', 'guardian'],
    }, user.id);
    setShowCreate(false);
    setForm({ title: '', content: '', category: 'General', is_pinned: false });
    loadData();
  };

  const handleDelete = async (id) => {
    await db.deleteAnnouncement(id, user.id);
    loadData();
  };

  return (
    <div>
      <SectionHeader title="Announcements & Notices" subtitle="Broadcast updates to guardians and faculty" action={
        <Button onClick={() => setShowCreate(true)}>{Icons.plus(16)} New Notice</Button>
      } />

      <div style={{ display: 'grid', gap: 14 }}>
        {loading ? <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.3)' }}>Loading...</div> : (
          announcements.map((a) => (
            <Card key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>{a.title}</span>
                  {a.is_pinned && <Badge text="Pinned" color={GOLD} />}
                  <Badge text={a.category} color="#3b82f6" />
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>{a.content}</p>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: 8 }}>
                  {new Date(a.created_at).toLocaleDateString()} &bull; Posted by {a.author ? `${a.author.first_name} ${a.author.last_name}` : 'Administration'}
                </div>
              </div>
              <ActionButton icon={Icons.trash(14)} title="Delete Notice" color="#ef4444" onClick={() => handleDelete(a.id)} />
            </Card>
          ))
        )}
      </div>

      {showCreate && (
        <Modal title="Publish Announcement" onClose={() => setShowCreate(false)}>
          <InputField label="Title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} placeholder="e.g. Eid-ul-Fitr Vacation Schedule" required />
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontWeight: 500 }}>Content</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
              rows={4}
              style={{
                width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: '#fff', fontSize: '0.85rem', outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
            <Button variant="secondary" onClick={() => setShowCreate(false)}>Cancel</Button>
            <Button onClick={handleCreate}>Publish Notice</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ============================================================
// MAIN ADMIN PORTAL CONTAINER
// ============================================================
export default function AdminPortal() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Session Context
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  const loadSessions = useCallback(async () => {
    const all = await db.getAllSessions();
    setSessions(all);
    const active = all.find((s) => s.is_active) || all[0];
    setActiveSession(active || null);
  }, []);

  useEffect(() => {
    const u = getCurrentUserSync();
    if (!u || u.role !== 'admin') {
      router.replace('/login');
      return;
    }
    setUser(u);
    loadSessions();

    const checkMobile = () => setIsMobile(window.innerWidth < 960);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [router, loadSessions]);

  if (!user) return null;

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <DashboardSection user={user} activeSession={activeSession} />;
      case 'teachers': return <TeachersSection user={user} activeSession={activeSession} />;
      case 'sessions': return <SessionsSection user={user} activeSession={activeSession} onSessionChange={loadSessions} />;
      case 'students': return <StudentsSection user={user} activeSession={activeSession} />;
      case 'admissions': return <AdmissionsSection user={user} activeSession={activeSession} />;
      case 'challans': return <ChallansSection user={user} activeSession={activeSession} />;
      case 'guardians': return <GuardiansSection user={user} activeSession={activeSession} />;
      case 'audit': return <AuditSection user={user} activeSession={activeSession} />;
      case 'settings': return <SettingsSection user={user} activeSession={activeSession} />;
      case 'announcements': return <AnnouncementsSection user={user} activeSession={activeSession} />;
      default: return <DashboardSection user={user} activeSession={activeSession} />;
    }
  };

  const sidebarContent = (
    <>
      {/* Brand Header */}
      <div style={{ padding: '24px 20px 20px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <img src="/faiq-logo.png" alt="Al-Faiq" style={{ width: 38, height: 38, borderRadius: 10, objectFit: 'cover' }} />
        <div>
          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>Al-Faiq Institute</div>
          <div style={{ fontSize: '0.68rem', color: GOLD, fontWeight: 700, marginTop: 2 }}>Islamic Education System</div>
        </div>
      </div>

      {/* Active Session Selector */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 6 }}>
          Active Academic Session
        </div>
        <select
          value={activeSession?.id || ''}
          onChange={(e) => {
            const found = sessions.find((s) => s.id === e.target.value);
            if (found) setActiveSession(found);
          }}
          style={{
            width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(242,169,0,0.3)', borderRadius: 8, color: GOLD,
            fontSize: '0.82rem', fontWeight: 700, outline: 'none', cursor: 'pointer',
          }}
        >
          {sessions.map((s) => (
            <option key={s.id} value={s.id} style={{ background: '#111625', color: '#fff' }}>
              {s.name} {s.is_active ? '' : (s.status === 'archived' ? '(Archived)' : '')}
            </option>
          ))}
        </select>
      </div>

      {/* Nav Menu */}
      <nav style={{ padding: '12px 10px', flex: 1, overflowY: 'auto' }}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                if (isMobile) setSidebarOpen(false);
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                width: '100%', padding: '11px 14px',
                background: isActive ? `${GOLD}15` : 'transparent',
                border: 'none', borderRadius: 12,
                cursor: 'pointer', marginBottom: 3,
                transition: 'all 0.2s ease',
                color: isActive ? GOLD : 'rgba(255,255,255,0.5)',
                fontSize: '0.84rem', fontWeight: isActive ? 700 : 500,
                textAlign: 'left',
                position: 'relative',
              }}
            >
              {isActive && <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, borderRadius: 2, background: GOLD }} />}
              {item.icon(18, isActive ? GOLD : 'rgba(255,255,255,0.4)')}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* User & Sign Out */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#fff' }}>{user.first_name} {user.last_name}</div>
        <div style={{ fontSize: '0.72rem', color: GOLD, fontWeight: 600, marginBottom: 12 }}>Administrator</div>
        <button
          onClick={() => { logout().then(() => router.push('/login')); }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            width: '100%', padding: '9px 12px',
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 10, cursor: 'pointer', color: '#fca5a5',
            fontSize: '0.8rem', fontWeight: 600,
          }}
        >
          {Icons.logout(16, '#fca5a5')} Sign Out
        </button>
      </div>
    </>
  );

  return (
    <>
      <Head>
        <title>Admin Dashboard — Al-Faiq Islamic Education System</title>
      </Head>

      <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0e1a', fontFamily: "'Inter', sans-serif" }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside style={{
            width: 270, minHeight: '100vh',
            background: '#0d111e',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', flexDirection: 'column',
            position: 'fixed', left: 0, top: 0, bottom: 0,
            zIndex: 100,
          }}>
            {sidebarContent}
          </aside>
        )}

        {/* Mobile Sidebar */}
        {isMobile && sidebarOpen && (
          <>
            <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 998 }} />
            <aside style={{
              position: 'fixed', left: 0, top: 0, bottom: 0, width: 280, zIndex: 999,
              background: '#0d111e', borderRight: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexDirection: 'column',
            }}>
              {sidebarContent}
            </aside>
          </>
        )}

        {/* Main Content Area */}
        <main style={{
          flex: 1,
          marginLeft: isMobile ? 0 : 270,
          minHeight: '100vh',
        }}>
          {/* Mobile Top Bar */}
          {isMobile && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px', background: '#0d111e', borderBottom: '1px solid rgba(255,255,255,0.06)',
              position: 'sticky', top: 0, zIndex: 50,
            }}>
              <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 0 }}>
                {Icons.menu(24)}
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/faiq-logo.png" alt="" style={{ width: 28, height: 28, borderRadius: 8 }} />
                <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#fff' }}>Al-Faiq Admin</span>
              </div>
              <div style={{ width: 24 }} />
            </div>
          )}

          {/* Archived Session Alert Banner */}
          {activeSession?.status === 'archived' && (
            <div style={{ background: 'rgba(242,169,0,0.15)', borderBottom: '1px solid rgba(242,169,0,0.3)', padding: '10px 24px', color: GOLD, fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              {Icons.calendar(16, GOLD)} You are viewing historical data for archived session <strong>{activeSession.name}</strong>. Modifications are read-only.
            </div>
          )}

          <div style={{ padding: isMobile ? '20px 16px' : '32px 40px', maxWidth: 1280 }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Admin Portal / {NAV_ITEMS.find((n) => n.id === activeSection)?.label || 'Dashboard'}
              </div>
            </div>

            {renderSection()}
          </div>
        </main>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        * { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent; box-sizing: border-box; }
        *::-webkit-scrollbar { width: 6px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 3px; }

        .mobile-show-only { display: none; }
        @media (max-width: 960px) {
          .desktop-hide-on-mobile { display: none !important; }
          .mobile-show-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}
