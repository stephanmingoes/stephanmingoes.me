import { ContactFormSchema } from "@/lib/types";
import { publicProcedure, router } from "./trpc";
import { resend } from "./resend";
import ContactMeEmailTemplate from "@/components/template/contactMeEmailTemplate";

export const appRouter = router({
  contactMe: publicProcedure
    .input(ContactFormSchema)
    .mutation(async ({ input }) => {
      await resend.emails.send({
        from: "Stephan <stephan@stephanmingoes.me>",
        to: [input.email],
        subject: `Thanks for reaching out`,
        react: ContactMeEmailTemplate({ name: input.name }),
      });
      await resend.emails.send({
        from: "Stephan <stephan@stephanmingoes.me>",
        to: ["stephanmingoes@gmail.com"],
        subject: `Contact From ${input.email}`,
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        </div>
      `,
      });
    }),
});

export type AppRouter = typeof appRouter;
