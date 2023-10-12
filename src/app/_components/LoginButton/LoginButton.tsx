import { LinkButton } from "@/components/ui";
import { generateAuthUrl } from "./util";

export const LoginButton = () => {
  return (
    <LinkButton href={generateAuthUrl()}>SPOTIFY LOGIN</LinkButton>
  );
};
