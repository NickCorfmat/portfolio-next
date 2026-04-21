import Image from 'next/image';
import { techIconMap } from '@lib/constants';

function TechTag({ tech }: { tech: string }) {
  const iconSrc = techIconMap[tech];

  return (
    <div className="flex cursor-default items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
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
          <div className="h-5 w-5 rounded bg-white/10" />
        )}
      </div>
      <span className="text-md whitespace-nowrap text-white/85">{tech}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-[500px] w-full flex-col items-center justify-center p-18 px-8"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-8 rounded-4xl bg-black/20 p-12 lg:flex-row">
        <div>
          <h2 className="mb-6 text-[48px] leading-15 font-semibold tracking-tight text-white">
            Technologies
          </h2>
          <p className="max-w-[600px] text-lg leading-relaxed text-white/80">
            My growing collection of languages, frameworks, and tools I use to
            design, build, and ship reliable software applications.
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-3">
          {Object.keys(techIconMap).map((name) => (
            <TechTag key={name} tech={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
