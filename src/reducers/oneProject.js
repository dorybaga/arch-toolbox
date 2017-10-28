import { LOAD_PROJECT } from "../actions/projects.js";

const initialState = {};

const project = (state = initialState, action) => {
  // console.log("action", action.project);
  switch (action.type) {
    case LOAD_PROJECT:
      return {
        project: action.project
      };
      break;
    default:
      return state;
  }
};

export default project;
