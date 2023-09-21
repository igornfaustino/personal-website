'use client'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function Code({ className, ...props }: SyntaxHighlighterProps) {
  const match = /language-(\w+)/.exec(className || '')
  console.log(match)
  return match ? (
    <SyntaxHighlighter
      style={atomDark}
      language={match[1]}
      PreTag="div"
      showLineNumbers
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  )
}
