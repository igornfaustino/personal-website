import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <h4 className="font-semibold uppercase text-theme-primary">{children}</h4>
  )
}
