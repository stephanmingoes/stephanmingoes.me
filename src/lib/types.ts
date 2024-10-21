import { z } from "zod";
export type ContactFormType = z.infer<typeof ContactFormSchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  companyName: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});
