import {
  getProjectsFromDB
} from '../lib/projects-api.js';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const loadProjects = () => {
  return (dispatch) => {
    return getProjectsFromDB()
    .then( (projects) => {
      dispatch({
        type: LOAD_PROJECTS,
        projects: projects
      });
    });
  };
};