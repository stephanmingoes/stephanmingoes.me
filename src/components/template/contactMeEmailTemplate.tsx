import React from "react";

export default function ContactMeEmailTemplate({ name }: { name: string }) {
  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
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
    </div>
  );
}
