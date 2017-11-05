/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import ReactCursorPosition from "react-cursor-position";
import Modal from "react-modal";
import ModalContent from "../../containers/ModalContent/ModalContent.js";
import Header from "../Header/Header.js";
import Footer from "../../components/Footer.js";
import SchematicDwg from "../../components/SchematicDwg.js";
import { getProjectById } from "../../lib/projects-api";
import Pin from "../../containers/Pin/Pin.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Schematic extends Component {
  constructor(props) {
    super(props);
    this.projectId = props.match.params.id;
    this.state = {
      project: null,
      schematic: null,
      pins: [],
      activate: false,
      modalIsOpen: false
    };
  }

  componentDidMount() {
    getProjectById(this.projectId).then(projectData => {
      localStorage.setItem("projectId", projectData[0].project.id);
      localStorage.setItem("schematicId", projectData[0].schematic.id);
      let schematicId = localStorage.getItem("schematicId");
      this.setState({
        project: projectData[0].project,
        schematic: projectData[0].schematic,
        pins: projectData[0].pin
      });
    });
  }

  activatePins() {
    this.setState({
      activate: true
    });
  }

  logPostition() {
    // if (this.state.activate === true) {
    //   let username = localStorage.getItem("loggedInUserName");
    //   let userId = localStorage.getItem("loggedInUserId");
    //   let schematicId = localStorage.getItem("schematicId");
    //   let projectId = localStorage.getItem("projectId");
    //   // console.log("projectId", projectId);
    //   // console.log("schematicId", schematicId);
    //   // console.log("username =", username);
    //   // console.log("userId", userId);
    //   console.log(this.props.position);
    //   // console.log("x", this.state.position.x);
    //   // console.log("y", this.state.position.y);
    //   let newPin = {
    //     x: this.state.position.x,
    //     y: this.state.position.y,
    //     user_id: userId,
    //     project_id: projectId,
    //     schematic_id: schematicId
    //   };
    //   axios
    //     .post("/api/pins", newPin)
    //     .then(function(response) {
    //       console.log("new pin dropped", response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    //   this.setState({
    //     pinList: [...this.state.pinList, this.state.position],
    //     activate: false
    //   });
    // } else {
    //   console.log("hit the button");
    // }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this.state.project);
    console.log(this.state.pins);
    console.log("schematic rendering");

    const pinLayer = {
      position: "relative",
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <Header />
        <div className="pinLayer" style={pinLayer}>
          {this.state.pins.map(pin => {
            return <Pin x={pin.x} y={pin.y} />;
          })}
        </div>
        <ReactCursorPosition>
          <SchematicDwg
            schematic={
              this.state.schematic
                ? this.state.schematic.image_url
                : "Props did not load"
            }
          />
          <button onClick={this.activatePins.bind(this)}>Drop Pins</button>
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
