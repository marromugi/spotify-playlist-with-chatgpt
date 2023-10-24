import type { FieldValues } from "react-hook-form";
import type { FormFieldErrorProps } from "./type";
import clsx from "clsx";

export const FormFieldError = <T extends FieldValues>({
  name,
  errors,
}: FormFieldErrorProps<T>) => {
  return (
    <>
      {errors && errors[name] && (
        <p className={clsx("tw-text-sm", "tw-text-sun-500")}>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};
