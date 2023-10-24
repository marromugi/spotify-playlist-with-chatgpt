import { CakeIcon } from "@heroicons/react/24/solid"; // 型取得のためにimport
import { ComponentProps, ForwardedRef } from "react";

export type IconButtonProps = Omit<ComponentProps<"button">, "ref"> & {
  ref?: ForwardedRef<HTMLButtonElement>;
} & {
  icon: typeof CakeIcon;
};
