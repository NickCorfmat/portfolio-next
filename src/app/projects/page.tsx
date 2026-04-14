import { getProjectsByCategory } from "@/src/lib/projectUtils";

export default function ProjectPage() {
  const allProjects = getProjectsByCategory(["game", "program"]);

  return <div></div>;
}
