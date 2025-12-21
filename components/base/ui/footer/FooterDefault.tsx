import { FooterDefaultUI } from "./interface";

export function FooterDefault({ title, description }: FooterDefaultUI) {
  return (
    <>
      <footer className="py-6 px-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm text-[10px] text-zinc-400 text-center uppercase tracking-[0.2em] font-medium">
        {title}
        <span className="mx-2 text-zinc-300 dark:text-zinc-700">|</span>
        {description}
      </footer>
    </>
  );
}
