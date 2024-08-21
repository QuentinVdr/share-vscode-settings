import { SessionStorageUtils } from '@utils/SessionStorageUtils';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * A component that provides authentication context and state to its children.
 */
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(SessionStorageUtils.getItem('user'));

  /**
   * Store the user session in the local storage on user change
   */
  const handleUserChange = (newUser) => {
    setUser(newUser);
    SessionStorageUtils.storeItem('user', newUser);
  };

  /**
   * Return true if the user is authenticated and his allowed actions calculated, false otherwise
   */
  const isAuthenticated = () => !!user;

  /**
   * Get the current session
   */
  const login = (user) => {
    handleUserChange(user);
  };

  /**
   * Clear the current session
   */
  const logout = () => {
    handleUserChange(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
}

/** A custom hook that provides access to the authentication context. */
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
