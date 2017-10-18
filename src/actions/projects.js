export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const loadProjects = (projects) => {
  return {
    type: LOAD_PROJECTS,
    projects
  };
};