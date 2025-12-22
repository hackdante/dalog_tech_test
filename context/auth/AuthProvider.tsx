"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { UserUI } from "@/interfaces/auth/UserUI";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserUI | null>(() => {
    if (typeof window !== "undefined") {
      const savedSession = sessionStorage.getItem("dalog_session");
      if (savedSession) {
        try {
          return JSON.parse(savedSession);
        } catch {
          sessionStorage.removeItem("dalog_session");
          return null;
        }
      }
    }
    return null;
  });

  const login = useCallback((userData: UserUI) => {
    setUser(userData);
    sessionStorage.setItem("dalog_session", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem("dalog_session");
  }, []);

  useEffect(() => {
    if (user?.theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(user.theme);
    }
  }, [user?.theme]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;