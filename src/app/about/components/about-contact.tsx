import { socialsLinks } from "@/lib/shared/constant";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutContactComponent() {
  return (
    <div className="about__contacts">
      <p className="text-[1.8rem]">Let&lsquo;s stay in touch</p>
      <div className="about__contacts-socials">
        {socialsLinks.map((social) => (
          <Link target="_blank" key={social.label} href={social.link}>
            <Icon icon={social.icon} width={30} />
          </Link>
        ))}
      </div>

      <Link
        href="mailto:sylvainka12@gmail.com"
        className="about__contacts-email"
      >
        sylvainka12@gmail.com
      </Link>
    </div>
  );
}
