import { techIconMap } from "@lib/constants";

function TechTag({ tech }: { tech: string }) {
  const iconSrc = techIconMap[tech];

  return (
    <div className="size-[100px] flex justify-center items-center rounded-3xl bg-black/20 p-4">
      {iconSrc && <img src={iconSrc} className="size-full object-contain" />}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2>Technologies I use.</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
        {Object.entries(techIconMap).map(([name]) => (
          <TechTag key={name} tech={name} />
        ))}
      </div>
    </section>
  );
}
