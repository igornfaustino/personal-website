'use client'

type Props = {
  html: string
  className?: string
}

export default function HtmlText({ html, className }: Props) {
  return (
    <div
      className={`prose max-w-none dark:prose-invert ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
