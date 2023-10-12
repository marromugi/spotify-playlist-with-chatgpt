import { ButtonBase } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonBase> = {
  component: ButtonBase,
  render: ButtonBase,
  args: {
    children: "ログインする",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Primary: StoryObj<typeof ButtonBase> = {};

export default meta;
