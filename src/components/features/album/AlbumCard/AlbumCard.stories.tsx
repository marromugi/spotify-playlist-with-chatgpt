import type { Meta, StoryObj } from "@storybook/react";

import { AlbumCard } from "./AlbumCard";
import { mockAlbumSimplified } from "@/mock/schema/album";

const meta: Meta<typeof AlbumCard> = {
  component: AlbumCard,
  render: (args) => (
    <div className={"tw-w-48"}>
      <AlbumCard {...args} />
    </div>
  ),
};

export const Base: StoryObj<typeof AlbumCard> = {
  args: {
    album: mockAlbumSimplified,
  },
};

export const LongText: StoryObj<typeof AlbumCard> = {
  args: {
    album: {
      ...mockAlbumSimplified,
      name: "長い名前".repeat(100),
      artists: [
        {
          ...mockAlbumSimplified.artists[0],
          name: "長い名前".repeat(100),
        },
      ],
    },
  },
};

export default meta;
