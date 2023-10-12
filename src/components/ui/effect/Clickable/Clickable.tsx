import { forwardRef } from "react";
import { ClickableProps } from "./type";

export const Clickable = forwardRef<HTMLButtonElement, ClickableProps>(
  (props, ref) => {
    return (
      <button ref={ref} {...props}>
        {props.children}
      </button>
    );
  },
);
