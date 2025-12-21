'use client';

import { useEffect, useState } from "react";
import { SpinnerDefault } from "@/components/base";
import { StatCardPropsUI } from "./interface";

export const StatCard = ({ label, value, icon, delay = 0 }: StatCardPropsUI) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="group relative overflow-hidden h-28 rounded-3xl p-5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <SpinnerDefault size="sm" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center">
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{label}</p>
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              {icon}
            </div>
          </div>
          <p className="text-xl font-black text-zinc-900 dark:text-white">{value}</p>
        </div>
      )}
    </div>
  );
};