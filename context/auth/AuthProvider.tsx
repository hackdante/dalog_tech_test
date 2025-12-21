'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { UserUI } from "@/interfaces/auth/UserUI";
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserUI | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (currentUser?.theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(currentUser.theme);
    }
  }, [currentUser?.theme]);

  useEffect(() => {
    const savedSession = sessionStorage.getItem('dalog_session');
    if (savedSession) {
      try {
        setCurrentUser(JSON.parse(savedSession));
      } catch (error) {
        sessionStorage.removeItem('dalog_session');
      }
    }
    setIsHydrated(true);
  }, []);

  const login = useCallback((user: UserUI) => {
    setCurrentUser(user);
    sessionStorage.setItem('dalog_session', JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    sessionStorage.removeItem('dalog_session');
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isHydrated }}>
      {children}
    </AuthContext.Provider>
  );
};