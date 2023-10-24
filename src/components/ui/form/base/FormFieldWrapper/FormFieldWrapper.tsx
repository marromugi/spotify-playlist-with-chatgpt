import clsx from "clsx";
import type { FormFieldWrapperProps } from "./type";
import { FieldValues } from "react-hook-form";
import { FormFieldError } from "../FormFieldError";

export const FormFieldWrapper = <T extends FieldValues>({
  name,
  label,
  errors,
  children,
}: FormFieldWrapperProps<T>) => {
  return (
    <div className={clsx("tw-space-y-2", "tw-w-full")}>
      {label && (
        <p
          className={clsx(
            "tw-text-sumi-400",
            "tw-text-sm tw-font-semibold",
          )}
        >
          {label}
        </p>
      )}
      {children}
      <FormFieldError errors={errors} name={name} />
    </div>
  );
};
