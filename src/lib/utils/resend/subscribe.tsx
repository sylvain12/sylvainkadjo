import { Resend } from "resend";
import { SubscribeUserEmail } from "./emails/subcriber-welcome";

export const sendEmail = async (email: string) => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  await resend.emails.send({
    from: "sylvainkadjo.com <newsletters-noreply@sylvainkadjo.com>",
    to: [email],
    subject: "Welcome to our Newsletter",
    react: <SubscribeUserEmail receverEmail={email} />,
  });

  // return { data, error };
};
