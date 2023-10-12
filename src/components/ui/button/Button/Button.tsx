import { ButtonProps } from "./type";
import { ButtonBase, Clickable } from "@/components/ui";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Clickable {...props}>
      <ButtonBase>{children}</ButtonBase>
    </Clickable>
  );
};
