import Image from "next/image";
import { techIconMap } from "@lib/constants";

function TechTag({ tech }: { tech: string }) {
  const iconSrc = techIconMap[tech];

  return (
    <div className="flex items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default">
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        {iconSrc ? (
          <Image
            src={iconSrc}
            width={20}
            height={20}
            style={{ width: 20, height: 20 }}
            className="object-contain"
            alt={`${tech} icon`}
            unoptimized
          />
        ) : (
          <div className="w-5 h-5 rounded bg-white/10" />
        )}
      </div>
      <span className="text-md text-white/85 whitespace-nowrap">{tech}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full px-8 p-18 bg-black/50">
      <div className="mx-auto w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
            My Tech Stack
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-[600px]">
            Everything from web development and software engineering, to game
            development and design - I take on a variety of skills.
          </p>
        </div>

        <div className="w-full flex flex-wrap gap-3 justify-center">
          {Object.keys(techIconMap).map((name) => (
            <TechTag key={name} tech={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
