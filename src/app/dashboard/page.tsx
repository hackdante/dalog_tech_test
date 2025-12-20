'use client';

import { useAuth } from '@/context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { currentUser, isHydrated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si la hidratación terminó y no hay usuario, mandamos al Login
    if (isHydrated && !currentUser) {
      router.push('/');
    }
  }, [isHydrated, currentUser, router]);

  if (!isHydrated) return <div className="p-10 text-center">Cargando sistema...</div>;
  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Simple */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={currentUser.avatar} 
            alt={currentUser.firstName} 
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-bold text-gray-800 leading-none">
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <span className="text-xs text-blue-600 font-semibold uppercase">
              {currentUser.role}
            </span>
          </div>
        </div>
        
        <button 
          onClick={() => { logout(); router.push('/'); }}
          className="text-sm text-red-500 hover:underline font-medium"
        >
          Cerrar Sesión
        </button>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Panel de Control</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Has ingresado exitosamente. Ahora puedes gestionar los reportes técnicos.
          </p>
        </div>
      </main>
    </div>
  );
}