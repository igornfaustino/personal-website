import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="max-w-fit rounded-sm bg-theme-grey pb-1 pl-3 pr-3 pt-1 text-xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey">
      {children}
    </h3>
  );
}
