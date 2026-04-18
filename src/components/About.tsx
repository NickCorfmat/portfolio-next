import Image from "next/image";
import profile_picture from "@data/images/profile.jpg";
import { SectionHeader } from "./ui/SectionHeader";

const links = [
  {
    href: "mailto:nfcorfmat@gmail.com",
    icon: "fa-regular fa-envelope",
    label: "Email",
  },
  {
    href: "https://github.com/NickCorfmat",
    icon: "devicon-github-original",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/nicolascorfmat/",
    icon: "devicon-linkedin-plain",
    label: "LinkedIn",
  },
  {
    href: "/data/docs/Nicolas_Corfmat_Resume.pdf",
    icon: "fa-regular fa-file-lines",
    label: "Resume",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-8 pt-20"
    >
      <div className="w-full max-w-[1300px]">
        <SectionHeader label="About Me" />

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
          <Image
            className="w-[300px] h-[360px] rounded-2xl object-cover"
            src={profile_picture}
            alt="profile picture"
          />

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl text-white font-semibold tracking-tight mb-4">
                Code, Design,
                <br />
                and Game Development.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-[580px]">
                I'm a Computer Science: Game Design graduate from UC Santa Cruz
                focused on software engineering, game development, and building
                creative interactive experiences. I'm especially interested in
                opportunities that blend creative problem-solving, inventive
                design, and cross-disciplinary collaboration.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 max-w-[420px]">
              <div className="mt-0.5 w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-white/10 text-white/60">
                <i className="fa-solid fa-graduation-cap text-sm" />
              </div>
              <div>
                <p className="text-white font-medium leading-snug">
                  University of California, Santa Cruz
                </p>
                <p className="text-white/50 text-sm mt-0.5">
                  B.S. Computer Science: Game Design
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
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
                className="w-[100%] flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 font-medium text-lg text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                <i className={`${link.icon} text-lg`} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
