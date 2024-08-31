"use client";

import Button from "@/components/ui/buttons";
import { navSocialsLinks } from "@/lib/shared/constant";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NavRightComponent() {
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
        onClick={() => console.log("You clicked me!")}
      />

      {/* <div className="navbar__right-search">
        <Icon icon="circum:search" width={24} />
      </div> */}
    </div>
  );
}
