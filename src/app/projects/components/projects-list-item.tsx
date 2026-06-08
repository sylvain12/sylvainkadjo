import Link from "next/link";
import { IProject } from "../models/types";
import { Icon } from "@iconify/react";
import Image from "next/image";

export type ProjectListItemProp = {
  project: IProject;
};

export default function ProjectsListItemComponent({
  project,
}: ProjectListItemProp) {
  const projectImage =
    project.imageUrl ||
    project.image_url ||
    project.image ||
    project.featureImageUrl ||
    project.feature_image_url;
  const categoryLabel = project.category || "Project";

  return (
    <div className="projects__list-item">
      <div
        className={`projects__list-item-content${
          projectImage ? " projects__list-item-content--with-image" : ""
        }`}
      >
        <span className="projects__list-item-category">{categoryLabel}</span>
        <h3 className="projects__list-item-name">{project.name}</h3>
        <p className="projects__list-item-description">
          {project.description}
        </p>
        <div className="projects__list-item-tags">
          {project.tags &&
            project.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
        </div>
      </div>
      <div className="projects__list-item-links">
        {project.repository && (
          <Link
            className="projects__list-item-link"
            target="_blank"
            rel="noreferrer"
            href={project.repository}
            aria-label={`Open ${project.name} repository`}
          >
            <Icon icon="uit:github-alt" width={22} />
          </Link>
        )}
        {project.website && (
          <Link
            className="projects__list-item-link"
            target="_blank"
            rel="noreferrer"
            href={project.website}
            aria-label={`Open ${project.name} website`}
          >
            <Icon icon="fluent:open-20-regular" width={22} />
          </Link>
        )}
      </div>
      {projectImage && (
        <div className="projects__list-item-image">
          <Image
            src={projectImage}
            alt={project.name}
            width={360}
            height={220}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 320px"
            className="projects__list-item-image-img"
          />
        </div>
      )}
    </div>
  );
}
