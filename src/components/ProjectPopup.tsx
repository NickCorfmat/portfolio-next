"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Project } from "@data/projects";
import { isVideo } from "@lib/projectUtils";
import { techIconMap } from "@lib/constants";
import { ActionButton } from "@ui/ActionButton";

export default function ProjectPopup({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
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
          className="w-full h-full object-cover scale-105"
        />
      );
    }

    return (
      <Image
        src={project.media}
        alt={project.name}
        fill
        className="object-cover scale-105"
      />
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      {/* STAGE */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-[1100px] h-[620px]
          rounded-2xl overflow-hidden
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]
          bg-black
          animate-[fadeIn_0.35s_ease]
        "
      >
        {/* MEDIA */}
        <div className="absolute inset-0">{renderMedia()}</div>

        {/* LIGHTING / VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

        {/* CONTENT */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white pointer-events-none">
          {/* TOP */}
          <div className="flex justify-end pointer-events-auto">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-xl transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* BOTTOM */}
          <div className="flex justify-between items-end gap-8">
            {/* LEFT */}
            <div className="max-w-[520px] pointer-events-auto">
              <h2 className="text-4xl font-bold mb-3 tracking-tight">
                {project.name}
              </h2>

              <p className="text-white/80 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex gap-4 text-sm text-white/50 mb-4">
                <span>{project.dates}</span>
                <span>•</span>
                <span>
                  {project.teamSize} {project.teamSize > 1 ? `Devs` : `Dev`}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const iconSrc = techIconMap[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-sm bg-white/20"
                    >
                      {iconSrc && (
                        <Image
                          src={iconSrc}
                          alt={tech}
                          width={14}
                          height={14}
                          className="object-contain"
                          unoptimized
                        />
                      )}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row gap-2 items-end pointer-events-auto font-medium">
              {project.url && (
                <ActionButton
                  href={project.url}
                  label="Play"
                  primary
                  icon={{ type: "i", className: "fa-regular fa-circle-play" }}
                />
              )}
              {project.demo && (
                <ActionButton
                  href={project.demo}
                  label="Demo"
                  icon={{ type: "i", className: "fa-solid fa-code" }}
                />
              )}
              {project.github && (
                <ActionButton
                  href={project.github}
                  label="GitHub"
                  icon={{ type: "i", className: "devicon-github-original" }}
                />
              )}
              {project.trailer && (
                <ActionButton
                  href={project.trailer}
                  label="Trailer"
                  icon={{ type: "i", className: "fa-solid fa-clapperboard" }}
                />
              )}
            </div>
          </div>
        </div>

        {/* OUTER GLOW */}
        <div className="pointer-events-none absolute -inset-[2px] rounded-2xl border border-white/10 opacity-40" />
      </div>
    </div>
  );
}
