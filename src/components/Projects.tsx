'use client';

import { useState, useMemo } from 'react';
import { Project } from '@data/projects';
import { getProjectsByCategory } from '@lib/projectUtils';
import ProjectCard from './ProjectCard';
import ProjectPopup from './ProjectPopup';
import { SectionHeader } from '@ui/SectionHeader';

export default function Projects() {
  const projects = useMemo(() => getProjectsByCategory(['program']), []);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full px-8 pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader label="Projects" />

        <h2 className="mb-5 text-[48px] leading-15 font-semibold tracking-tight text-white">
          Latest Projects
        </h2>

        <p className="mb-8 max-w-[600px] text-lg leading-relaxed text-white/80">
          A selection of coding projects showcasing core software engineering
          skills, including full-stack development, graphics rendering, and
          algorithmic problem-solving.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
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
            className="group relative flex h-[300px] w-full cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-black bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.03)] transition-all duration-300 hover:bg-white/10"
          >
            <div className="text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[0.97]">
              <h1 className="text-2xl text-white">View All Projects</h1>
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
