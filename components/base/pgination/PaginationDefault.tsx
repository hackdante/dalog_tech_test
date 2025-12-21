"use client";

import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationDefaultPropsUI } from "./interface";

export const PaginationDefault: FC<PaginationDefaultPropsUI> = ({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}) => {
  if (totalPages <= 1) return null;

  const btnClass =
    "flex items-center justify-center p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-800";

  return (
    <div className="flex items-center justify-center gap-4 py-6 animate-in fade-in slide-in-from-bottom-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className={btnClass}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          Page
        </span>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-black shadow-lg shadow-blue-500/20">
          {currentPage}
        </div>
        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
          of {totalPages}
        </span>
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className={btnClass}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
