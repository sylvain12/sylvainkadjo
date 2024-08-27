"use client";

import Link from "next/link";
import Button from "../ui/buttons";
import { Input } from "../ui/forms";

export default function NewsletterComponent() {
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
          value=""
          onChange={(e) => console.log(e.target.value)}
          placeholder="Type your email..."
        />
        <Button
          label="Subscribe"
          variant="second"
          type="button"
          onClick={() => console.log("You clicled me!")}
        />
      </div>
    </div>
  );
}
