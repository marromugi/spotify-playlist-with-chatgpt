import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { CakeIcon } from "@heroicons/react/24/solid";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    icon: CakeIcon,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: (args) => <IconButton {...args} />,
};

export const Base: StoryObj<typeof IconButton> = {};

export const Alert: StoryObj<typeof IconButton> = {
  args: {
    ...meta.args,
  },
};

export default meta;
