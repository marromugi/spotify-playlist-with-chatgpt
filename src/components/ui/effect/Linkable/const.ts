import clsx from "clsx";
import { LinkableProps } from "./type";

const HOVER_EFFECT_BASE = "tw-p-3 tw-rounded tw-transition-all";

export const CLICKABLE_HOVER_EFFECT = {
  "bg-gray": clsx("hover:tw-bg-sumi-800", HOVER_EFFECT_BASE),
};
