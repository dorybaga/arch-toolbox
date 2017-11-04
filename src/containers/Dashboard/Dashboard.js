/*jshint esversion: 6 */
import React, { Component } from "react";
import Header from "../Header/Header.js";
import { getProjectsFromDB } from "../../lib/projects-api.js";
import ProjectList from "../../components/ProjectList.js";

class MobileDash extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    getProjectsFromDB().then(projectList => {
      this.setState({
        projects: projectList
      });
    });
    console.log(this.state.projects);
  }

  render() {
    console.log(this.state.projects);
    return (
      <div>
        <Header />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default MobileDash;
