/*jshint esversion: 6 */

import React, { Component } from "react";
// import './Dashboard.css';
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { getProjectById } from "../../lib/projects-api";

class Schematic extends Component {
  constructor(props) {
    super(props);
    this.projectId = props.match.params.id;
    this.state = {
      project: []
    };
  }

  componentDidMount() {
    getProjectById(this.projectId)
      // console.log("projectId is:", this.projectId);
      .then(projectData => {
        console.log(projectData);
        this.setState({
          project: projectData
        });
      });
    // upload schematic from aws
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Schematic</h1>
        <Footer project={this.state.project} />
      </div>
    );
  }
}

export default Schematic;
