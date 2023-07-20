import { HtmlHTMLAttributes } from 'react'

export default function Keyboard(props: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <kbd
      {...props}
      className="rounded-lg border border-theme-primary bg-theme-primary px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-800 dark:bg-theme-primary dark:text-gray-100"
    />
  )
}
