import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ProjectsHeaderComponent() {
  return (
    <div className="projects__header">
      <div>
        <span className="projects__header-eyebrow">Selected work</span>
        <h1 className="projects__header-title">Latest Projects</h1>
        <p className="projects__header-text">
          Product experiments, data tools, packages, and interfaces shaped with
          practical engineering and careful visual craft.
        </p>
      </div>

      <Link
        href="https://github.com/sylvain12"
        target="_blank"
        rel="noreferrer"
        className="projects__header-link"
        aria-label="View more projects on GitHub"
      >
        More projects <Icon icon="basil:arrow-right-outline" width={28} />
      </Link>
    </div>
  );
}
