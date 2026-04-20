"use client";

import { useState, useMemo } from "react";
import { Project } from "@data/projects";
import { getProjectsByCategory, shuffleProjects } from "@lib/projectUtils";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import { SectionHeader } from "./ui/SectionHeader";

export default function Games() {
  const games = useMemo(
    () => shuffleProjects(getProjectsByCategory(["game"])),
    [],
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="games" className="w-full px-8 pt-20 pb-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader label="Games" />

        <h2 className="text-[48px] leading-15 text-white font-semibold tracking-tight mb-4">
          From Prototypes
          <br />
          to Shipped Games.
        </h2>

        <p className="text-lg text-white/80 leading-relaxed max-w-[600px] mb-8">
          A collection of games I’ve developed across the full production cycle,
          from rapid prototyping to final release, using industry-standard
          engines such as Unity and Unreal Engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {games.map((project, i) => (
            <div key={project.name} className="group relative">
              <ProjectCard
                project={project}
                onClick={() => setActiveProject(project)}
                className="h-[300px] w-full"
              />
            </div>
          ))}
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
