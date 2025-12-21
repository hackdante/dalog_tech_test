'use client';

import React from 'react';
import { DashboardSearch, ReportList } from "@/components/composite";
import { Activity, ShieldCheck, Zap } from "lucide-react";
import { ReportProvider } from '@/context';

export default function DashboardPage() {
  const stats = [
    { id: 1, label: "System Health", value: "98.2%", icon: <Activity size={20} className="text-emerald-500" /> },
    { id: 2, label: "Active Assets", value: "1,240", icon: <Zap size={20} className="text-amber-500" /> },
    { id: 3, label: "Security Status", value: "Secure", icon: <ShieldCheck size={20} className="text-blue-500" /> },
  ];

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

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="group relative overflow-hidden h-32 rounded-3xl p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.15em]">{stat.label}</p>
                <p className="text-2xl font-black text-zinc-900 dark:text-white">{stat.value}</p>
              </div>
              <div className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
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