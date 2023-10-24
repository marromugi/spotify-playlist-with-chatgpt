import { FieldErrors, FieldValues, Path } from "react-hook-form";

export type FormFieldWrapperProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  errors?: FieldErrors<T>;
  children: React.ReactNode;
};
