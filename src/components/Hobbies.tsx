import { getProjectsByCategory } from "../lib/projectUtils";
import ProjectCarousel from "./ProjectCarousel";

export default function Hobbies() {
  const legoProjects = getProjectsByCategory(["lego_ideas"]);

  return (
    <section id="hobbies">
      <h1 className="">Hobbies</h1>
      <ProjectCarousel projects={legoProjects} />
    </section>
  );
}
