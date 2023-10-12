import { LinkButton } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  render: LinkButton,
  args: {
    children: "ログイン画面へ",
    href: ".",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Primary: StoryObj<typeof LinkButton> = {};

export default meta;
