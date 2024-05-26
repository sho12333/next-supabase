import { z } from "zod";
import message from "@/utils/messages/message.json";

export const NoteFormSchema = z.object({
  title: z.string().describe("Title").min(1, { message: message.Note_E0001 }),
});
