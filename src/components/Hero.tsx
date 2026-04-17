"use client";

import { useMemo } from "react";
import Image from "next/image";
import {
  isVideo,
  getProjectsByCategory,
  getRandomProject,
} from "@lib/projectUtils";
import { SectionButton } from "@ui/SectionButton";

export default function Hero() {
  const randomProject = useMemo(() => {
    const featuredProjects = getProjectsByCategory(["featured"]);
    return getRandomProject(featuredProjects);
  }, []);

  if (!randomProject) return null;

  return (
    <section
      id="home"
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND MEDIA */}
      {isVideo(randomProject.media) ? (
        <video
          className="absolute inset-0 w-full h-full object-cover blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={randomProject.media} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={randomProject.media}
          alt={randomProject.name}
          fill
          className="object-cover blur-[2px]"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent z-[1]" />

      {/* CONTENT */}
      <div className="relative z-[2] flex w-full max-w-[1300px] h-full flex-col justify-end items-center text-center mb-[25%] px-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white text-[72px] leading-[0.95] tracking-tight">
            NICK CORFMAT
          </h1>

          <h2 className="text-white/80 text-2xl md:text-3xl tracking-wide">
            Software Engineer <span className="text-white/40">+</span> Game
            Developer
          </h2>
        </div>

        <div className="flex flex-row gap-3 mt-8">
          <SectionButton label="View Projects" primary scrollToId="projects" />
          <SectionButton label="About Me" scrollToId="about" />
        </div>
      </div>
    </section>
  );
}
