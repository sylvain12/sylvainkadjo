"use client";

import Button from "@/components/ui/buttons";
import { navSocialsLinks } from "@/lib/shared/constant";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSubscribevisibilitystore } from "../subscribe/store";

export default function NavRightComponent() {
  const { setVisibility } = useSubscribevisibilitystore();
  return (
    <div className="navbar__right">
      <div className="navbar__right-socials">
        {navSocialsLinks.map((social) => (
          <Link key={social.label} target="_blank" href={social.link}>
            <Icon icon={social.icon} width={24} />
          </Link>
        ))}
      </div>
      <Button
        label="Subscribe"
        variant="second"
        type="button"
        onClick={() => setVisibility(true)}
      />

      {/* <div className="navbar__right-search">
        <Icon icon="circum:search" width={24} />
      </div> */}
    </div>
  );
}
