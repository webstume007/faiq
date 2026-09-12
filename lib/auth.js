/**
 * Auth Session Management
 * Uses localStorage to persist login sessions.
 * Will be replaced with Supabase auth later.
 */

const AUTH_KEY = 'sms_auth_session';

/**
 * Store user session after successful login
 */
export const login = (user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }
};

/**
 * Clear user session (logout)
 */
export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_KEY);
  }
};

/**
 * Get current logged-in user
 */
export const getCurrentUser = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(AUTH_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return null;
      }
    }
  }
  return null;
};

/**
 * Check if user is authenticated and has the required role.
 * Returns the user if valid, null otherwise.
 */
export const requireAuth = (requiredRole) => {
  const user = getCurrentUser();
  if (!user) return null;
  if (requiredRole && user.role !== requiredRole) return null;
  return user;
};

/**
 * Get the portal path for a given role
 */
export const getPortalPath = (role) => {
  switch (role) {
    case 'admin': return '/admin';
    case 'teacher': return '/teacher';
    case 'guardian': return '/guardian';
    default: return '/login';
  }
};
