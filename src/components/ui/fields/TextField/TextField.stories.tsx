import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import { IconButton } from "@/components/ui";
import { CreditCardIcon } from "@heroicons/react/20/solid";

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    placeholder: "プレースホルダー",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  render: (args) => <TextField {...args} />,
};

export const Base: StoryObj<typeof TextField> = {};

export const Alert: StoryObj<typeof TextField> = {
  args: {
    ...meta.args,
    alert: true,
  },
};

export const EndIcon: StoryObj<typeof TextField> = {
  args: {
    ...meta.args,
    endIcon: <IconButton icon={CreditCardIcon} />,
  },
};

export default meta;
