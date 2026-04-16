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
      <div className="relative z-[2] flex w-full max-w-[1400px] h-full flex-col justify-center items-start text-left px-8">
        <h3 className="text-[32px] text-white/60">Hey, I’m</h3>

        <h1 className="text-white text-[80px] m-0">Nick Corfmat</h1>

        <p className="w-[500px] text-2xl leading-relaxed mt-0 mb-10 animate-rainbow-flow bg-[linear-gradient(90deg,#ff595e,#ff924c,#ffca3a,#8ac926,#1982c4,#6a4c93,#ff595e)] bg-[length:300%_100%] bg-clip-text text-transparent">
          Creating interactive experiences where design and engineering meet{" "}
          {`<`}3
        </p>
      </div>
    </section>
  );
}
