import type { Meta, StoryObj } from "@storybook/react";

import { AlbumBannar } from "./AlbumBannar";
import { mockAlbumSimplified } from "@/mock/schema";

const meta: Meta<typeof AlbumBannar> = {
  component: AlbumBannar,
};

export const Base: StoryObj<typeof AlbumBannar> = {
  args: {
    album: mockAlbumSimplified,
  },
};

export default meta;
