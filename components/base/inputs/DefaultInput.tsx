'use client';

import { InputHTMLAttributes, ReactNode } from 'react';

interface InputDefaultUI extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
}

export const InputDefault = ({ 
  label, 
  icon, 
  error, 
  className = '', 
  ...props 
}: InputDefaultUI) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 ml-1 uppercase tracking-wider">
          {label}
        </label>
      )}
      
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-600 transition-colors duration-300">
            {icon}
          </div>
        )}
        
        <input
          {...props}
          className={`
            w-full bg-zinc-100 dark:bg-zinc-800/50 border-2 border-transparent
            rounded-2xl py-3 ${icon ? 'pl-12' : 'px-6'} pr-6 text-sm
            text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400
            focus:outline-none focus:bg-white dark:focus:bg-zinc-900 
            focus:border-blue-600/30 focus:ring-4 focus:ring-blue-600/5
            transition-all duration-300 shadow-sm
            ${error ? 'border-red-500/50 bg-red-50 dark:bg-red-900/10' : ''}
            ${className}
          `}
        />
      </div>

      {error && (
        <span className="text-[10px] font-bold text-red-500 ml-1 uppercase tracking-tight">
          {error}
        </span>
      )}
    </div>
  );
};