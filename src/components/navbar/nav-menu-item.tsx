"use client";

import { INavigationLinkItem } from "@/lib/shared/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenuItemComponent({
  name,
  url,
}: INavigationLinkItem) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={clsx("navbar__menu-item", { active: isActive })}
      aria-current={isActive ? "page" : undefined}
    >
      {name}
    </Link>
  );
}
