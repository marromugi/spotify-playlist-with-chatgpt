import clsx from "clsx";
import { ButtonBaseProps } from "./type";
import { Center } from "@/components/ui";

export const ButtonBase = ({ children }: ButtonBaseProps) => {
  return (
    <span
      className={clsx(
        "tw-inline-block",
        "tw-bg-sumi-900 tw-text-white",
        "tw-font-bold tw-text-sm",
        "tw-p-4",
        "tw-rounded",
        "tw-transition-colors",
        "hover:tw-bg-sumi-800",
      )}
    >
      <Center>{children}</Center>
    </span>
  );
};
