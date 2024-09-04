import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavLogoComponent() {
  return (
    <div className="navbar__logo">
      <Link href="/">
        <Image
          src="sylvainkadjo-assets/logo_mobile.png"
          alt="SYLVAINKADJO Logo"
          width={40}
          height={40}
          style={{
            width: "120",
            height: "auto",
          }}
        />
      </Link>
    </div>
  );
}
