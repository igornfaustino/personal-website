import { ReactNode } from 'react'

export default function Title({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h1
      className={`mb-4 max-w-fit rounded-sm bg-theme-grey px-3 py-2 text-xl font-semibold uppercase text-slate-100 dark:bg-slate-100 dark:text-theme-grey sm:text-2xl md:text-3xl lg:text-4xl ${className}`}
    >
      {children}
    </h1>
  )
}
