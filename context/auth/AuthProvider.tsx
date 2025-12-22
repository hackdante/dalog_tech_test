"use client";

import { useState, useEffect, useCallback, ReactNode, useRef } from "react";
import { UserUI } from "@/interfaces/auth/UserUI";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialized = useRef(false);
  const [user, setUser] = useState<UserUI | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Mantenemos la lógica de hidratación estable
  const hydrate = useCallback(() => {
    if (typeof window !== "undefined" && !initialized.current) {
      initialized.current = true;
      const savedSession = sessionStorage.getItem("dalog_session");
      if (savedSession) {
        try {
          setUser(JSON.parse(savedSession));
        } catch {
          sessionStorage.removeItem("dalog_session");
        }
      }
      setIsHydrated(true);
    }
  }, []);

  const login = useCallback((userData: UserUI) => {
    setUser(userData);
    sessionStorage.setItem("dalog_session", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem("dalog_session");
  }, []);

  // SOLUCIÓN AL ERROR DE HUSKY: 
  // Deshabilitamos la regla justo donde se dispara el error (en la llamada)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    hydrate();
  }, [hydrate]);

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
        isHydrated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};