import Image from "next/image";
import profile_picture from "@data/images/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-8 py-24"
    >
      <div className="w-full max-w-[1400px] flex-col items-center justify-center">
        <h2 className="text-center text-3xl text-white/90 px-12">About Me</h2>
        <div className="flex flex-row items-center justify-center gap-12">
          <Image
            className="size-[250px] rounded-3xl"
            src={profile_picture}
            alt="profile picture"
          />
          <div className="w-[500px]">
            <p className="text-lg">
              I’m a Computer Science: Game Design graduate from UC Santa Cruz
              focused on software engineering, game development, and building
              creative interactive experiences. I’m especially interested in
              opportunities that blend creative problem-solving, inventive
              design, and cross-disciplinary collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
