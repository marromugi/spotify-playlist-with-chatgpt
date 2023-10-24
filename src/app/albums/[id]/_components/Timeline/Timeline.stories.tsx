import type { Meta, StoryObj } from "@storybook/react";

import { Timeline } from "./Timeline";
import { mockAlbumFull, mockArtistFull } from "@/mock/schema";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
};

export const Base: StoryObj<typeof Timeline> = {
  args: {
    album: mockAlbumFull,
    artists: [mockArtistFull],
  },
};

export default meta;
