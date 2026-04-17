import Image from "next/image";
import profile_picture from "@data/images/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-8 pt-20"
    >
      <div className="w-full max-w-[1200px] rounded-3xl p-8">
        <h2 className="text-center text-3xl text-white">About Me</h2>
        <h1 className="text-center text-white/65 text-4xl mt-3 mb-10">
          Code, Design, and Game Development.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Image
            className="w-[340px] h-[352px] rounded-2xl object-cover border border-white/20"
            src={profile_picture}
            alt="profile picture"
          />

          <div className="flex-1 max-w-[650px] flex flex-col gap-6">
            <p className="text-lg text-white/85 leading-relaxed">
              I’m a Computer Science: Game Design graduate from UC Santa Cruz
              focused on software engineering, game development, and building
              creative interactive experiences. I’m especially interested in
              opportunities that blend creative problem-solving, inventive
              design, and cross-disciplinary collaboration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white text-lg mb-2">Education</h3>
                <p className="text-white/75 leading-relaxed">
                  <span className="block font-semibold text-white">
                    University of California, Santa Cruz
                  </span>
                  B.S. Computer Science: Game Design
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white text-lg mb-3">Contact</h3>

                <div className="flex items-center gap-4 text-white/70">
                  <a
                    href="mailto:nfcorfmat@gmail.com"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/40 hover:text-white transition"
                    aria-label="Email"
                  >
                    <i className="fa-regular fa-envelope text-lg"></i>
                  </a>

                  <a
                    href="https://github.com/NickCorfmat"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/40 hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <i className="devicon-github-original text-lg"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nicolascorfmat/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/40 hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <i className="devicon-linkedin-plain text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
