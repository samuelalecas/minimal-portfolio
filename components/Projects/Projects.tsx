import { projectData } from "@/data";
import { ProjectCard } from "..";

export const Projects = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1500px]">
      {projectData.map((project) => (
        <ProjectCard key={project.title} data={project} />
      ))}
    </section>
  );
};
