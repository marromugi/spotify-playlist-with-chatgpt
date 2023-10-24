import clsx from "clsx";
import { IconButtonProps } from "./type";
import { Clickable } from "../..";

export const IconButton = ({
  icon: Icon,
  ...props
}: IconButtonProps) => {
  return (
    <Clickable {...props}>
      <span
        className={clsx(
          "tw-transition-all",
          "tw-w-8 tw-h-8",
          "tw-flex tw-items-center tw-justify-center",
          "tw-rounded",
          "hover:tw-bg-sumi-600",
          "disabled:tw-opacity-disabled",
        )}
        {...props}
      >
        <Icon className={clsx("tw-w-5 tw-h-5", "tw-text-sumi-50")} />
      </span>
    </Clickable>
  );
};
