import {
  projects,
  Project,
  ProjectCategory,
} from "../../public/media/portfolioData";

export const getProjectsByCategory = (categories: ProjectCategory[]) => {
  return projects.filter((project) =>
    project.category.some((cat) => categories.includes(cat)),
  );
};

export const getRandomProject = (projects: Project[]) => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  return projects[randomIndex];
};
