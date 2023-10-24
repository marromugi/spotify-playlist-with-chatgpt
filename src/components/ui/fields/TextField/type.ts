export type TextFieldProps = Omit<
  JSX.IntrinsicElements["input"],
  "className"
> & {
  alert?: boolean;
  endIcon?: React.ReactNode;
};
