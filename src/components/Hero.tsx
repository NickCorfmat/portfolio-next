"use client";

import Image from "next/image";
import {
  isVideo,
  getProjectsByCategory,
  getRandomProject,
} from "@lib/projectUtils";

export default function Hero() {
  const featuredProjects = getProjectsByCategory(["featured"]);
  const randomProject = getRandomProject(featuredProjects);

  if (!randomProject) return null;

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-[2] flex flex-col items-center text-center">
        <h1 className="text-white text-[clamp(2rem,5vw,5rem)] m-0">
          Nicolas Corfmat
        </h1>

        <p
          className="w-4/5 text-xl leading-relaxed mt-0 mb-10 animate-rainbow-flow"
          style={{
            background:
              "linear-gradient(90deg, #ff595e, #ff924c, #ffca3a, #8ac926, #1982c4, #6a4c93, #ff595e)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Building interactive experiences where design and engineering meet{" "}
          {`<3`}
        </p>
      </div>
    </section>
  );
}
