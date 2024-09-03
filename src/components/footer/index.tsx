import Link from "next/link";
import { socialsLinks } from "@/lib/shared/constant";
import { Icon } from "@iconify/react";
import { DateTime } from "luxon";

export default function FooterComponent() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; {DateTime.now().year} SYLVAINKADJO.COM
      </p>
      <div className="footer__socials">
        {socialsLinks &&
          socialsLinks.map((link) => (
            <Link
              className="footer__socials-item"
              key={link.label}
              target="_blank"
              href={link.link}
            >
              <Icon className="text-second" icon={link.icon} width={24} />
            </Link>
          ))}
      </div>
    </div>
  );
}
