"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { UIProvider, ReportProvider } from "@/context";

const AuthProvider = dynamic(() => import("@/context/auth/AuthProvider"), {
  ssr: false,
});

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <UIProvider>
      <AuthProvider>
        <ReportProvider>{children}</ReportProvider>
      </AuthProvider>
    </UIProvider>
  );
};