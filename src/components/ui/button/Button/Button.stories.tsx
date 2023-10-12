import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  component: Button,
  render: Button,
  args: {
    children: "ログインする",
    onClick: action("click"),
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Primary: StoryObj<typeof Button> = {};

export default meta;
