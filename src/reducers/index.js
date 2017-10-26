import {
  LOAD_PROJECTS,
  LOAD_PROJECT
} from '../actions/projects.js';

const initialState = [];

const projects = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.projects;
      break;
    case LOAD_PROJECT:
      return action.project;
      break;
    default:
      return state;
  }
};

export default projects;
