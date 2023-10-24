import type { Meta, StoryObj } from "@storybook/react";
import { FormFieldWrapper } from "./FormFieldWrapper";
import { Box, TextField } from "@/components/ui";
import { z } from "zod";

const Dummy = () => {
  return (
    <FormFieldWrapper label={"メールアドレス"} name="name">
      <Box>フィールドエリア</Box>
    </FormFieldWrapper>
  );
};

const meta: Meta<typeof FormFieldWrapper> = {
  component: FormFieldWrapper,
  render: () => <Dummy />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Base: StoryObj<typeof FormFieldWrapper> = {};

export default meta;
