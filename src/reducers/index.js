import { combineReducers } from "redux";
import project from "./oneProject.js";
import projects from "./allProjects.js";

const reducers = combineReducers({
  project,
  projects
});

export default reducers;
