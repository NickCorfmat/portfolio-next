'use client';

import { useState } from 'react';
import { Project } from '@data/projects';
import { getProjectsByCategory } from '@lib/projectUtils';
import ProjectCard from './ProjectCard';
import ProjectPopup from './ProjectPopup';
import { SectionHeader } from '@ui/SectionHeader';

export default function Hobbies() {
  const hobbies = getProjectsByCategory(['lego_ideas']);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="hobbies" className="w-full px-8 py-24">
      {/* Create a section discussing my LEGO hobby. Here is some info:
      Launched a YouTube channel with my brother to share our combined interest in LEGO through content creation.
      Accumulated 84,000+ subscribers, amassed a growing 17 million views, and generated $20,000 in ad-revenue.
      Produced both long-form and short-form videos, as well as social media posts to drive YouTube channel traffic.
      Edited videos in Premiere Pro and analyzed engagement metrics to optimize content style and increase retention.
      Engaged with the channel’s viewers through comments and social media, fostering a loyal and active community.

      LEGO Concept Designer									           
      Sunnyvale, CA							                      			          Jul 2017 - Present
      Designed 29+ LEGO concept sets for the crowdsourcing website LEGO Ideas, collecting 161,000+ project votes.
      Researched consumer trends and IP fit to select LEGO concept themes with the highest mass-market potential.
      Created models with LEGO CAD software, produced photorealistic renders in Blender, and grew social media interest.
      Achieved review stage 10 times, succeeding with the LEGO Polaroid set, currently on sale in retail stores worldwide.


      Some context about the LEGO Polaroid:
      What started as a passion project, the Polaroid OneStep Camera quickly
      earned 10,000 supporters, advancing to LEGO Review Stage and ultimately
      securing approval for commerical production. Released in January 2024,
      the LEGO Polaroid set has been enjoyed by tens of thousands of fans
      around the world.


      LEGO Ideas Page: "https://beta.ideas.lego.com/profile/cb41754b-5ba3-425f-8051-5bb0be7b5c19
      Polaroid trailer is in public/data/videos/polaroidtrailer.mp4 or this YouTube link: https://www.youtube.com/watch?v=h19I2b_Yzg4 Use it somehow
      The Verge Article talking about our LEGO Polaroid set and BTS of our work: http://theverge.com/c/23991049/lego-ideas-polaroid-onestep-behind-the-scenes-price
      */}

      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader label="Hobbies" />
        <p className="mt-3 mb-10 text-center text-white/65">
          LEGO category showcase
        </p>

        <div className="flex flex-row gap-8">
          {hobbies.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setActiveProject(project)}
              className="h-[320px] w-[50%]"
            />
          ))}
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
