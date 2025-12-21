"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ButtonDefault,
  CardDefault,
  InputDefault,
  LogoCompany,
} from "@/components/base";
import { authService } from "@/services";
import { useAuth, useUI } from "@/hooks"; // Importamos useUI

export function LoginAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const { notify } = useUI(); // <--- Hook global de notificaciones
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const userData = await authService(email, password);
      login(userData);
      
      notify("Welcome to DALOG Manager", "success");
      
      router.push("/dashboard");
    } catch (err: any) {
      notify(err.message || "Authentication failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
      <CardDefault className="w-full max-w-md shadow-2xl">
        {/* Centrado del Logo */}
        <div className="flex flex-col items-center mb-8">
          <LogoCompany description={"Monitoring experts"} theme={"theme/light"} />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <InputDefault
            label="Email Institucional"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@dalog.com"
          />
          <InputDefault
            label="Contraseña"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonDefault type="submit" isLoading={isLoading} className="w-full">
            {isLoading ? "Authenticating..." : "Log in"}
          </ButtonDefault>
        </form>

        <p className="mt-6 text-[10px] text-center text-gray-400 uppercase font-bold tracking-widest">
          Use any technician email and the DALOG key.
        </p>
      </CardDefault>
    </main>
  );
}