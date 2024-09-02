"use client";

import Link from "next/link";
import Button from "../ui/buttons";
import { Input } from "../ui/forms";
import { useSubscriberStore } from "./store";
import { validateEmail } from "@/lib/utils/utils";
import { useFormErrorStore } from "@/lib/store/error";
import { subscribeAction } from "./action";
import { useServerAction } from "zsa-react";
import { toast, Toaster } from "sonner";
import { supabaseDuplicateValueCode } from "@/lib/shared/constant";

export default function NewsletterComponent() {
  const { subscriber, setSubscriber } = useSubscriberStore();
  const { hasError, errorMessage, setError, resetForm } = useFormErrorStore();
  const { isPending, execute } = useServerAction(subscribeAction);
  // const {} = useServerAction(sendEmailAction)

  const handleSubscribe = async () => {
    if (validateEmail(subscriber)) {
      const promise = () =>
        new Promise<{ message: string }>((resolve, reject) => {
          execute({ email: subscriber })
            .then(([data, error]) => {
              if (data?.error) {
                if (data?.error?.code! == supabaseDuplicateValueCode) {
                  resolve({
                    message:
                      "You're already subscribed! Thanks for your interest",
                  });
                } else {
                  reject("There was an error. Please try again.");
                }
              } else {
                resetForm();
                setSubscriber("");
                resolve({ message: `Thank you for subscribing!` });
              }
            })
            .catch(() => "There was an error. Please try again.");
        });

      toast.promise(promise, {
        loading: "Subscribing",
        success: (res) => {
          return res.message;
        },
        error: (err) => {
          setError("");
          return err;
        },
      });
    } else {
      setError("Please enter a valid email address.");
    }

    return () => {
      resetForm();
      setSubscriber("");
    };
  };

  return (
    <div className="newsletter">
      <Toaster position="bottom-center" richColors closeButton />
      <div>
        <p className="text-[2.1rem]">
          Subscribe to{" "}
          <Link
            href="/"
            className="uppercase font-semibold text-second underline"
          >
            sylvainkadjo.com
          </Link>
        </p>
        <span className="uppercase text-[1.2rem] font-thin">
          Sowftware / Data & AI{" "}
        </span>
      </div>

      <div className="newsletter__form">
        <Input
          value={subscriber}
          onChange={(e) => {
            resetForm();
            setSubscriber(e.target.value);
          }}
          placeholder="Type your email..."
          className="flex-1"
          hasError={hasError}
          errorMessage={errorMessage}
        />
        <Button
          label="Subscribe"
          variant="second"
          type="button"
          onClick={handleSubscribe}
          className={
            isPending ? "pointer-events-none opacity-5 cursor-wait" : ""
          }
        />
      </div>
    </div>
  );
}
