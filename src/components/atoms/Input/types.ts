import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

export type InputVariants = "outline" | "default";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "prefix"> & {
  name: string;
  label: string;
  suffix?: React.ReactElement;
  hideLabel?: boolean;
  prefix?: React.ReactElement;
  errorText?: string;
  variant?: InputVariants;
  containerProps?: ComponentPropsWithoutRef<"label">;
  helperText?: string;
  filled?: boolean;
};
