'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserUI } from "@/interfaces";
import { AuthContextTypeUI } from './interface';



const AuthContext = createContext<AuthContextTypeUI | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserUI | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedSession = sessionStorage.getItem('dalog_session');
    if (savedSession) {
      try {
        setCurrentUser(JSON.parse(savedSession));
      } catch (error) {
        console.error("Error parsing session", error);
        sessionStorage.removeItem('dalog_session');
      }
    }
    setIsHydrated(true);
  }, []);

  const login = (user: UserUI) => {
    setCurrentUser(user);
    sessionStorage.setItem('dalog_session', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('dalog_session');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isHydrated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};