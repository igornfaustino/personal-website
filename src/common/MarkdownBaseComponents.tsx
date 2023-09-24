import { Code } from '@/components/CodeBlock'
import Title from '@/components/Item/Title'
import SubTitle from '@/components/SubTitle'
import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}

export const markdownBaseComponents = {
  h1: Title,
  h2: SubTitle,
  code: Code,
}
