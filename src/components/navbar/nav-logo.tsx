import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavLogoComponent() {
  return (
    <div className="navbar__logo">
      <Link href="/">
        <Image
          src="sylvainkadjo.svg"
          alt="SYLVAINKADJO Logo"
          width={150}
          height={150}
          style={{
            width: "120",
            height: "auto",
          }}
        />
      </Link>
    </div>
  );
}
