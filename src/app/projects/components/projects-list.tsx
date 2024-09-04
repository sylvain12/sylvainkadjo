"use client";

import { useEffect, useState } from "react";
import { useServerAction } from "zsa-react";
import { fetchProjectsProcedure } from "../actions";
import ProjectLoaderComponent from "./project-loader";
import ProjectsListItemComponent from "./projects-list-item";
import { useProjectStore } from "../store";

export default function ProjectsListComponent() {
  const { projects, setProjects } = useProjectStore();
  const { isPending, execute, data } = useServerAction(fetchProjectsProcedure, {
    onError: ({ err }) => {
      throw err;
    },
    onSuccess: ({ data }) => data && console.log(`${data.length} projects loaded!`),
    initialData: projects,
    persistDataWhilePending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data] = await execute();
      setProjects(data! || []);
    };
    fetchData();
  }, [setProjects, execute]);

  return (
    <div className="projects__list">
      {isPending && data?.length === 0 ? (
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
