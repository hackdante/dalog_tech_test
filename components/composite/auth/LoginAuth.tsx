"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonDefault, CardDefault, InputDefault } from "@/components/base";
import { authService } from "@/services";
import { useAuth } from "@/hooks";

export function LoginAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userData = await authService(email, password);

      login(userData);

      console.log("Redirigiendo...");

      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
    }
  };

  return (
    <CardDefault className="w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        DALOG Manager
      </h1>

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

        {error && (
          <p className="text-red-500 text-sm font-medium animate-pulse">
            {error}
          </p>
        )}

        <ButtonDefault type="submit" isLoading={isLoading}>
          {isLoading ? "Autenticando..." : "Ingresar"}
        </ButtonDefault>
      </form>

      <p className="mt-4 text-xs text-center text-gray-400">
        Usa cualquier email de técnico y la clave DALOG
      </p>
    </CardDefault>
  );
}
