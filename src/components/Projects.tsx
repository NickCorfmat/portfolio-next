"use client";

import { useState, useMemo } from "react";
import { Project } from "@data/projects";
import { getProjectsByCategory, shuffleProjects } from "@lib/projectUtils";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import { SectionHeader } from "./ui/SectionHeader";

export default function Projects() {
  const projects = useMemo(
    () => shuffleProjects(getProjectsByCategory(["program"])),
    [],
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full px-8 pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader label="Projects" />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.name} className="group relative">
              <ProjectCard
                project={project}
                onClick={() => setActiveProject(project)}
                className="h-[300px] w-full"
              />
            </div>
          ))}

          {/* VIEW ALL CARD */}
          <a
            href="/projects"
            className="group relative h-[300px] w-full overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer bg-black shadow-[0_0_20px_rgba(255,255,255,0.03)]"
          >
            <div className="w-12 h-12 rounded-full border border-[4px] border-white/50 flex items-center justify-center text-white/60">
              <i className="fa-solid fa-arrow-right font-bold text-xl" />
            </div>
            <div className="text-center">
              <h1 className="text-white font-lg tracking-wide">
                View All Projects
              </h1>
            </div>
          </a>
        </div>
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
