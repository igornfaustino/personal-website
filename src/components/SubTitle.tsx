import { ReactNode } from 'react'

export default function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 max-w-fit rounded-sm bg-theme-grey px-3 py-1 text-xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey">
      {children}
    </h2>
  )
}
