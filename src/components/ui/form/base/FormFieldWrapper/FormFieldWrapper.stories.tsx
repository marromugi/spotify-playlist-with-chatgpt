import type { Meta, StoryObj } from "@storybook/react";
import { FormFieldWrapper } from "./FormFieldWrapper";

const Dummy = () => {
  return (
    <FormFieldWrapper label={"メールアドレス"} name="name">
      フィールドエリア
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
