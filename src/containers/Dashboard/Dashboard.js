/*jshint esversion: 6 */
import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../../components/Header.js";
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
      console.log(projectList);
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
        <h1>Dashboard</h1>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default MobileDash;
