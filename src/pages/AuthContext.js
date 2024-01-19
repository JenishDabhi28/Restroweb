import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    // Check if the user is logged in when the component mounts
    const storedToken = localStorage.getItem('userToken');
    return !!storedToken;
  });

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem('userToken', 'yourAuthToken');
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
