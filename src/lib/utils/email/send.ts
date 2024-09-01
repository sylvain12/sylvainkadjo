import { Resend } from "resend";

export const sendEmail = async (email: string) => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Welcome to our Newsletter",
    html: "Test",
  });

  return { data, error };
};
