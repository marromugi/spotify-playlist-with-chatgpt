import { ImageProps } from "./type";

export const Image = ({ alt, ...props }: ImageProps) => {
  return <img {...props} alt={alt} />;
};
