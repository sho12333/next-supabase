"use client";

import type { Route } from "next";
import type { LinkProps } from "next/link";
import NextLink from "next/link";

import { useViewTransitionRouter } from "@/lib/hooks/useViewTransitionRouter";

type NavigationLinkProps = LinkProps & {
  children?: React.ReactNode;
};

export function TransitionLink({
  children,
  href,
  ...props
}: NavigationLinkProps) {
  const router = useViewTransitionRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push(href.toString());
  };

  return (
    <NextLink {...props} href={href} onClick={handleLinkClick}>
      {children}
    </NextLink>
  );
}
