import { projects, Project, ProjectCategory } from "@data/projects";

export const getProjectsByCategory = (categories: ProjectCategory[]) => {
  return projects.filter((project) =>
    project.category.some((cat) => categories.includes(cat)),
  );
};

export const getRandomProject = (projects: Project[]) => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  return projects[randomIndex];
};

export const isVideo = (media: string) => {
  return media.endsWith(".mp4") || media.endsWith(".webm");
};

export function shuffleProjects(array: Project[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
