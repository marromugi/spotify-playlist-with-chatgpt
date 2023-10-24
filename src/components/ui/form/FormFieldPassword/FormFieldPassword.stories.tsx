import { Meta, StoryObj } from "@storybook/react";
import { FormFieldPassword } from ".";

import { useForm } from "@/libs/hook-form";
import { schema } from "@/mock/libs/hook-form";

const Dummy = () => {
  const { control, formState } = useForm({
    schema,
    defaultValues: {
      password: "p@ssw0rd",
    },
  });

  return (
    <FormFieldPassword
      control={control}
      name={"password"}
      label={"パスワード"}
      errors={formState.errors}
    />
  );
};

const meta: Meta<typeof FormFieldPassword> = {
  component: FormFieldPassword,
  render: () => <Dummy />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Base: StoryObj<typeof FormFieldPassword> = {};

export default meta;
