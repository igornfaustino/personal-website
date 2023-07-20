import { AnchorHTMLAttributes } from 'react'

export default function ExternalLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      target="_blank"
      {...props}
      className={`cursor-pointer hover:border-b ${props.className} flex items-center gap-2`}
    >
      {props.children}
    </a>
  )
}
