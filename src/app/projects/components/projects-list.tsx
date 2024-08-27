"use client";

import { useEffect, useState } from "react";
import { IProject } from "../models/types";
import { useServerAction } from "zsa-react";
import { fetchProjects } from "../actions";
import ProjectLoaderComponent from "./project-loader";
import ProjectsListItemComponent from "./projects-list-item";

export default function ProjectsListComponent() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { isPending, execute, data } = useServerAction(fetchProjects, {
    onError: ({ err }) => console.log(err),
    onSuccess: () => console.log("Success!"),
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;
      console.log(data);
      setProjects(data);
    };
    fetchData();
  }, []);

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
