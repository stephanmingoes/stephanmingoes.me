import { ContactFormSchema } from "@/lib/types";
import { publicProcedure, router } from "./trpc";
import { transporter } from "./nodemailer";

export const appRouter = router({
  contactMe: publicProcedure
    .input(ContactFormSchema)
    .mutation(async ({ input }) => {
      await transporter.sendMail({
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
