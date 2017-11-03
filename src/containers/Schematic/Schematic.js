/*jshint esversion: 6 */
import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import Header from "../../components/Header.js";
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
      pins: []
    };
  }

  componentDidMount() {
    getProjectById(this.projectId).then(projectData => {
      console.log("project data", projectData[0]);
      console.log("project data", projectData[0].pin);

      // console.log("this is the project id", projectData[0].project.id);
      // axios.get(`/api/projects/${projectId}/pin/:pin_id`)
      //   .then(function(res) {
      //     console.log(res);
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //   })

      localStorage.setItem("projectId", projectData[0].project.id);
      localStorage.setItem("schematicId", projectData[0].schematic.id);
      let schematicId = localStorage.getItem("schematicId");
      // console.log("this is the schematic id", schematicId);
      this.setState({
        project: projectData[0].project,
        schematic: projectData[0].schematic,
        pins: projectData[0].pin
      });
    });
  }

  render() {
    console.log(this.state.pins);
    if (this.state.pins.length > 0) {
      return (
        <div>
          <ReactCursorPosition>
            <SchematicDwg
              image={
                this.state.schematic
                  ? this.state.schematic.image_url
                  : "Image did not load"
              }
              pinList={this.state.pins}
            />
          </ReactCursorPosition>
          <Footer
            project={
              this.state.project ? this.state.project : "Props did not load"
            }
          />
        </div>
      );
    } else {
      return <div>stupid pins</div>;
    }
  }
}

export default Schematic;
