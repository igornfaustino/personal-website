import { Code } from '@/components/CodeBlock'
import ExternalLink from '@/components/ExternalLink'
import Title from '@/components/Item/Title'
import SubTitle from '@/components/SubTitle'
import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}

export const markdownBaseComponents = {
  a: ({ children }: ComponentProps) => (
    <ExternalLink className="border-b">{children}</ExternalLink>
  ),
  h1: Title,
  h2: SubTitle,
  code: Code,
}
