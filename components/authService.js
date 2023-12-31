// authService.js
let authenticatedUser = null;

export const login = (username, password) => {
  // You should perform actual authentication here
  authenticatedUser = { username };
  return authenticatedUser;
};

export const logout = () => {
  // Perform logout logic
  authenticatedUser = null;
};

export const getAuthenticatedUser = () => authenticatedUser;
