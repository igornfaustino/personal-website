import { ReactNode } from 'react'

export default function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-fit rounded-sm bg-theme-grey p-3 text-4xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey">
      {children}
    </h2>
  )
}
