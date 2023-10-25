import { ComponentProps, ForwardedRef } from "react";

export type LinkButtonProps = Omit<
  ComponentProps<"a">,
  "ref" | "href"
> & {
  href: string;
  ref?: ForwardedRef<HTMLAnchorElement>;
};
