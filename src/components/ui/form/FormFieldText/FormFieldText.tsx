"use client";

import { FieldValues, useController } from "react-hook-form";
import type { FormFieldTextProps } from "./type";
import { FormFieldWrapper } from "..";
import { TextField } from "../..";

export const FormFieldText = <T extends FieldValues>({
  name,
  label,
  errors,
  control,
}: FormFieldTextProps<T>) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <FormFieldWrapper label={label} errors={errors} name={name}>
      <TextField {...field} alert={!!errors && !!errors[name]} />
    </FormFieldWrapper>
  );
};
