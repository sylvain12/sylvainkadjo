import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ProjectsHeaderComponent() {
  return (
    <div className="projects__header">
      <h1 className="projects__header-title">Latest Projects</h1>
      {/* <p className="projects__header-text">
        Here aresome of my personal and those I have worked on as part of my job
      </p> */}

      <Link
        href="https://github.com/sylvain12"
        target="_blank"
        className="projects__header-link"
      >
        More projects <Icon icon="basil:arrow-right-outline" width={28} />
      </Link>
    </div>
  );
}
