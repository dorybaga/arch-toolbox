import {
  LOAD_PROJECTS
} from '../actions/projects.js';

const initialState = { projects: [] };

const projects = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        projects: [...action.projects]
      }
      break;

    default:
      return state;
  }
};

export default projects;
