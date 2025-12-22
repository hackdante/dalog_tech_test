"use client";

import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

interface ErrorStaticViewProps {
  message?: string;
  resetError?: () => void;
}

export const BuggyError = ({
  message,
  resetError,
}: ErrorStaticViewProps) => {
  return (
    <div className="flex min-h-400px w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-8 animate-in fade-in zoom-in duration-300">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
        <AlertTriangle className="h-10 w-10 text-red-600" />
      </div>

      <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
        System Interruption
      </h2>
      <p className="mt-2 max-w-400px text-center text-sm font-medium text-zinc-500">
        We encountered an unexpected issue while processing diagnostic data. The
        incident has been logged for technical review.
      </p>

      {message && (
        <code className="mt-4 rounded bg-zinc-200 px-2 py-1 text-[10px] font-mono text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          Error ID: {message}
        </code>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={resetError || (() => window.location.reload())}
          className="flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-50 dark:text-zinc-900"
        >
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </button>

        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-2.5 text-sm font-bold text-zinc-600 transition-all hover:bg-zinc-50 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};
