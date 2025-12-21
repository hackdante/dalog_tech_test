"use client";

import { useAuth } from "@/hooks";

export function ProfileCard() {
  const { currentUser } = useAuth();
  
  return (
    <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
      <div className="text-right hidden sm:block">
        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
          {currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : "Guest"}
        </p>
        <p className="text-[10px] text-zinc-500 capitalize leading-none">
          {currentUser?.role || "Operator"}
        </p>
      </div>

      <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden flex items-center justify-center">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
            {currentUser?.firstName?.charAt(0) || "G"}
          </span>
        )}
      </div>
    </div>
  );
}