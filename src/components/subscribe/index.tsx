"use client";

import NewsletterComponent from "../newsletter";
import { Icon } from "@iconify/react";
import { useSubscribevisibilitystore } from "./store";
import clsx from "clsx";
import { socialsLinks } from "@/lib/shared/constant";
import Link from "next/link";
import Image from "next/image";

export default function SubscribeComponent() {
  const { isVisible, setVisibility } = useSubscribevisibilitystore();
  return (
    <div
      className={clsx(`subscribe__container`, {
        visible: isVisible,
        hidden: !isVisible,
      })}
    >
      <span className="subscribe__close" onClick={() => setVisibility(false)}>
        <Icon icon="iconamoon:sign-times-thin" width={50} />
      </span>

      <div className="subscribe__header">
        <Image
          src="sylvainkadjo-assets/logo_mobile.png"
          width={60}
          height={60}
          alt="sylvainkadjo.com logo"
        />
      </div>
      <div className="subscribe__content">
        <NewsletterComponent />
      </div>

      <div className="subscribe__footer">
        {socialsLinks.map((social) => (
          <Link key={social.label} href={social.link} target="_blank">
            <Icon icon={social.icon} width={22} />
          </Link>
        ))}
      </div>
    </div>
  );
}
