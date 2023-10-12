import { ComponentProps, forwardRef } from "react";

export const Linkable = forwardRef<
  HTMLAnchorElement,
  ComponentProps<"a">
>((props, ref) => {
  return (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  );
});
