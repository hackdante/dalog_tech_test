'use client';

import { FC } from "react";
import { SpinnerDefaultPropsUI } from "./interface";

export const SpinnerDefault: FC<SpinnerDefaultPropsUI> = ({
  label = "System Initializing",
  fullscreen = false,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 border-[2px]",
    md: "w-14 h-14 border-[3px]",
    lg: "w-20 h-20 border-[4px]",
  };

  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-4",
        fullscreen ? "fixed inset-0 bg-white/80 backdrop-blur-sm z-50" : "",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex items-center justify-center">
        <div className={`${sizeClasses[size]} rounded-full border-zinc-100 dark:border-zinc-800`} />
        <div className={`absolute ${sizeClasses[size]} rounded-full border-blue-600 border-t-transparent animate-spin`} />
      </div>

      {!fullscreen && size === "sm" ? null : (
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-zinc-400 tracking-[0.3em] uppercase">
            {label}
          </span>
          <div className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-blue-500/40 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-blue-500/40 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 rounded-full bg-blue-500/40 animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};