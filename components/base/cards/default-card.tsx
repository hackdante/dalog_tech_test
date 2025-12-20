import { ReactNode } from 'react';

export const CardDefault = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};