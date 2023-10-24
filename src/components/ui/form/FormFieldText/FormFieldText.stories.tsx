import { Meta, StoryObj } from "@storybook/react";
import { FormFieldText } from ".";

import { schema } from "@/mock/libs/hook-form";
import { useForm } from "@/libs/hook-form";

const Dummy = () => {
  const { control, formState } = useForm({
    schema,
    defaultValues: {
      email: "1234567890123",
    },
  });

  return (
    <FormFieldText
      control={control}
      name={"email"}
      label={"メールアドレス"}
      errors={formState.errors}
    />
  );
};

const meta: Meta<typeof FormFieldText> = {
  component: FormFieldText,
  render: () => <Dummy />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Base: StoryObj<typeof FormFieldText> = {};

export default meta;
