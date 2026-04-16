"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import { Project } from "@/public/data/projects";

function CardGroup({ projects, onClick, suffix, ariaHidden = false }: any) {
  return (
    <div className="flex animate-scroll gap-6 pr-6" aria-hidden={ariaHidden}>
      {projects.map((project: Project, i: number) => (
        <ProjectCard
          key={`${project.name}-${suffix}-${i}`}
          project={project}
          onClick={() => onClick(project)}
          className="h-[275px] w-[480px] shrink-0"
        />
      ))}
    </div>
  );
}

export default function ProjectCarousel({ projects }: any) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="flex w-full overflow-hidden py-8">
      <CardGroup
        projects={projects}
        suffix="primary"
        onClick={setActiveProject}
      />
      <CardGroup
        projects={projects}
        suffix="duplicate"
        ariaHidden
        onClick={setActiveProject}
      />

      {activeProject && (
        <ProjectPopup
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
