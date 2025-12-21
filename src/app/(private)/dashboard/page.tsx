"use client";
import {
  DashboardSearch,
  ReportList,
  StatsCardsGrid,
} from "@/components/composite";
import { ReportProvider } from "@/context";
import { useDashboardCardStats } from "@/hooks";

export default function DashboardPage() {
  const { stats } = useDashboardCardStats();

  return (
    <ReportProvider>
      <div className="space-y-8 max-w-7xl mx-auto animate-in fade-in duration-700">
        <header className="flex flex-col gap-1">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Operational Overview
          </h2>
          <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Predictive Maintenance & Asset Diagnostics
          </p>
        </header>

        <StatsCardsGrid data={stats} />

        <div className="w-full">
          <DashboardSearch />
        </div>
        <section className="relative min-h-400px">
          <ReportList />
        </section>
      </div>
    </ReportProvider>
  );
}
