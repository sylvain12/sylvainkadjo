"use client";

import { navMenuItems } from "@/lib/shared/constant";
import { INavigationLinkItem } from "@/lib/shared/interfaces";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavMenuItemComponent from "./nav-menu-item";

export default function NavMenuComponent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar__menu" aria-label="Primary navigation">
      <button
        className="navbar__menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} width={22} />
      </button>

      <div
        id="primary-navigation"
        className={clsx("navbar__menu-list", { "is-open": isOpen })}
      >
        {navMenuItems &&
          navMenuItems.map(({ name, url }: INavigationLinkItem) => (
            <NavMenuItemComponent key={name} name={name} url={url} />
          ))}
      </div>
    </nav>
  );
}
