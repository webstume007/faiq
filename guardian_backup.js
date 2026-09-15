import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getCurrentUser, logout } from '../lib/auth';
import { mockGuardianChildren, mockAnnouncements } from '../lib/guardianData';

// ============================================================
// PURE SVG ICONS (Zero emojis, crisp vector rendering)
// ============================================================
const Icons = {
  calendar: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  clipboard: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
      <path d="M9 12h6"/>
      <path d="M9 16h6"/>
    </svg>
  ),
  chart: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  bell: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  user: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  logOut: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  clock: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  mapPin: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  search: (size = 16, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  check: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  x: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  minus: (size = 14, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  plus: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  home: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  menu: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
};

export default function GuardianPortal() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  
  // Mobile / Desktop View State
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [showSidebar, setShowSidebar] = useState(false);
  
  // Data State
  const [childrenList, setChildrenList] = useState([]);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  // Schedule Filters
  const [selectedDay, setSelectedDay] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check and event listener setup
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'guardian') {
      router.replace('/login');
      return () => window.removeEventListener('resize', handleResize);
    }
    
    setUser(currentUser);
    
    // Load children data
    const cnic = currentUser.cnic;
    if (mockGuardianChildren[cnic]) {
      setChildrenList(mockGuardianChildren[cnic]);
    } else {
      setChildrenList([]);
    }

    // Default tab logic based on device
    if (window.innerWidth <= 768) {
      setActiveTab('home');
    } else {
      setActiveTab('schedule');
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user || childrenList.length === 0) return null; // Show a loader in a real app

  const currentChild = childrenList[selectedChildIndex];

  // Filtered Schedule
  const filteredSchedule = currentChild.schedule.filter((item) => {
    const matchesDay = selectedDay === 'ALL' || item.day === selectedDay;
    const matchesSearch =
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.room.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDay && matchesSearch;
  });

  const switchChild = (index) => {
    setSelectedChildIndex(index);
    setShowChildSwitcher(false);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setShowSidebar(false); // Close sidebar if navigating
  };

  return (
    <>
      <Head>
        <title>Guardian Portal - Al-Faiq Education System</title>
        <link rel="icon" href="/faiq-logo.png" />
      </Head>

      <div style={styles.page}>
        
        {/* =========================================
            GLOBAL HEADER (Institute Name, Logo, Bell) 
            ========================================= */}
        <header style={styles.globalHeader}>
          <div style={styles.headerContainer}>
            <div style={styles.brandGroup}>
              <div style={styles.logoBox}>
                <img src="/faiq-logo.png" alt="Al-Faiq Logo" style={styles.logoImg} />
              </div>
              <h1 style={styles.brandTitle}>Al-Faiq Education System</h1>
            </div>
            
            <div style={styles.headerActions}>
              <button style={styles.iconBtn}>
                {Icons.bell(20, '#F2A900')}
                {/* Notification Badge */}
                <span style={styles.badge}>3</span>
              </button>
            </div>
          </div>
        </header>

        {/* =========================================
            SUB-HEADER (Portal Name) 
            ========================================= */}
        <div style={styles.subHeader}>
          <div style={styles.subHeaderContainer}>
            <span style={styles.portalTag}>Guardian Portal</span>
            
            {/* Desktop only: Sign out button */}
            {!isMobile && (
              <button
                onClick={() => { logout(); router.push('/login'); }}
                style={styles.signOutBtnDesktop}
                title="Sign Out"
              >
                {Icons.logOut(14, '#fca5a5')}
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>

        <div style={styles.mainContainer}>
          
          {/* =========================================
              CHILD SELECTOR CARD
              ========================================= */}
          <div style={styles.childCard}>
            <div style={styles.childCardInner}>
              <div style={styles.childAvatar}>
                {Icons.user(24, '#F2A900')}
              </div>
              <div style={styles.childInfo}>
                <h2 style={styles.childName}>{currentChild.studentName}</h2>
                <div style={styles.childDetails}>
                  <span style={styles.metaBadge}>{currentChild.rollNo}</span>
                  <span style={styles.metaText}>{currentChild.classSection}</span>
                </div>
              </div>
              <div style={styles.childAttendance}>
                 <span style={styles.attLabel}>Attendance</span>
                 <span style={styles.attValue}>{currentChild.overallAttendance}</span>
              </div>
            </div>
            
            <div style={styles.childCardAction}>
              <button 
                onClick={() => setShowChildSwitcher(!showChildSwitcher)}
                style={styles.switchBtn}
                title="Switch Child"
              >
                {Icons.plus(20, '#0a0e1a')}
              </button>
            </div>
            
            {/* Child Switcher Dropdown */}
            {showChildSwitcher && (
              <div style={styles.switcherDropdown}>
                <h4 style={styles.switcherTitle}>Select Child</h4>
                {childrenList.map((child, idx) => (
                  <button 
                    key={child.id} 
                    onClick={() => switchChild(idx)}
                    style={styles.switcherItem(idx === selectedChildIndex)}
                  >
                    <div style={styles.switcherAvatar}>{Icons.user(16, idx === selectedChildIndex ? '#0a0e1a' : '#F2A900')}</div>
                    <div style={{textAlign: 'left'}}>
                      <div style={styles.switcherName(idx === selectedChildIndex)}>{child.studentName}</div>
                      <div style={styles.switcherClass(idx === selectedChildIndex)}>{child.classSection}</div>
                    </div>
                  </button>
                ))}
                <button style={styles.addnewBtn}>
                  {Icons.plus(14, '#F2A900')} Add New Child
                </button>
              </div>
            )}
          </div>

          {/* =========================================
              DESKTOP TAB NAVIGATION
              ========================================= */}
          {!isMobile && (
            <nav style={styles.desktopTabs}>
              {[
                { key: 'schedule', label: 'Class Schedule', icon: Icons.calendar },
                { key: 'attendance', label: 'Attendance', icon: Icons.clipboard },
                { key: 'results', label: 'Academic Results', icon: Icons.chart },
                { key: 'announcements', label: 'Announcements', icon: Icons.bell },
                { key: 'profile', label: 'My Profile', icon: Icons.user },
              ].map((tab) => {
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    style={styles.tabBtn(active)}
                  >
                    {tab.icon(18, active ? '#0a0e1a' : 'rgba(255,255,255,0.6)')}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* =========================================
              TAB CONTENT AREAS
              ========================================= */}

          {/* 0. HOME TAB (Mobile Only Dashboard) */}
          {activeTab === 'home' && isMobile && (
            <div style={styles.tabContent}>
              
              {/* Notice Board */}
              <div style={styles.homeSection}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>Notice Board</h3>
                  <button onClick={() => handleTabChange('announcements')} style={styles.viewAllBtn}>View All {Icons.calendar(12, '#F2A900')}</button>
                </div>
                <div style={styles.noticeList}>
                  {mockAnnouncements.slice(0, 2).map((ann) => (
                    <div key={ann.id} style={styles.noticeCard}>
                      <span style={styles.noticeDate}>{ann.date}</span>
                      <h4 style={styles.noticeTitle}>{ann.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attendance Statistics */}
              <div style={styles.homeSection}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>Attendance Statistics</h3>
                  <button onClick={() => handleTabChange('attendance')} style={styles.viewAllBtn}>Details</button>
                </div>
                <div style={styles.statsGrid}>
                  <div style={styles.statMiniCard}>
                    <span style={styles.statMiniLabel}>Present</span>
                    <span style={{...styles.statMiniVal, color: '#86efac'}}>{currentChild.attendance.stats.present}</span>
                  </div>
                  <div style={styles.statMiniCard}>
                    <span style={styles.statMiniLabel}>Absent</span>
                    <span style={{...styles.statMiniVal, color: '#fca5a5'}}>{currentChild.attendance.stats.absent}</span>
                  </div>
                  <div style={styles.statMiniCard}>
                    <span style={styles.statMiniLabel}>Leave</span>
                    <span style={{...styles.statMiniVal, color: '#fde047'}}>{currentChild.attendance.stats.leave}</span>
                  </div>
                </div>
              </div>
              
              {/* Study Progress */}
              <div style={styles.homeSection}>
                <h3 style={styles.sectionTitle}>Study Progress</h3>
                <div style={styles.progressCard}>
                  <div style={styles.progressHeader}>
                    <span style={styles.progressLabel}>Overall Performance</span>
                    <span style={styles.progressPercent}>{currentChild.studyProgress}%</span>
                  </div>
                  <div style={styles.progressBarBg}>
                    <div style={{...styles.progressBarFill, width: `${currentChild.studyProgress}%`}}></div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* 1. SCHEDULE TAB */}
          {activeTab === 'schedule' && (
            <div style={styles.tabContent}>
              <div style={styles.controlsRow}>
                <div style={styles.daySelector}>
                  {['ALL', 'MON', 'TUE', 'WED', 'THU', 'FRI'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      style={styles.dayBtn(selectedDay === day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div style={styles.searchBox}>
                  <span style={styles.searchIcon}>{Icons.search(16, 'rgba(255,255,255,0.4)')}</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subject, teacher..."
                    style={styles.searchInput}
                  />
                </div>
              </div>

              <div style={styles.cardsGrid}>
                {filteredSchedule.length > 0 ? (
                  filteredSchedule.map((item) => (
                    <div key={item.id} style={styles.scheduleCard}>
                      <div style={styles.scheduleHeader}>
                        <span style={styles.dayTag}>{item.day}</span>
                        <span style={styles.codeTag}>{item.code}</span>
                      </div>
                      <h3 style={styles.courseTitle}>{item.course}</h3>

                      <div style={styles.scheduleDetailRow}>
                        <span style={styles.detailIcon}>{Icons.clock(14, '#F2A900')}</span>
                        <span style={styles.detailText}>{item.time}</span>
                      </div>

                      <div style={styles.scheduleDetailRow}>
                        <span style={styles.detailIcon}>{Icons.mapPin(14, 'rgba(255,255,255,0.6)')}</span>
                        <span style={styles.detailText}>{item.room}</span>
                      </div>

                      <div style={styles.scheduleDetailRow}>
                        <span style={styles.detailIcon}>{Icons.user(14, 'rgba(255,255,255,0.6)')}</span>
                        <span style={styles.detailText}>{item.teacher}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={styles.emptyState}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>No classes scheduled for the selected filter.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. ATTENDANCE TAB */}
          {activeTab === 'attendance' && (
            <div style={styles.tabContent}>
              <div style={styles.summaryRow}>
                <div style={styles.summaryCard}>
                  <span style={styles.summaryLabel}>Total</span>
                  <span style={styles.summaryNum}>{currentChild.attendance.stats.totalClasses}</span>
                </div>
                <div style={styles.summaryCard}>
                  <span style={styles.summaryLabel}>Present</span>
                  <span style={{ ...styles.summaryNum, color: '#86efac' }}>{currentChild.attendance.stats.present}</span>
                </div>
                <div style={styles.summaryCard}>
                  <span style={styles.summaryLabel}>Absent</span>
                  <span style={{ ...styles.summaryNum, color: '#fca5a5' }}>{currentChild.attendance.stats.absent}</span>
                </div>
                <div style={styles.summaryCard}>
                  <span style={styles.summaryLabel}>Leave</span>
                  <span style={{ ...styles.summaryNum, color: '#fde047' }}>{currentChild.attendance.stats.leave}</span>
                </div>
              </div>

              <div style={styles.panelCard}>
                <h3 style={styles.panelTitle}>Daily Attendance Log</h3>
                <div style={styles.tableResponsive}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Subject</th>
                        <th style={styles.th}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentChild.attendance.records.map((rec) => (
                        <tr key={rec.id} style={styles.tr}>
                          <td style={styles.td}>{rec.date}</td>
                          <td style={styles.tdBold}>{rec.subject}</td>
                          <td style={styles.td}>
                            <span style={styles.statusTag(rec.status)}>
                              {rec.status === 'Present' && Icons.check(12, '#86efac')}
                              {rec.status === 'Absent' && Icons.x(12, '#fca5a5')}
                              {rec.status === 'Leave' && Icons.minus(12, '#fde047')}
                              <span>{rec.status}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 3. RESULTS TAB */}
          {activeTab === 'results' && (
            <div style={styles.tabContent}>
              <div style={styles.panelCard}>
                <h3 style={styles.panelTitle}>Semester Performance Overview</h3>
                <div style={styles.tableResponsive}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Subject</th>
                        <th style={styles.th}>Midterm (25)</th>
                        <th style={styles.th}>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentChild.results.map((res) => (
                        <tr key={res.id} style={styles.tr}>
                          <td style={styles.tdBold}>{res.subject} <br/><span style={styles.tdCode}>{res.code}</span></td>
                          <td style={styles.td}>{res.midterm} / {res.totalMid}</td>
                          <td style={styles.td}>
                            <span style={styles.gradeTag}>{res.grade}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 4. ANNOUNCEMENTS TAB */}
          {activeTab === 'announcements' && (
            <div style={styles.tabContent}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {mockAnnouncements.map((ann) => (
                  <div key={ann.id} style={styles.announcementCard}>
                    <div style={styles.annHeader}>
                      <span style={styles.catBadge}>{ann.category}</span>
                      <span style={styles.dateText}>{ann.date}</span>
                    </div>
                    <h3 style={styles.annTitle}>{ann.title}</h3>
                    <p style={styles.annBody}>{ann.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PROFILE TAB */}
          {activeTab === 'profile' && (
            <div style={styles.tabContent}>
              <div style={styles.profileGrid}>
                <div style={styles.panelCard}>
                  <h3 style={styles.panelTitle}>Guardian Details</h3>
                  <div style={styles.profileList}>
                    <div style={styles.profileItem}>
                      <span style={styles.profileLabel}>Full Name</span>
                      <span style={styles.profileVal}>{user.firstName} {user.lastName}</span>
                    </div>
                    <div style={styles.profileItem}>
                      <span style={styles.profileLabel}>CNIC Number</span>
                      <span style={styles.profileVal}>{user.cnic}</span>
                    </div>
                    <div style={styles.profileItem}>
                      <span style={styles.profileLabel}>Phone Number</span>
                      <span style={styles.profileVal}>{user.phone || currentChild.guardianPhone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =========================================
            MOBILE BOTTOM NAVIGATION BAR
            ========================================= */}
        {isMobile && (
          <>
            <nav style={styles.mobileNav}>
              {[
                { key: 'home', label: 'Home', icon: Icons.home },
                { key: 'attendance', label: 'Attend', icon: Icons.clipboard },
                { key: 'schedule', label: 'Schedule', icon: Icons.calendar },
              ].map((tab) => {
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    style={styles.mobileTabBtn(active)}
                  >
                    {tab.icon(20, active ? '#F2A900' : 'rgba(255,255,255,0.4)')}
                    <span style={styles.mobileTabLabel(active)}>{tab.label}</span>
                  </button>
                );
              })}
              
              {/* "More" Button for Sidebar */}
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                style={styles.mobileTabBtn(showSidebar)}
              >
                {Icons.menu(20, showSidebar ? '#F2A900' : 'rgba(255,255,255,0.4)')}
                <span style={styles.mobileTabLabel(showSidebar)}>More</span>
              </button>
            </nav>

            {/* Mobile Sidebar / Menu (Overlay) */}
            {showSidebar && (
              <div style={styles.sidebarOverlay} onClick={() => setShowSidebar(false)}>
                <div style={styles.sidebarMenu} onClick={(e) => e.stopPropagation()}>
                    <div style={styles.sidebarHeader}>
                      <h3 style={{margin: 0, fontSize: '1rem', color: '#fff'}}>More Options</h3>
                      <button onClick={() => setShowSidebar(false)} style={{background:'none', border:'none', color:'#fff'}}>{Icons.x(20)}</button>
                    </div>
                    
                    <button onClick={() => handleTabChange('home')} style={styles.sidebarLink}>
                      {Icons.home(18, 'rgba(255,255,255,0.6)')} Home
                    </button>
                    <button onClick={() => handleTabChange('attendance')} style={styles.sidebarLink}>
                      {Icons.clipboard(18, 'rgba(255,255,255,0.6)')} Attendance
                    </button>
                    <button onClick={() => handleTabChange('schedule')} style={styles.sidebarLink}>
                      {Icons.calendar(18, 'rgba(255,255,255,0.6)')} Schedule
                    </button>
                    <button onClick={() => handleTabChange('results')} style={styles.sidebarLink}>
                      {Icons.chart(18, 'rgba(255,255,255,0.6)')} Results
                    </button>
                    <button onClick={() => handleTabChange('announcements')} style={styles.sidebarLink}>
                      {Icons.bell(18, 'rgba(255,255,255,0.6)')} Announcements
                    </button>
                    <button onClick={() => handleTabChange('profile')} style={styles.sidebarLink}>
                      {Icons.user(18, 'rgba(255,255,255,0.6)')} My Profile
                    </button>
                    
                    <div style={{height: 1, background: 'rgba(255,255,255,0.1)', margin: '10px 0'}}></div>
                  
                  <button 
                    onClick={() => { logout(); router.push('/login'); }} 
                    style={{...styles.sidebarLink, color: '#fca5a5'}}
                  >
                    {Icons.logOut(18, '#fca5a5')} Sign Out
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

// ============================================================
// STYLES
// ============================================================
const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0e1a',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    paddingBottom: 80,
  },
  
  /* Global Header */
  globalHeader: {
    background: 'rgba(10, 14, 26, 1)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  headerContainer: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  logoBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(242, 169, 0, 0.3)',
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  brandTitle: {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
  },
  iconBtn: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 50,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: '#ef4444',
    color: '#fff',
    fontSize: '0.6rem',
    fontWeight: 700,
    width: 16,
    height: 16,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Sub Header */
  subHeader: {
    background: 'rgba(242, 169, 0, 0.1)',
    borderBottom: '1px solid rgba(242, 169, 0, 0.2)',
  },
  subHeaderContainer: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  portalTag: {
    fontSize: '0.75rem',
    color: '#F2A900',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  signOutBtnDesktop: {
    background: 'transparent',
    border: 'none',
    color: '#fca5a5',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
  },

  mainContainer: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '20px',
  },
  
  /* Child Selector Card */
  childCard: {
    background: 'linear-gradient(135deg, rgba(18, 26, 51, 0.8) 0%, rgba(24, 35, 66, 0.8) 100%)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: 24,
    position: 'relative',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  },
  childCardInner: {
    flex: 1,
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  childAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'rgba(242, 169, 0, 0.15)',
    border: '1px solid rgba(242, 169, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childInfo: {
    flex: 1,
    minWidth: 150,
  },
  childName: {
    fontSize: '1.1rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 4px 0',
  },
  childDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  childAttendance: {
    background: 'rgba(0,0,0,0.3)',
    padding: '8px 12px',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center',
  },
  attLabel: {
    display: 'block',
    fontSize: '0.65rem',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
  },
  attValue: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#86efac',
  },
  childCardAction: {
    background: '#F2A900',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  switchBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
  },
  switcherDropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: 8,
    background: '#121a33',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    width: 250,
    zIndex: 50,
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    padding: 8,
  },
  switcherTitle: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    padding: '8px 12px',
    margin: 0,
  },
  switcherItem: (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    background: active ? 'rgba(242, 169, 0, 0.1)' : 'transparent',
    border: active ? '1px solid rgba(242, 169, 0, 0.2)' : '1px solid transparent',
    padding: '10px 12px',
    borderRadius: 8,
    cursor: 'pointer',
    marginBottom: 4,
  }),
  switcherAvatar: {
    background: 'rgba(255,255,255,0.05)',
    padding: 6,
    borderRadius: 8,
  },
  switcherName: (active) => ({
    fontSize: '0.85rem',
    fontWeight: 600,
    color: active ? '#F2A900' : '#fff',
  }),
  switcherClass: (active) => ({
    fontSize: '0.7rem',
    color: active ? 'rgba(242,169,0,0.6)' : 'rgba(255,255,255,0.4)',
  }),
  addnewBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    padding: '10px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px dashed rgba(255,255,255,0.1)',
    borderRadius: 8,
    color: '#F2A900',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 8,
  },

  /* Desktop Tabs */
  desktopTabs: {
    display: 'flex',
    gap: 8,
    background: 'rgba(255,255,255,0.03)',
    padding: 6,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.06)',
    marginBottom: 24,
    overflowX: 'auto',
  },
  tabBtn: (active) => ({
    flex: 1,
    padding: '12px 16px',
    border: 'none',
    borderRadius: 10,
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
    background: active ? 'linear-gradient(135deg, #F2A900 0%, #d99600 100%)' : 'transparent',
    color: active ? '#0a0e1a' : 'rgba(255,255,255,0.6)',
    transition: 'all 0.2s ease',
  }),

  tabContent: {
    animation: 'fadeIn 0.3s ease-out',
  },

  /* Home Section (Mobile) */
  homeSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
  },
  viewAllBtn: {
    background: 'none',
    border: 'none',
    color: '#F2A900',
    fontSize: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  noticeList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  noticeCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '14px',
    borderLeft: '4px solid #F2A900',
  },
  noticeDate: {
    display: 'block',
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 4,
  },
  noticeTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 10,
  },
  statMiniCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '12px',
    textAlign: 'center',
  },
  statMiniLabel: {
    display: 'block',
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 4,
  },
  statMiniVal: {
    fontSize: '1.2rem',
    fontWeight: 800,
  },
  progressCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '16px',
    marginTop: 12,
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: '0.85rem',
    color: '#fff',
  },
  progressPercent: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#F2A900',
  },
  progressBarBg: {
    height: 8,
    background: 'rgba(255,255,255,0.05)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #F2A900, #d99600)',
    borderRadius: 4,
  },

  /* Common UI Elements */
  metaBadge: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#F2A900',
    background: 'rgba(242, 169, 0, 0.12)',
    padding: '3px 10px',
    borderRadius: 6,
    fontFamily: 'monospace',
  },
  metaText: {
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.6)',
  },

  /* Schedule specific */
  controlsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  daySelector: {
    display: 'flex',
    gap: 6,
    background: 'rgba(255,255,255,0.04)',
    padding: 4,
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.06)',
  },
  dayBtn: (active) => ({
    padding: '8px 14px',
    border: 'none',
    borderRadius: 8,
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
    background: active ? '#F2A900' : 'transparent',
    color: active ? '#0a0e1a' : 'rgba(255,255,255,0.6)',
  }),
  searchBox: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    minWidth: 200,
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    padding: '10px 12px 10px 38px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    color: '#ffffff',
    fontSize: '0.85rem',
    outline: 'none',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16,
  },
  scheduleCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: 20,
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  scheduleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayTag: {
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#0a0e1a',
    background: '#F2A900',
    padding: '2px 8px',
    borderRadius: 6,
  },
  codeTag: {
    fontSize: '0.72rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'monospace',
  },
  courseTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 14px 0',
  },
  scheduleDetailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  detailIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  detailText: {
    fontSize: '0.84rem',
    color: 'rgba(255,255,255,0.7)',
  },
  
  /* Tables & Panels */
  summaryRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 12,
    marginBottom: 20,
  },
  summaryCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '16px 10px',
    textAlign: 'center',
  },
  summaryLabel: {
    display: 'block',
    fontSize: '0.7rem',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  summaryNum: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#ffffff',
  },
  panelCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: 20,
  },
  panelTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 16px 0',
  },
  tableResponsive: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '12px',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  tr: {
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  td: {
    padding: '12px',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.8)',
  },
  tdBold: {
    padding: '12px',
    fontSize: '0.88rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  tdCode: {
    fontSize: '0.75rem',
    color: '#F2A900',
    fontFamily: 'monospace',
  },
  statusTag: (status) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: '0.78rem',
    fontWeight: 700,
    background:
      status === 'Present' ? 'rgba(34, 197, 94, 0.12)' : status === 'Absent' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(234, 179, 8, 0.12)',
    color:
      status === 'Present' ? '#86efac' : status === 'Absent' ? '#fca5a5' : '#fde047',
  }),
  gradeTag: {
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#0a0e1a',
    background: '#F2A900',
    padding: '4px 12px',
    borderRadius: 6,
    display: 'inline-block',
  },

  /* Announcements */
  announcementCard: {
    background: 'rgba(18, 26, 51, 0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: 20,
  },
  annHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  catBadge: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#F2A900',
    background: 'rgba(242, 169, 0, 0.12)',
    padding: '3px 10px',
    borderRadius: 6,
  },
  dateText: {
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.4)',
  },
  annTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 8px 0',
  },
  annBody: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.5,
    margin: 0,
  },

  /* Profile */
  profileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  },
  profileList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  profileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  profileLabel: {
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.4)',
  },
  profileVal: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#ffffff',
  },

  emptyState: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: 40,
    background: 'rgba(255,255,255,0.02)',
    borderRadius: 14,
  },

  /* Mobile Bottom Navigation Bar */
  mobileNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(10, 14, 26, 0.95)',
    backdropFilter: 'blur(16px)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 4px',
  },
  mobileTabBtn: (active) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    flex: 1,
  }),
  mobileTabLabel: (active) => ({
    fontSize: '0.65rem',
    fontWeight: 600,
    color: active ? '#F2A900' : 'rgba(255,255,255,0.4)',
  }),

  /* Mobile Sidebar / More Menu */
  sidebarOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60, // Above bottom nav
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 90,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sidebarMenu: {
    background: '#121a33',
    width: 250,
    height: '100%',
    borderLeft: '1px solid rgba(255,255,255,0.1)',
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    animation: 'slideInRight 0.3s ease-out',
  },
  sidebarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: 10,
  },
  sidebarLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    padding: '12px 10px',
    cursor: 'pointer',
    borderRadius: 8,
    textAlign: 'left',
  },
};
