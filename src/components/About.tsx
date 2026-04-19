import Image from "next/image";
import profile_picture from "@data/images/profile.jpg";
import { SectionHeader } from "@ui/SectionHeader";
import { CONTACT_LINKS } from "@lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-8 pt-10 pb-16"
    >
      <div className="w-full max-w-[1200px]">
        <SectionHeader label="About Me" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-auto flex flex-col gap-8">
            <div>
              <h2 className="text-4xl text-white font-semibold tracking-tight mb-5">
                Code, Design,
                <br />
                and Game Development.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-[600px]">
                I'm a Computer Science: Game Design graduate from UC Santa Cruz
                focused on software engineering, game development, and building
                creative interactive experiences. I'm especially interested in
                opportunities that blend creative problem-solving, inventive
                design, and cross-disciplinary collaboration.
              </p>
            </div>
          </div>

          <div className="flex flex-row md:contents gap-8 w-full md:w-auto items-center">
            <Image
              className="w-[260px] h-[300px] md:w-[300px] md:h-[360px] rounded-2xl object-cover shrink-0"
              src={profile_picture}
              alt="profile picture"
            />

            <div className="max-w-[200px] flex flex-col gap-3 flex-1 md:flex-none">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") || link.href.endsWith(".pdf")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 font-medium text-lg text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  <i className={`${link.icon} text-lg`} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
