/**
 * Auth Session Management
 * Uses Supabase Auth for real session management.
 * Login is done via CNIC (looked up to email), password, with OTP for signups.
 */
import { supabase } from './supabaseClient';

/**
 * Get the current authenticated user from Supabase session + profile from public.users
 */
export const getCurrentUser = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !session) return null;

    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (!profile) return null;
    const { password_hash, ...safeProfile } = profile;
    return safeProfile;
  } catch {
    return null;
  }
};

/**
 * Get current user synchronously from localStorage cache (for fast SSR/redirect checks).
 * Falls back to null if not available.
 */
export const getCurrentUserSync = () => {
  if (typeof window === 'undefined') return null;
  try {
    const cached = localStorage.getItem('sms_user_profile');
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

/**
 * Cache user profile in localStorage for fast access across page navigations.
 */
export const cacheUserProfile = (profile) => {
  if (typeof window !== 'undefined' && profile) {
    localStorage.setItem('sms_user_profile', JSON.stringify(profile));
  }
};

/**
 * Clear cached user profile
 */
export const clearCachedProfile = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('sms_user_profile');
  }
};

/**
 * Logout the user from Supabase and clear cache
 */
export const logout = async () => {
  clearCachedProfile();
  await supabase.auth.signOut();
};

/**
 * Legacy login() shim kept for any pages that still call it — now a no-op,
 * since Supabase auth manages sessions automatically.
 */
export const login = (user) => {
  cacheUserProfile(user);
};

/**
 * Check if user is authenticated and has the required role.
 * Uses the cached profile for fast synchronous access.
 */
export const requireAuth = (requiredRole) => {
  const user = getCurrentUserSync();
  if (!user) return null;
  if (requiredRole && user.role !== requiredRole) return null;
  return user;
};

/**
 * Get the portal path for a given role
 */
export const getPortalPath = (role) => {
  switch (role) {
    case 'admin':    return '/admin';
    case 'teacher':  return '/teacher';
    case 'guardian': return '/guardian';
    default:         return '/login';
  }
};
