"use client";

import NewsletterComponent from "../newsletter";
import { Icon } from "@iconify/react";
import { useSubscribevisibilitystore } from "./store";
import clsx from "clsx";
import { socialsLinks } from "@/lib/shared/constant";
import Link from "next/link";
import Image from "next/image";
import { useFormErrorStore } from '@/lib/store/error';
import { useSubscriberStore } from '../newsletter/store';
import { toast, Toaster } from 'sonner';
import { usePathname } from 'next/navigation';

export default function SubscribeComponent() {
  const { isVisible, setVisibility } = useSubscribevisibilitystore();
  const { resetForm } = useFormErrorStore()
 const { setSubscriber } = useSubscriberStore();
  const pathname = usePathname()

  const handleClose = () => {
    resetForm();
    setSubscriber("")
    setVisibility(false);
  }

  return (
    <div
      className={clsx(`subscribe__container`, {
        visible: isVisible,
        hidden: !isVisible,
      })}
    >
      {!pathname.includes("about") && <Toaster position="bottom-center" richColors closeButton />}
      <span className="subscribe__close" onClick={handleClose}>
        <Icon icon="iconamoon:sign-times-thin" width={50} />
      </span>

      <div className="subscribe__header">
        <Image
          src="sylvainkadjo-assets/sylvainkadjo_logo.png"
          width={45}
          height={45}
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
