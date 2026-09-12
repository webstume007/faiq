/**
 * Users Data Access (Supabase-backed)
 * Wraps db.js functions for backward compatibility with existing imports.
 */
export {
  authenticateUser,
  findUserByCnic,
  getAllUsers,
  getUsersByRole,
  createUser,
  updateUser,
  deleteUser,
} from './db';
