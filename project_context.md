# Project Context: Al-Faiq Education System

This document serves as a persistent memory of the project's requirements, design aesthetics, and user scenarios.

## Design Guidelines
- **Colors**: Navy (`#002147`), Gold (`#F2A900`), and Glassmorphism dark themes (`#0a0e1a` base).
- **Typography**: Modern fonts (e.g., `Inter`, sans-serif).
- **Styling**: Sleek, slightly rounded corners (`border-radius: 12px` to `16px`), smooth subtle animations.
- **Icons**: Strictly use pure SVG vector icons. **NEVER USE EMOJIS**.
- **Aesthetics**: Premium, modern, "wow" factor, clean layouts.

## Core Workflows & Scenarios

### Authentication (Phase 1)
- Unified login page (`/login`) for all roles (Guardian, Teacher, Admin) using CNIC.
- Redirects to respective portals based on role lookup.
- Guardians can sign up; Teachers are created by Admins.
- UI: Only the Sign In form is shown by default. A "+ Create new account" button below switches to the signup form.

### Portals Overview
- **Guardian Portal**: For parents/guardians to track their children's progress.
- **Teacher Portal**: For teachers to manage classes, attendance, and results.
- **Admin Portal**: Main dashboard with a mega search bar, full system management.

### Guardian Portal Specifics (Current Implementation Phase)
- **Multi-Child Support**: Guardians can have multiple enrolled children. A "Child Selector Card" allows switching contexts. Adding a new child is supported.
- **Responsive Layout**:
  - **Desktop**: Global header, sub-header (Guardian Portal), top horizontal navigation tabs.
  - **Mobile**: Global header, sub-header, bottom navigation bar with a "Home" button and a "More" (sidebar) menu for overflow items.
- **Mobile "Home" View**:
  - Features a Notice Board (styled cleanly).
  - Quick statistics for Attendance and Study Progress.
- **Core Tabs**: Schedule (Timetable), Attendance (Logs and Stats), Results (Grades), Announcements, Profile.

## User Prompts Log (Historical Context)
*Summarized key instructions from the user across sessions.*

1.  "add few more things in implementation plan... all login will login using CNIC... teachers portal admin will create... Admin main dashboard will have mega search bar..."
2.  "UI of all portals will be same except admin desktop view will have bar in left while mobile view will match attached reference... the UI should moreeeeee modern, animations, svgs icons, slight round cornors (NEVER USE EMOJI)"
3.  "remove this line from signup --dont add two button signin and signup only signin will be on that page below Create new account button... Instead School Portal Managements sytem Add Al-Faiq Education System and add logo as well..."
4.  "Put NOtice board as in refrence repo index page has also notification icon in top right cornor Guardian Portal or Admin Portal or Teacher Portal will be in narrow sub bar under the header in mobile view... in mobile view there will be Home Button there will be notice borad... below statistics of attendance below Study_Progress statistics... in main header only institute name and logo and on right side notification icon... below there will be a card showing the picture of child1 and name and course its enrolled and attendence percentage upon clicking + button in right of card option to switch to another child will show... also save the entire my prompts and scenerio somewhere in .md like file so you can remember"
