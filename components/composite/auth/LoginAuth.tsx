'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ButtonDefault, CardDefault, InputDefault  } from '@/components/base';


export function LoginAuth() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (user === 'admin' && password === 'dalog2025') {
        router.push('/dashboard');
      } else {
        alert('Credenciales incorrectas (admin/dalog2025)');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <CardDefault className="w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">DALOG Manager</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <InputDefault 
          label="Usuario"
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <InputDefault 
          label="Contraseña"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonDefault type="submit" isLoading={isLoading}>
          Ingresar
        </ButtonDefault>
      </form>
    </CardDefault>
  );
}