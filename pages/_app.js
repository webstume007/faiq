import React, { useState, useEffect, createContext, useContext } from 'react';
import Head from 'next/head';

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('faiq-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setShowThemeModal(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('faiq-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        :root {
          --bg-color: #0a0e1a;
          --text-primary: #ffffff;
          --text-secondary: rgba(255,255,255,0.6);
          --text-tertiary: rgba(255,255,255,0.4);
          --border-color: rgba(255,255,255,0.08);
          --border-light: rgba(255,255,255,0.04);
          --card-bg: rgba(255,255,255,0.03);
          --card-bg-hover: rgba(255,255,255,0.06);
          --input-bg: rgba(0,0,0,0.2);
          --modal-bg: #111;
          --accent-gold: #F2A900;
          --accent-gold-transparent: rgba(242, 169, 0, 0.22);
          --shadow-color: rgba(0,0,0,0.5);
        }

        [data-theme='light'] {
          --bg-color: #f4f7fb;
          --text-primary: #1e293b;
          --text-secondary: #475569;
          --text-tertiary: #94a3b8;
          --border-color: rgba(0,0,0,0.1);
          --border-light: rgba(0,0,0,0.05);
          --card-bg: #ffffff;
          --card-bg-hover: #f8fafc;
          --input-bg: #ffffff;
          --modal-bg: #ffffff;
          --accent-gold: #D48F00;
          --accent-gold-transparent: rgba(212, 143, 0, 0.15);
          --shadow-color: rgba(0,0,0,0.1);
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: var(--bg-color);
          color: var(--text-primary);
          min-height: 100vh;
          overflow-x: hidden;
          transition: background 0.3s ease, color 0.3s ease;
        }

        ::selection {
          background: var(--accent-gold-transparent);
          color: var(--text-primary);
        }

        input, select, textarea, button {
          font-family: inherit;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(242, 169, 0, 0.2); }
          50% { border-color: rgba(242, 169, 0, 0.5); }
        }
      `}</style>
      
      {isMounted && <Component {...pageProps} />}
      
      {showThemeModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)', animation: 'fadeIn 0.4s ease'
        }}>
          <div style={{
            background: 'var(--modal-bg)',
            padding: 32, borderRadius: 20, maxWidth: 400, width: '90%',
            textAlign: 'center', border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px var(--shadow-color)'
          }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 8 }}>Choose Your Theme</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 24 }}>
              Select your preferred appearance. You can change this later in settings.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <button onClick={() => { changeTheme('dark'); setShowThemeModal(false); }}
                style={{
                  background: '#0a0e1a', color: '#fff', border: '2px solid var(--accent-gold)',
                  padding: '16px', borderRadius: 12, cursor: 'pointer', fontWeight: 600,
                  transition: 'all 0.2s'
                }}>
                Dark Mode
              </button>
              <button onClick={() => { changeTheme('light'); setShowThemeModal(false); }}
                style={{
                  background: '#f4f7fb', color: '#1e293b', border: '2px solid #e2e8f0',
                  padding: '16px', borderRadius: 12, cursor: 'pointer', fontWeight: 600,
                  transition: 'all 0.2s'
                }}>
                Light Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
}
