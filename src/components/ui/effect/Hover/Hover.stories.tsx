import type { Meta, StoryObj } from "@storybook/react";

import { Hover } from "./Hover";
import { mockTrackFull } from "@/mock/schema";
import { AlbumBannar, AlbumCard } from "@/components/features/album";

const meta: Meta<typeof Hover> = {
  component: Hover,
  render: (args) => (
    <div className={"tw-w-48"}>
      <Hover {...args} />
    </div>
  ),
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["bg-gray", "opacity"],
      },
    },
    space: {
      control: {
        type: "select",
        options: ["sm", "md", undefined],
      },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const Background: StoryObj<typeof Hover> = {
  args: {
    type: "bg-gray",
    space: "sm",
    rounded: true,
    children: (
      <div className={"tw-w-40"}>
        <AlbumCard album={mockTrackFull.album} />
      </div>
    ),
  },
};

export const Opacity: StoryObj<typeof Hover> = {
  args: {
    type: "opacity",
    children: <AlbumBannar album={mockTrackFull.album} />,
  },
};

export default meta;
