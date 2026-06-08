import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavLogoComponent() {
  return (
    <div className="navbar__logo">
      <Link href="/">
        <Image
          src="sylvainkadjo-assets/sylvainkadjo_logo.png"
          alt="SYLVAINKADJO Logo"
          width={80}
          height={40}
          className="object-contain h-auto w-16"
        />
      </Link>
    </div>
  );
}
