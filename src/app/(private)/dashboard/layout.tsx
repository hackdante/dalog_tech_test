import React from "react";
import { Header, ProfileCard } from "@/components/composite";
import { LogoCompany } from "@/components/base";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col transition-colors duration-500 selection:bg-blue-100 dark:selection:bg-blue-900">
      <Header
        title="DIGNOSTIC SYSTEM"
        description="Predictive Maintenance"
        profile={<ProfileCard />}
        logo={ <LogoCompany  description={'Monitoring experts'}theme={'theme/light'} />}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-10">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </section>
      </main>

      <footer className="py-6 px-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm text-[10px] text-zinc-400 text-center uppercase tracking-[0.2em] font-medium">
        DALOG Diagnostic Systems{" "}
        <span className="mx-2 text-zinc-300 dark:text-zinc-700">|</span>
        Predictive Maintenance Division &copy; 2025
      </footer>
    </div>
  );
}
