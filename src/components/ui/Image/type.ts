import { ComponentProps } from "react";

export type ImageProps = Pick<
  ComponentProps<"img">,
  "alt" | "className" | "children" | "src"
>;
