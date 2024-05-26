import { z } from "zod";
import message from "@/utils/messages/message.json";

export const RegisterFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: message.Auth_E0001 }),
    password: z.string().describe("Password").min(1, message.Auth_E0003),
    confirmPassword: z
      .string()
      .describe("ConfirmPassword")
      .min(1, message.Auth_E0004),
  })
  .superRefine(({ email, password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "パスワードが一致しません",
      });
    }
  });

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: message.Auth_E0001 }),
  password: z.string().describe("Password").min(1, message.Auth_E0003),
});
