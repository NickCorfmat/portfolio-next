"use client";

import Image from "next/image";
import { Project } from "@data/projects";
import { isVideo } from "@lib/projectUtils";

function ActionButton({
  href,
  label,
  icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2
        px-5 py-2.5 text-sm font-medium
        rounded-full
        transition-all duration-300
        hover:scale-105
        ${
          primary
            ? "bg-white text-black"
            : "bg-black/10 backdrop-blur-md border border-white/10 hover:bg-black/30"
        }
      `}
    >
      {label}
      {icon}
    </a>
  );
}

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
              className="text-white/60 hover:text-white text-lg transition"
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
                <span>{project.teamSize} devs</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3 items-end pointer-events-auto">
              {project.url && (
                <ActionButton
                  href={project.url}
                  label="Play"
                  primary
                  icon={<i className="fa-regular fa-circle-play" />}
                />
              )}

              {project.demo && (
                <ActionButton
                  href={project.demo}
                  label="Demo"
                  icon={<i className="fa-solid fa-code" />}
                />
              )}

              {project.github && (
                <ActionButton
                  href={project.github}
                  label="GitHub"
                  icon={<i className="devicon-github-original" />}
                />
              )}

              {project.trailer && (
                <ActionButton
                  href={project.trailer}
                  label="Trailer"
                  icon={<i className="fa-solid fa-clapperboard" />}
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
