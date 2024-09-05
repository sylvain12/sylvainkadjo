"use client";

import Button from "@/components/ui/buttons";
import { navSocialsLinks } from "@/lib/shared/constant";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSubscribevisibilitystore } from "../subscribe/store";
import { useDarkMode } from '@/lib/store/darkmode';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useFormErrorStore } from '@/lib/store/error';
import { useSubscriberStore } from '../newsletter/store';

export default function NavRightComponent() {
  const { setVisibility } = useSubscribevisibilitystore();
  const {isDark, toggleDarkmode} = useDarkMode()
  const { setSubscriber } = useSubscriberStore();
  const { resetForm } = useFormErrorStore();

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const handleVisibility = () => {
    resetForm();
    setSubscriber("");
    setVisibility(true);
  }

  return (
    <div className="navbar__right">
      {/* <div className="navbar__right-socials">
        {navSocialsLinks.map((social) => (
          <Link key={social.label} target="_blank" href={social.link}>
            <Icon icon={social.icon} width={24} />
          </Link>
        ))}
      </div> */}
      <button
        className={clsx("nav-darkmode", { dark: isDark })}
        onClick={toggleDarkmode}
      >
        <span>
          <Icon
            icon={`${isDark ? "line-md:moon-simple" : "line-md:sunny-outline"}`}
          />
        </span>
      </button>
      <Button
        label="Subscribe"
        variant="second"
        type="button"
        onClick={handleVisibility}
      />

      {/* <div className="navbar__right-search">
        <Icon icon="circum:search" width={24} />
      </div> */}
    </div>
  );
}
