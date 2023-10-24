import { Control, FieldValues } from "react-hook-form";
import { FormFieldWrapperProps } from "../base/FormFieldWrapper/type";

export type FormFieldTextProps<T extends FieldValues> = Pick<
  FormFieldWrapperProps<T>,
  "name" | "label" | "errors"
> & {
  control: Control<T>;
};
