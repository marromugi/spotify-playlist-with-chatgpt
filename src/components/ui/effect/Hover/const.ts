import clsx from "clsx";

const HOVER_EFFECT_BASE = "tw-transition-all";

export const HOVER_EFFECTS = {
  "bg-gray": clsx("hover:tw-bg-sumi-900", HOVER_EFFECT_BASE),
  opacity: clsx("hover:tw-opacity-80", HOVER_EFFECT_BASE),
} as const;

export const HOVER_SPACES = {
  sm: "tw-p-3",
  md: "tw-p-4",
} as const;
