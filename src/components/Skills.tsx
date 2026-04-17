import Image from "next/image";
import { techIconMap } from "@lib/constants";

function TechTag({ tech }: { tech: string }) {
  const iconSrc = techIconMap[tech];

  return (
    <div className="group aspect-square flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-black/40">
      {iconSrc ? (
        <Image
          src={iconSrc}
          width={50}
          height={50}
          className="size-10 object-contain"
          alt={`${tech} icon`}
          unoptimized
        />
      ) : (
        <div className="size-10 rounded-lg bg-white/10" />
      )}

      <span className="text-[11px] text-white/70 uppercase tracking-wider text-center">
        {tech}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full px-8 pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="text-center text-3xl text-white/85 mt-3 mb-10">
          Emphasis on broad technologies.
        </p>

        {/* CENTERED GRID WRAPPER */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(techIconMap).map(([name]) => (
              <TechTag key={name} tech={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
