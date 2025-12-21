'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { UserUI } from "@/interfaces/auth/UserUI";
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Cambiamos a 'user' para que coincida con la interfaz del Contexto
  const [user, setUser] = useState<UserUI | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (user?.theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(user.theme);
    }
  }, [user?.theme]);

  useEffect(() => {
    const savedSession = sessionStorage.getItem('dalog_session');
    if (savedSession) {
      try {
        setUser(JSON.parse(savedSession));
      } catch (error) {
        sessionStorage.removeItem('dalog_session');
      }
    }
    setIsHydrated(true);
  }, []);

  const login = useCallback((userData: UserUI) => {
    setUser(userData);
    sessionStorage.setItem('dalog_session', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem('dalog_session');
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user,               // Usamos 'user'
      isAuthenticated: !!user, // Helper booleano
      login, 
      logout, 
      isHydrated 
    }}>
      {children}
    </AuthContext.Provider>
  );
};