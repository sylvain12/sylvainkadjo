import { Metadata } from "next";
import ProjectsHeaderComponent from "./components/projects-header";
import ProjectsListComponent from "./components/projects-list";


export const metadata: Metadata = {
  title: "Projects - SK",
};

export default function ProjectsPage() {
  return (
    <div className="projects">
      {/* <div className='projects__content'> */}
      <ProjectsHeaderComponent />
      <ProjectsListComponent />
      {/* </div> */}

      {/* <div className='projects__sidebar'>
        <ProjectSidebarComponent />
      </div> */}
    </div>
  );
}
