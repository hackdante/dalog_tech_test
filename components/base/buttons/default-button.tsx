'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

// Aplicando Convención #6: PascalCase + UI suffix
interface ButtonDefaultUI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const ButtonDefault = ({ 
  children, 
  isLoading, 
  variant = 'primary',
  className = '', 
  ...props 
}: ButtonDefaultUI) => {
  const baseStyles = "relative px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700",
    secondary: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
  };

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >

      <span className={`flex items-center gap-2 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 animate-spin border-[3px] border-current border-t-transparent rounded-full" />
        </div>
      )}
    </button>
  );
};