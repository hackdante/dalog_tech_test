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
    <div className="group relative overflow-hidden min-h-132px rounded-3xl p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-300">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <SpinnerDefault size="sm" />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-semibold text-zinc-800 uppercase tracking-[0.2em]">
              {label}
            </p>

            <div className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
              <span className="w-5 h-5 flex items-center justify-center">
                {icon}
              </span>
            </div>
          </div>

          <p className="text-4xl md:text-2xl font-extrabold leading-none text-zinc-900 dark:text-white">
            {value}
          </p>
        </div>
      )}
    </div>
  );
};
