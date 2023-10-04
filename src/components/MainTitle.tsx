import { ReactNode } from "react";

export default function MainTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="max-w-fit rounded-sm bg-theme-grey p-3 text-5xl text-xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey sm:text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h1>
  );
}
