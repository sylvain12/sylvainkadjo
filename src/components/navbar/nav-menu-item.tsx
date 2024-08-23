"use client";

import { INavigationLinkItem } from "@/lib/shared/interfaces";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NavMenuItemComponent({
  name,
  url,
}: INavigationLinkItem) {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={clsx("navbar__menu-item", { active: pathname === url })}
    >
      {name}
    </Link>
  );
}
