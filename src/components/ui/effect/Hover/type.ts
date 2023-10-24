import { HOVER_EFFECTS, HOVER_SPACES } from "./const";

export type HoverProps = {
  type: keyof typeof HOVER_EFFECTS;
  rounded?: boolean;
  space?: keyof typeof HOVER_SPACES;
  cursor?: boolean;
  children: React.ReactNode;
};
