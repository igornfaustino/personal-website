import { AnchorHTMLAttributes } from "react";

export default function ExternalLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      target="_blank"
      {...props}
      className={`b-color-theme-primary cursor-pointer transition-all hover:scale-105 hover:border-b hover:border-theme-primary hover:text-theme-primary ${props.className}`}
    >
      {props.children}
    </a>
  );
}
