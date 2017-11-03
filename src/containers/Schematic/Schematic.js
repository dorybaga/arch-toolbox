/*jshint esversion: 6 */
import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import Header from "../Header/Header.js";
import Footer from "../../components/Footer.js";
import SchematicDwg from "./SchematicDwg";
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
    getProjectById(this.projectId).then(projectData => {
      console.log("project data", projectData[0]);
      console.log("project data", projectData[0].pin);
      localStorage.setItem("projectId", projectData[0].project.id);
      localStorage.setItem("schematicId", projectData[0].schematic.id);
      let schematicId = localStorage.getItem("schematicId");
      this.setState({
        project: projectData[0].project,
        schematic: projectData[0].schematic,
        pin: projectData[0].pin
      });
    });
  }

  render() {
    return (
      <div>
        <ReactCursorPosition>
          <SchematicDwg
            image={
              this.state.schematic
                ? this.state.schematic.image_url
                : "Image did not load"
            }
          />
        </ReactCursorPosition>
        <Footer
          project={
            this.state.project ? this.state.project : "Props did not load"
          }
        />
      </div>
    );
  }
}

export default Schematic;
