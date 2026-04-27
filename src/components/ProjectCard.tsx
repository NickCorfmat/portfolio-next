'use client';

import Image from 'next/image';
import { Project } from '@data/projects';
import { isVideo } from '@lib/projectUtils';
import { useState, useEffect, useRef } from 'react';

export default function ProjectCard({
  project,
  onClick,
  className = '',
  priority = false,
}: {
  project: Project;
  onClick?: () => void;
  className?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer — only load/play video when card enters viewport
  useEffect(() => {
    if (!isVideo(project.media)) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before it enters view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [project.media]);

  const renderMedia = () => {
    if (isVideo(project.media)) {
      return (
        <video
          ref={videoRef}
          src={inView ? project.media : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
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
        priority={priority}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
    );
  };

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-[0_0_20px_rgba(255,255,255,0.03)] ${className}`}
    >
      {/* SKELETON */}
      <div
        className={`absolute inset-0 bg-white/5 transition-opacity duration-500 ${
          loaded ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-6 left-6 flex flex-col gap-3">
          <div className="h-10 w-56 rounded-md bg-white/10" />
          <div className="h-6 w-80 rounded-md bg-white/[0.07]" />
        </div>
      </div>

      {/* MEDIA */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {renderMedia()}
      </div>

      {/* GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex translate-y-6 flex-col items-start justify-end gap-2 p-6 text-left text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
        <h2 className="text-4xl font-bold">{project.name}</h2>
        <p className="text-md opacity-75">
          {project.shortDescription || 'View project details'}
        </p>
      </div>
    </div>
  );
}
