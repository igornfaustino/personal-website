'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="flex w-full justify-end gap-2">
      <Link
        href="/"
        className={pathname == '/' ? 'text-theme-primary' : undefined}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathname == '/about' ? 'text-theme-primary' : undefined}
      >
        About
      </Link>
    </div>
  )
}
