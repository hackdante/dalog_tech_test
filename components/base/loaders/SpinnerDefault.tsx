"use client";

import { FC } from "react";
import { SpinnerDefaultPropsUI } from "./interface";

export const SpinnerDefault: FC<SpinnerDefaultPropsUI> = ({
  label = "System Initializing",
  fullscreen = false,
}) => {
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
        <div className="w-14 h-14 rounded-full border-[3px] border-zinc-100 dark:border-zinc-800" />
        <div className="absolute w-14 h-14 rounded-full border-[3px] border-blue-600 border-t-transparent animate-spin" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-bold text-zinc-400 tracking-[0.3em] uppercase">
          {label}
        </span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
