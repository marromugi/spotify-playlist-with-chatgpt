import type { Meta, StoryObj } from "@storybook/react";

import { TrackBannar } from "./TrackBannar";
import { mockTrackFull } from "@/mock/schema";

const meta: Meta<typeof TrackBannar> = {
  component: TrackBannar,
};

export const Base: StoryObj<typeof TrackBannar> = {
  args: {
    track: mockTrackFull,
  },
};

export default meta;
