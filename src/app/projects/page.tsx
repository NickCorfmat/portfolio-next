"use client";
import ProjectCard from "@components/ProjectCard";
import ProjectPopup from "@/src/components/ProjectPopup";
import { Project } from "@/public/data/projects";
import { getProjectsByCategory } from "@/src/lib/projectUtils";
import { useState } from "react";

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projects = getProjectsByCategory(["game", "program"]);

  return (
    <section className="w-full py-24 flex flex-col items-center px-6">
      <div className="grid gap-12 w-full justify-center [grid-template-columns:repeat(auto-fill,400px)]">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => setActiveProject(project)}
            className="w-[400px] aspect-[400/260]"
          />
        ))}
      </div>

      {activeProject && (
        <ProjectPopup
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
