import { ContactFormSchema } from "@/lib/types";
import { publicProcedure, router } from "./trpc";
import { resend } from "./resend";

export const appRouter = router({
  contactMe: publicProcedure
    .input(ContactFormSchema)
    .mutation(async ({ input }) => {
      await resend.emails.send({
        from: "Stephan <stephan@stephanmingoes.me>",
        to: [input.email],
        subject: `Thanks for reaching out`,
        html: `    <div className="bg-white p-8 shadow-md rounded-lg">
      <p className=" mb-2">Hello {name},</p>
      <p className="text-muted-foreground mb-4">
        Thank you for getting in touch. I&apos;m excited to hear from you!
      </p>
      <p className="text-muted-foreground mb-4">
        Please feel free to reach out to me with again with any questions or
        inquiries you may have. I&apos;ll do my best to get back to you as soon
        as possible.
      </p>
      <p className="text-muted-foreground mb-4">Best regards,</p>
      <p className="text-muted-foreground">Stephan Mingoes</p>
    </div>`,
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
