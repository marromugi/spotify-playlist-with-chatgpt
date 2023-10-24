"use client";

import clsx from "clsx";
import type { TextFieldProps } from "./type";
import { forwardRef } from "react";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ alert = false, endIcon = null, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "tw-flex tw-items-center",
          "tw-gap-2",
          "tw-transition-all",
          "tw-overflow-hidden",
          "tw-rounded-lg tw-border-2 tw-border-sumi-900",
          "tw-bg-sumi-1000 tw-text-sumi-50",
          "focus-within:tw-border-sumi-300",
          alert && "tw-border-sun-500",
        )}
      >
        <input
          className={clsx(
            "tw-flex-1",
            "tw-p-3",
            "tw-bg-transparent",
            "focus:tw-outline-none",
          )}
          ref={ref}
          {...props}
        />
        {endIcon && <div className={clsx("tw-pr-3")}>{endIcon}</div>}
      </div>
    );
  },
);

TextField.displayName = "TextField";
