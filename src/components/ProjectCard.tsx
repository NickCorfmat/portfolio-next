"use client";

import Image from "next/image";
import { Project } from "@data/projects";
import { isVideo } from "@lib/projectUtils";
import { useState } from "react";

export default function ProjectCard({
  project,
  onClick,
  className = "",
}: {
  project: Project;
  onClick?: () => void;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const renderMedia = () => {
    if (isVideo(project.media)) {
      return (
        <video
          src={project.media}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setLoaded(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      );
    }

    return (
      <Image
        src={project.media}
        alt={project.name}
        fill
        onLoad={() => setLoaded(true)}
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
    );
  };

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-[0_0_20px_rgba(255,255,255,0.03)] ${className}`}
    >
      {/* SKELETON */}
      <div
        className={`absolute inset-0 bg-white/5 transition-opacity duration-500 ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* fake content lines at bottom */}
        <div className="absolute bottom-6 left-6 flex flex-col gap-3">
          <div className="h-10 w-56 rounded-md bg-white/10" />
          <div className="h-6 w-80 rounded-md bg-white/[0.07]" />
        </div>
      </div>

      {/* MEDIA */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        {renderMedia()}
      </div>

      {/* GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-left text-white opacity-0 translate-y-6 gap-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="text-md opacity-75">
          {project.shortDescription || "View project details"}
        </p>
      </div>
    </div>
  );
}
