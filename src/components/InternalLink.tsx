import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function InternalLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string },
) {
  return (
    <Link
      {...props}
      className={`b-color-theme-primary cursor-pointer transition-all hover:scale-105 hover:border-theme-primary hover:text-theme-primary ${props.className}`}
    >
      {props.children}
    </Link>
  );
}
