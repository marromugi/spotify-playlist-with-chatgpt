import Link from "next/link";
import { LinkableProps } from "./type";

export const Linkable = ({
  href,
  children,
  external = false,
}: LinkableProps) => {
  if (external) {
    return <a href={href}>{children}</a>;
  } else {
    return <Link href={href}>{children}</Link>;
  }
};
