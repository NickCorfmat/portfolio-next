"use client";

import { useState, useMemo } from "react";
import { Project } from "@data/projects";
import { getProjectsByCategory } from "@lib/projectUtils";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import { SectionHeader } from "./ui/SectionHeader";

export default function Projects() {
  const projects = useMemo(() => getProjectsByCategory(["program"]), []);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full px-8 pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader label="Projects" />

        <h2 className="text-[48px] leading-15 text-white font-semibold tracking-tight mb-5">
          Latest Projects
        </h2>

        <p className="text-lg text-white/80 leading-relaxed max-w-[600px] mb-8">
          A selection of coding projects showcasing core software engineering
          skills, including full-stack development, graphics rendering, and
          algorithmic problem-solving.
        </p>

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
            <div className="text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[0.97]">
              <h1 className="text-white text-2xl">View All Projects</h1>
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
