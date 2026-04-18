import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Games from "@components/Games";
import About from "@components/About";
import Skills from "@components/Skills";
import Hobbies from "@components/Hobbies";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Games />
      {/* <Hobbies /> */}
    </div>
  );
}
