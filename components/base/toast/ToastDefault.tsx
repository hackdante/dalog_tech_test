// components/base/toast/ToastDefault.tsx
"use client";

import { FC, useEffect } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { ToastProps, ToastType } from "./interface";

const iconMap: Record<ToastType, any> = {
  success: <CheckCircle className="text-emerald-500" size={18} />,
  error: <AlertCircle className="text-red-500" size={18} />,
  info: <Info className="text-blue-500" size={18} />,
  warning: <AlertCircle className="text-amber-500" size={18} />,
};

export const ToastDefault: FC<ToastProps> = ({
  message,
  type,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-100 animate-in slide-in-from-right-10 fade-in duration-300">
      <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-2xl rounded-2xl min-w-300">
        <div className="shrink-0">{iconMap[type]}</div>
        <p className="grow text-[11px] font-bold text-zinc-700 dark:text-zinc-200 uppercase tracking-tight">
          {message}
        </p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
        >
          <X size={14} className="text-zinc-400" />
        </button>
      </div>
    </div>
  );
};
