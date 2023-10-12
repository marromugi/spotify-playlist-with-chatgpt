import { ComponentProps, ForwardedRef } from "react";

export type ButtonProps = Omit<ComponentProps<"button">, "ref"> & {
  ref?: ForwardedRef<HTMLButtonElement>;
};
