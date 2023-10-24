import clsx from "clsx";
import { CardProps } from "./type";

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "tw-rounded-lg tw-bg-sumi-900",
        "tw-p-4",
        "tw-flex tw-flex-col tw-gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
