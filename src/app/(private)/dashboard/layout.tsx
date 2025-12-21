import { ReactNode } from "react";
import { Header, ProfileCard } from "@/components/composite";
import { FooterDefault, LogoCompany } from "@/components/base";
import { GuardAuth } from "@/components/composite";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <GuardAuth>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col transition-colors duration-500 selection:bg-blue-100 dark:selection:bg-blue-900">
        <Header
          title="DIAGNOSTIC SYSTEM"
          description="Predictive Maintenance"
          profile={<ProfileCard />}
          logo={
            <LogoCompany
              description={"Monitoring experts"}
              theme={"theme/light"}
            />
          }
        />

        <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-10">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </section>
        </main>

        <FooterDefault
          title="DALOG Diagnostic Systems"
          description="Predictive Maintenance Division &copy; 2025"
        />
      </div>
    </GuardAuth>
  );
}
