import { ComponentProps, ForwardedRef } from "react";

export type LinkButtonProps = Omit<ComponentProps<"a">, "ref"> & {
  ref?: ForwardedRef<HTMLAnchorElement>;
};
