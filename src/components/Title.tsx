import { ReactNode } from 'react'

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-4 max-w-fit rounded-sm bg-theme-grey px-3 py-2 text-4xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey">
      {children}
    </h1>
  )
}
