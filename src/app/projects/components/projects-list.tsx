"use client";

import { useEffect, useState } from "react";
import { IProject } from "../models/types";
import { useServerAction } from "zsa-react";
import { fetchProjectsProcedure } from "../actions";
import ProjectLoaderComponent from "./project-loader";
import ProjectsListItemComponent from "./projects-list-item";

export default function ProjectsListComponent() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { isPending, execute, data } = useServerAction(fetchProjectsProcedure, {
    onError: ({ err }) => {
      throw err;
    },
    onSuccess: ({ data }) => console.log(data),
    // onSuccess: ({ data }) => console.log(`${data.length} projects loaded!`),
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data] = await execute();
      console.log(data);
      setProjects(data! || []);
    };
    fetchData();
  }, [setProjects, execute]);

  return (
    <div className="projects__list">
      {isPending ? (
        <ProjectLoaderComponent />
      ) : (
        projects &&
        projects.map((project) => (
          <ProjectsListItemComponent key={project.id} project={project} />
        ))
      )}
    </div>
  );
}
