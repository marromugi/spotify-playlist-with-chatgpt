import clsx from "clsx";
import { HoverProps } from "./type";
import { HOVER_EFFECTS, HOVER_SPACES } from "./const";

export const Hover = ({
  type,
  space,
  rounded = true,
  cursor = true,
  children,
}: HoverProps) => {
  return (
    <div
      className={clsx(
        HOVER_EFFECTS[type],
        space && HOVER_SPACES[space],
        rounded && "tw-rounded-lg",
        cursor && "tw-cursor-pointer",
      )}
    >
      {children}
    </div>
  );
};
