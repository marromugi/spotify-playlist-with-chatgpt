import { FieldErrors, FieldValues } from "react-hook-form";

export type FormFieldErrorProps<T extends FieldValues> = {
  name: keyof T;
  errors?: FieldErrors<T>;
};
