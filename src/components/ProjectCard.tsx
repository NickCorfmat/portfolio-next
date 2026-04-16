"use client";

import Image from "next/image";
import { Project } from "@data/projects";
import { isVideo } from "@lib/projectUtils";
import { techIconMap } from "../lib/constants";

function TechTag({ tech }: { tech: string }) {
  const iconClass = techIconMap[tech.toLowerCase()];

  return (
    <div className="flex items-center gap-1 px-2 py-[5px] rounded-md bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium">
      {iconClass && <i className={`${iconClass} text-sm`} />}
      <span>{tech}</span>
    </div>
  );
}

export default function ProjectCard({
  project,
  onClick,
  className = "",
}: {
  project: Project;
  onClick?: () => void;
  className?: string;
}) {
  const renderMedia = () => {
    if (isVideo(project.media)) {
      return (
        <video
          src={project.media}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      );
    }

    return (
      <Image
        src={project.media}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
    );
  };

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${className}`}
    >
      {/* MEDIA */}
      <div className="absolute inset-0">{renderMedia()}</div>

      {/* GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-5 text-left text-white opacity-0 translate-y-6 gap-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="text-md opacity-75">
          {project.shortDescription || "View project details"}
        </p>
        {/* TECH TAGS */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 z-10">
            {project.technologies.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
