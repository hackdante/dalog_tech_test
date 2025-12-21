"use client";

import { JSX } from "react";

interface HeaderUI {
  title: string;
  description: string;
  profile: JSX.Element;
  logo: JSX.Element;
}

export const Header = ({
  title = "TITLE",
  description = "DESCRIPTION",
  profile,
  logo,
}: HeaderUI) => {
  return (
    <>
      <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 flex items-center justify-between sticky top-0 z-50 transition-colors">
        <div className="flex items-center gap-4">
          {logo}

          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
              {title}
            </span>
            <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-medium leading-none tracking-widest uppercase">
              {description}
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-3">{profile}</nav>
      </header>
    </>
  );
};
