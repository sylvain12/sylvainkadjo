"use client";

import Button from "@/components/ui/buttons";
import { useFormErrorStore } from "@/lib/store/error";
import { useDarkMode } from "@/lib/store/darkmode";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useEffect } from "react";
import { useSubscriberStore } from "../newsletter/store";
import { useSubscribevisibilitystore } from "../subscribe/store";

export default function NavRightComponent() {
  const { setVisibility } = useSubscribevisibilitystore();
  const { isDark, toggleDarkmode } = useDarkMode();
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
  };

  return (
    <div className="navbar__right">
      <button
        className={clsx("nav-darkmode", { dark: isDark })}
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
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
    </div>
  );
}
