"use client";

import Image from "next/image"; 
import { useAuth, useUI } from "@/hooks"; 
import { LogOut } from "lucide-react";    

export function ProfileCard() {
  const { user, logout } = useAuth();     
  const { notify } = useUI();              

  const handleLogout = () => {
    logout();
    notify("System session closed", "info");
  };

  return (
    <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
      <div className="text-right hidden sm:block">
        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
          {user ? `${user.firstName} ${user.lastName}` : "Guest"}
        </p>
        <p className="text-[10px] text-zinc-500 capitalize leading-none">
          {user?.role || "Operator"}
        </p>
      </div>

      <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden flex items-center justify-center relative group">
        {user?.avatar ? (
      
          <Image
            src={user.avatar}
            alt="User profile"
            fill 
            className="object-cover"
            sizes="36px" 
            priority
          />
        ) : (
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
            {user?.firstName?.charAt(0) || "G"}
          </span>
        )}
      </div>

      {user && (
        <button
          onClick={handleLogout}
          className="p-2 ml-1 rounded-xl text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          title="Sign out"
        >
          <LogOut size={16} />
        </button>
      )}
    </div>
  );
}