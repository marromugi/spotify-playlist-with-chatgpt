import { z } from "zod";

// react-hook-form モック用のスキーマ
export const schema = z.object({
  email: z
    .string()
    .min(3, { message: "最小文字数は3文字です" })
    .max(10, { message: "最長文字数は10文字です" }),
  password: z.string(),
});
