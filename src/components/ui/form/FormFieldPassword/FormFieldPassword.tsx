"use client";

import { FieldValues, useController } from "react-hook-form";
import type { FormFieldTextProps } from "./type";
import { FormFieldWrapper } from "..";
import { TextField } from "../..";
import { useToggle } from "@uidotdev/usehooks";
import {
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";
import { IconButton } from "../../button";
import { useRef } from "react";

export const FormFieldPassword = <T extends FieldValues>({
  name,
  label,
  errors,
  control,
}: FormFieldTextProps<T>) => {
  const { field } = useController({
    name,
    control,
  });
  const ref = useRef<HTMLInputElement>(null);
  const [on, toggle] = useToggle();

  const handleToggle = () => {
    toggle(!on);

    ref.current?.focus();
  };

  return (
    <FormFieldWrapper label={label} errors={errors} name={name}>
      <TextField
        {...field}
        type={on ? "text" : "password"}
        ref={ref}
        endIcon={
          <IconButton
            icon={on ? LockOpenIcon : LockClosedIcon}
            onClick={handleToggle}
          />
        }
      />
    </FormFieldWrapper>
  );
};
