import { LinkButtonProps } from "./type";
import { ButtonBase, Linkable } from "@/components/ui";

export const LinkButton = ({ children, ...props }: LinkButtonProps) => {
  return (
    <Linkable {...props}>
      <ButtonBase>{children}</ButtonBase>
    </Linkable>
  );
};
