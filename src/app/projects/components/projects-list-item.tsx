import Link from "next/link";
import { IProject } from "../models/types";
import { Icon } from "@iconify/react";

export type ProjectListItemProp = {
  project: IProject;
};

export default function ProjectsListItemComponent({
  project,
}: ProjectListItemProp) {
  return (
    <div className="projects__list-item">
      <span className="projects__list-item-category">{project.category}</span>
      <h3 className="projects__list-item-name">{project.name}</h3>
      <p className="projects__list-item-description">{project.description}</p>
      <div className="projects__list-item-links">
        {project.repository && (
          <Link
            className="cursor-pointer"
            target="_blank"
            href={project.repository!}
          >
            <Icon className="cursor-pointer" icon="uit:github-alt" width={30} />
          </Link>
        )}
        {project.website && (
          <Link
            className="cursor-pointer"
            target="_blank"
            href={project.website!}
          >
            <Icon
              className="cursor-pointer"
              icon="fluent:open-20-regular"
              width={30}
            />
          </Link>
        )}
      </div>
      <div className="projects__list-item-tags">
        {project.tags &&
          project.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
      </div>
    </div>
  );
}
