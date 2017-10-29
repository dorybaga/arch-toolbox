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
      project: null,
      schematic: null,
      pin: null
    };
  }

  componentDidMount() {
    getProjectById(this.projectId)
      .then(projectData => {
        // console.log("entire returned response", projectData);
        // console.log("first and only obj on the array", projectData[0]);
        // console.log("keys in that obj", Object.keys(projectData[0]));
        // backend needs to return and object, not an array in an object
        this.setState({
          project: projectData[0].project,
          schematic: projectData[0].schematic,
          pin: projectData[0].pin
        });
      });
  }

  render() {
    console.log("this is the state", this.state);
    console.log("schemactic", this.state.schematic ? this.state.schematic.image_url : "this is a string");
    return (
      <div>
        <img src={this.state.schematic ? this.state.schematic.image_url : 'Image did not load'} />
        <Footer project={this.state.project ? this.state.project : 'Props did not load'} />
      </div>

    )
  }
}

export default Schematic;
