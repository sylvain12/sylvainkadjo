"use client";

import Link from "next/link";
import Button from "../ui/buttons";
import { Input } from "../ui/forms";
import { toast, Toaster } from "sonner";
import { validateEmail } from "@/lib/utils/utils";
import { useEffect } from 'react';
import { supabaseDuplicateValueCode } from "@/lib/shared/constant";
import { useServerAction } from "zsa-react";
import { useSubscriberStore } from "@/components/newsletter/store";
import { useFormErrorStore } from "@/lib/store/error";
import { subscribeAction } from "@/components/newsletter/action";
import { useSubscribevisibilitystore } from '../subscribe/store';


export default function NewsletterComponent() {
  const { subscriber, setSubscriber } = useSubscriberStore();
  const { hasError, errorMessage, setError, resetForm } = useFormErrorStore();
  const { isPending, execute } = useServerAction(subscribeAction);
  const { isVisible, setVisibility } = useSubscribevisibilitystore();
  


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
                      "Already subscribed! thanks for your interest",
                  });
                } else {
                  reject("There was an error. Please try again.");
                }
              } else {
                resolve({ message: `Thank you for subscribing!` });
              }
            })
            .catch(() => "There was an error. Please try again.");
        });

      toast.promise(promise, {
        loading: "Subscribing...",
        success: (res) => {
          resetForm();
          setSubscriber("");
          return res.message;
        },
        error: (err) => {
          return err;
        },
      });
    } else {
      setError("Please enter a valid email address.");
    }
  };

  useEffect(() => {

    return () => {
      resetForm();
      setSubscriber("");
    }
  }, [setSubscriber, resetForm])

  return (
    <div className="newsletter">
      <div>
        <p className="text-[2.1rem]">
          Subscribe to{" "}
          <Link
            href="/"
            onClick={() => isVisible && setVisibility(false)}
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
          onKeyUp={(e) => e.key === "Enter" && handleSubscribe()}
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
