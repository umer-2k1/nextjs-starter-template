/**
 * An array of public routes that do not require authentication.
 * @type {string[]} publicRoute
 */

export const publicRoute = ['/'];

/**
 * An array of routes that are used for authentication.
 * These routes are used to authenticate users.
 * These routes will redirect logged in users to /settings page.
 * @type {string[]} authRoute
 */

export const authRoute = ['/auth/login', '/auth/signup'];

/**
 * The prefix for the api routes.
 * Route start with this prefix will be treated as api routes.
 * @type {string} apiPrefix
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after login.
 * @type {string} DEFAULT_LOGIN_REDIRECT
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
