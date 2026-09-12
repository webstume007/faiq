import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCurrentUserSync, getPortalPath } from '../lib/auth';

const GOLD = '#F2A900';
const NAVY = '#002147';

const Icons = {
  book: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
  ),
  graduation: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" /><path d="M21 9v6" /></svg>
  ),
  users: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  shield: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  heart: (s = 24, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
  ),
  arrowRight: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  ),
  checkCircle: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
  ),
  phone: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  mail: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>
  ),
  mapPin: (s = 20, c = 'currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
};

const PROGRAMS = [
  {
    code: 'HIFZ',
    name: 'Hifz Ul Quran (حفظ القرآن الكريم)',
    duration: '2 - 3 Years',
    icon: Icons.book,
    color: GOLD,
    desc: 'Complete Quran memorization with daily Sabaq, Sabqi, and 30-Para Manzil revision system. Verified Makharij & Tajweed under certified Qaris.',
  },
  {
    code: 'DARS-E-NIZAMI',
    name: 'Dars-e-Nizami (درس نظامی)',
    duration: '4 Academic Levels',
    icon: Icons.graduation,
    color: '#3b82f6',
    desc: 'Comprehensive Islamic scholarship curriculum: Pre 9th (Sanviya Aamah), 9th (Sanviya Khasa), 10th (Shahadah Aaliya), and 11th (Shahadah Aalmiya / Dora-e-Hadith).',
  },
];

const SCHOLARS = [
  { name: 'Mufti Abdul Shakoor Faiq حَفِظَهُ اللَّهُ', role: 'Founder & Principal', qual: 'Faizl Uloom e Islamia', spec: 'Islamic Jurisprudence (Fiqh)' },
  { name: 'Qari Usman Ali', role: 'Head of Hifz Ul Quran', qual: 'Hafiz & Qari, Sanad in Hafs', spec: 'Tajweed & Quranic Memorization' },
  { name: 'Maulana Tariq Mahmood', role: 'Senior Scholar', qual: 'Shahadah Aaliya', spec: 'Ilm us-Sarf & Nahw' },
  { name: 'Maulana Kamran Raza', role: 'Senior Lecturer', qual: 'Shahadah Aalmiya', spec: 'Tafseer & Usul-ul-Fiqh' },
];

