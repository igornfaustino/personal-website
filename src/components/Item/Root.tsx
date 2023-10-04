"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
  path?: string;
  externalLink?: string;
}

export default function Root({ children, path, externalLink }: RootProps) {
  const openLink = () => {
    window.open(externalLink, "_blank");
  };

  if (path)
    return (
      <div className="cursor-pointer rounded-md py-3 transition-all hover:scale-[1.03]">
        <Link href={path}>{children}</Link>
      </div>
    );
  if (externalLink)
    return (
      <div
        role="link"
        onClick={openLink}
        className="group cursor-pointer rounded-md py-3 transition-all hover:scale-[1.03]"
      >
        {children}
        <div className="mt-2 text-xs font-bold group-hover:text-theme-primary group-hover:underline">
          External Link →
        </div>
      </div>
    );
  return <div className="py-3">{children}</div>;
}
