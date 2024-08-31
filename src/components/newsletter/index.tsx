"use client";

import Link from "next/link";
import Button from "../ui/buttons";
import { Input } from "../ui/forms";
import { useSubscriberStore } from "./store";
import { validateEmail } from "@/lib/utils/utils";
import { useFormErrorStore } from "@/lib/store/error";
import { subscribeAction } from "./action";
import { useServerAction } from "zsa-react";

export default function NewsletterComponent() {
  const { subscriber, setSubscriber } = useSubscriberStore();
  const { hasError, errorMessage, setError, resetForm } = useFormErrorStore();
  const { isPending, execute } = useServerAction(subscribeAction, {
    onError: ({ err }) => console.log(err),
    onSuccess: ({ data }) => console.log(data),
  });

  const handleSubscribe = async () => {
    if (validateEmail(subscriber)) {
      const [data, error] = await execute({ email: subscriber });
      if (error) {
        setError(error.message);
        return;
      }
      resetForm();
    } else {
      setError("Please enter a valid email address.");
    }

    return () => {
      resetForm();
    };
  };

  return (
    <div className="newsletter">
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
          className={isPending ? "pointer-events-none opacity-5" : ""}
        />
      </div>
    </div>
  );
}
