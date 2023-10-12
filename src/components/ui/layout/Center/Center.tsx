import clsx from "clsx";
import { CenterProps } from "./type";

export const Center = ({ children }: CenterProps) => {
  return (
    <span
      className={clsx(
        "tw-block",
        "tw-w-full tw-h-full",
        "tw-flex tw-items-center tw-justify-center",
      )}
    >
      {children}
    </span>
  );
};
