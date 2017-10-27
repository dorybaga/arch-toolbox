import { LOAD_ALL_PROJECTS } from "../actions/projects.js";

const initialState = [];

const projects = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_PROJECTS:
      return action.projects;
      break;
    default:
      return state;
  }
};

export default projects;
