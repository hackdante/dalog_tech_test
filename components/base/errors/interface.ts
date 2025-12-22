import { ReactNode } from "react";
export interface ErrorBoundaryUI {
  fallback?: ReactNode;
  children: ReactNode;
}

export interface ErrorBoundaryStateUI {
  hasError: boolean;
  errorMessage?: string;
}