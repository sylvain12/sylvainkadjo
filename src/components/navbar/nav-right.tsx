"use client";

import Button from "@/components/ui/buttons";
import { Icon } from "@iconify/react";

export default function NavRightComponent() {
  return (
    <div className="navbar__right">
      <Button
        label="Subscribe"
        variant="second"
        type="button"
        onClick={() => console.log("You clicked me!")}
      />

      <div className="navbar__right-search">
        <Icon icon="circum:search" width={24} />
      </div>
    </div>
  );
}
