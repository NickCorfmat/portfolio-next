'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
  isVideo,
  getProjectsByCategory,
  getRandomProject,
} from '@lib/projectUtils';
import { ActionButton } from '@ui/ActionButton';

export default function Hero() {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const randomProject = useMemo(() => {
    const featuredProjects = getProjectsByCategory(['featured']);
    return getRandomProject(featuredProjects);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setMediaLoaded(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!randomProject) return null;

  return (
    <section
      id="home"
      className="relative flex h-[100vh] min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND MEDIA */}
      {isVideo(randomProject.media) ? (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${mediaLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setMediaLoaded(true)}
        >
          <source src={randomProject.media} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={randomProject.media}
          alt={randomProject.name}
          fill
          className={`object-cover blur-[2px] transition-opacity duration-1000 ${mediaLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setMediaLoaded(true)}
        />
      )}

      <div
        className={`absolute inset-0 z-[1] bg-black transition-opacity duration-1000 ${mediaLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/85 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-[3] flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-0 px-8 text-center">
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <h1 className="text-[44px] leading-[0.95] tracking-tight text-white md:text-[72px]">
            NICK CORFMAT
          </h1>

          <h2 className="text-lg text-white/70 md:text-3xl">
            Software Engineer <span className="text-white/60">/</span> Game
            Developer
          </h2>
        </div>

        <div className="mt-5 flex flex-row gap-3 md:mt-8">
          <ActionButton
            label="View Projects"
            primary
            scrollToId="projects"
            className="font-bold"
          />
          <ActionButton
            label="About Me"
            scrollToId="about"
            className="font-bold"
          />
        </div>
      </div>
    </section>
  );
}
