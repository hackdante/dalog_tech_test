import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

export const ButtonDefault = ({ children, isLoading, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 
      transition-colors disabled:bg-gray-400 flex justify-center items-center ${className}`}
    >
      {isLoading ? (
        <span className="animate-spin mr-2 border-2 border-white border-t-transparent rounded-full h-4 w-4" />
      ) : null}
      {children}
    </button>
  );
};