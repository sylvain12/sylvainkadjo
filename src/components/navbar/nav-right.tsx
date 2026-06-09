"use client";

import { useDarkMode } from "@/lib/store/darkmode";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";

export default function NavRightComponent() {
  const { isDark, toggleDarkmode } = useDarkMode();

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
      <Link className="navbar__right-cta" href="mailto:hello@sylvainkadjo.com">
        Let&apos;s work
      </Link>
    </div>
  );
}
