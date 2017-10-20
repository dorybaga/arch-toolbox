import {
  LOAD_PROJECTS
} from '../actions/projects.js';

const initialState = [];

const projects = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.projects;

    default:
      return state;
  }
};

export default projects;
