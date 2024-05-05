import { z } from "zod";
import message from "@/utils/messages/message.json";

export const RegisterFormSchema = z.object({
  email: z.string().describe("Email").email({ message: message.Auth_E0001 }),
  password: z.string().describe("Password").min(1, message.Auth_E0003),
});

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: message.Auth_E0001 }),
  password: z.string().describe("Password").min(1, message.Auth_E0003),
});
