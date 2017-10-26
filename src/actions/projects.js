import {
  getProjectsFromDB,
  getProjectById
} from '../lib/projects-api.js';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const LOAD_PROJECT = 'LOAD_PROJECT';


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

export const loadProjectById = (projectId) => {
  return (dispatch) => {
    return getProjectById(projectId)
    .then( (project) => {
      dispatch({
        type: LOAD_PROJECT,
        project: project
      });
    });
  };
};