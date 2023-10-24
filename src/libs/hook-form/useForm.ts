import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  UseFormProps as UseBaseFormProps,
  useForm as useBaseForm,
} from "react-hook-form";
import { ZodObject, ZodRawShape, z } from "zod";

type UseFormProps<T extends ZodRawShape> = Omit<
  UseBaseFormProps<T>,
  "resolver" | "context" | "defaultValues"
> & {
  schema: ZodObject<T, "strip">;
  defaultValues?: DefaultValues<z.infer<ZodObject<T, "strip">>>;
  values?: z.infer<ZodObject<T, "strip">>;
};

/**
 * useForm wrapper
 * schemaを与えれば、ジェネリクスなしで型推論が効く
 */
export const useForm = <T extends ZodRawShape>({
  schema,
  ...props
}: UseFormProps<T>) => {
  return useBaseForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    ...props,
  });
};
