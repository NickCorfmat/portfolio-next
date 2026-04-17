import Image from "next/image";
import { techIconMap } from "@lib/constants";

const TAG_SIZE: "sm" | "md" | "lg" = "lg";

const sizeMap = {
  sm: { icon: 36, padding: "p-2.5", label: "text-[9px]", gap: "gap-1.5" },
  md: { icon: 50, padding: "p-4", label: "text-[11px]", gap: "gap-2" },
  lg: { icon: 70, padding: "p-4.25", label: "text-[13px]", gap: "gap-2.5" },
};

function TechTag({ tech }: { tech: string }) {
  const iconSrc = techIconMap[tech];
  const { icon, padding, label, gap } = sizeMap[TAG_SIZE];

  return (
    <div
      className={`flex flex-col items-center justify-center ${gap} transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`group aspect-square flex flex-col items-center justify-center ${padding}`}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            width={icon}
            height={icon}
            style={{ width: icon, height: icon }}
            className="object-contain"
            alt={`${tech} icon`}
            unoptimized
          />
        ) : (
          <div className="size-10 rounded-lg bg-white/10" />
        )}
      </div>
      <span
        className={`${label} text-white/70 uppercase tracking-wider text-center`}
      >
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
          My Tech Stack.
        </p>

        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {Object.entries(techIconMap).map(([name]) => (
            <TechTag key={name} tech={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