export default function Home() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const user = getCurrentUserSync();
    if (user) {
      router.replace(getPortalPath(user.role));
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Al-Faeq Islamic Institute — Excellence in Islamic Education</title>
        <meta name="description" content="Al-Faeq Education System offers Hifz Ul Quran with daily Sabaq/Manzil tracking and Dars-e-Nizami scholarship programs." />
      </Head>

      <div style={{ background: '#0a0e1a', color: '#fff', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
        {/* Desktop Navigation Bar */}
        <nav className="desktop-nav" style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(10, 14, 26, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          padding: '16px 36px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          transition: 'all 0.3s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/faeq-logo.png" alt="Al-Faeq Logo" style={{ width: 40, height: 40, borderRadius: 12, objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>Al-Faeq Institute</div>
              <div style={{ fontSize: '0.68rem', color: GOLD, fontWeight: 700, letterSpacing: '0.08em' }}>ISLAMIC EDUCATION SYSTEM</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <button onClick={() => scrollToSection('programs')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Programs</button>
            <button onClick={() => scrollToSection('scholars')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Faculty</button>
            <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>About</button>
            <button
              onClick={() => router.push('/login')}
              style={{
                background: `linear-gradient(135deg, ${GOLD}, #e09800)`,
                color: '#0a0e1a', padding: '10px 22px', borderRadius: 12,
                border: 'none', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              Sign In to Portal &rarr;
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Bar (Mobile View Only) */}
        <nav className="mobile-nav" style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(10, 14, 26, 0.98)' : 'rgba(10, 14, 26, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
          transition: 'all 0.3s ease',
        }}>
          {/* Main Title Section */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            padding: '12px 16px 2px',
          }}>
            <img src="/faeq-logo.png" alt="Al-Faeq Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>Al-Faeq Institute</span>
          </div>

          {/* Islamic Education System */}
          <div style={{
            fontSize: '0.75rem', color: GOLD, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center',
            marginBottom: '8px', marginTop: '4px'
          }}>
            Islamic Education System
          </div>

          {/* Sub Header: Program Faculty About (No Portal login button) */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '6px 12px 8px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <button
              onClick={() => scrollToSection('programs')}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)',
                fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', padding: '4px 10px',
                borderRadius: 8,
              }}
            >
              Program
            </button>
            <span style={{ color: 'rgba(242, 169, 0, 0.4)', fontSize: '0.75rem' }}>&bull;</span>
            <button
              onClick={() => scrollToSection('scholars')}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)',
                fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', padding: '4px 10px',
                borderRadius: 8,
              }}
            >
              Faculty
            </button>
            <span style={{ color: 'rgba(242, 169, 0, 0.4)', fontSize: '0.75rem' }}>&bull;</span>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)',
                fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', padding: '4px 10px',
                borderRadius: 8,
              }}
            >
              About
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          minHeight: '90vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '140px 24px 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Subtle background radial glows */}
          <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)', top: '10%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 880, position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 20,
              background: 'rgba(242,169,0,0.1)', border: '1px solid rgba(242,169,0,0.3)',
              color: GOLD, fontSize: '0.78rem', fontWeight: 700, marginBottom: 24,
            }}>
              {Icons.book(16, GOLD)} Admissions Open &bull; Session 2026
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15,
              margin: '0 0 20px 0', letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, #ffffff 40%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Islam and the <span style={{ color: GOLD, WebkitTextFillColor: GOLD }}>Science together</span>
            </h1>

            <p style={{
              fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6, maxWidth: 640, margin: '0 auto 36px',
            }}>
              Al-Faeq delivers authentic Quranic memorization with daily Surah & Ayah-level tracking, alongside the classical Dars-e-Nizami curriculum with real-time guardian visibility.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => router.push('/login')}
                style={{
                  background: `linear-gradient(135deg, ${GOLD}, #e09800)`,
                  color: '#0a0e1a', padding: '14px 32px', borderRadius: 14,
                  border: 'none', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 10,
                  boxShadow: '0 10px 30px rgba(242,169,0,0.3)',
                }}
              >
                Access Portal {Icons.arrowRight(18, '#0a0e1a')}
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                style={{
                  background: 'rgba(255,255,255,0.06)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '14px 28px', borderRadius: 14,
                  fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                }}
              >
                Explore Academic Programs
              </button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" style={{ padding: '80px 24px', maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em' }}>ACADEMIC DISCIPLINES</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '8px 0 0 0' }}>Our Core Islamic Programs</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {PROGRAMS.map((prog) => (
              <div
                key={prog.code}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20, padding: 32,
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 16, background: `${prog.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  {prog.icon(28, prog.color)}
                </div>
                <div style={{ fontSize: '0.78rem', color: prog.color, fontWeight: 700 }}>{prog.duration}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '6px 0 12px 0' }}>{prog.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6, margin: '0 0 20px 0' }}>{prog.desc}</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <button
                    onClick={() => router.push('/login')}
                    style={{ background: 'none', border: 'none', color: prog.color, fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}
                  >
                    Apply for Admission {Icons.arrowRight(16, prog.color)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Section */}
        <section id="scholars" style={{ padding: '80px 24px', maxWidth: 1140, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em' }}>DISTINGUISHED FACULTY</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '8px 0 0 0' }}>Scholars & Instructors</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 20 }}>
            {SCHOLARS.map((sc, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, fontWeight: 800, marginBottom: 14 }}>
                  {sc.name.split(' ')[1]?.[0] || 'S'}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 4px 0' }}>{sc.name}</h4>
                <div style={{ fontSize: '0.78rem', color: GOLD, fontWeight: 600 }}>{sc.role}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>{sc.qual}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Specialization: {sc.spec}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
            <img src="/faeq-logo.png" alt="" style={{ width: 28, height: 28, borderRadius: 8 }} />
            <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>Al-Faeq Islamic Institute</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Al-Faeq Islamic Education System. All rights reserved.
          </p>
        </footer>
      </div>

      <style jsx>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-nav {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </>
  );
}
