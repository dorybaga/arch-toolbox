/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import ReactCursorPosition from "react-cursor-position";
import Modal from "react-modal";
import ModalContent from "../../containers/ModalContent/ModalContent.js";
import Header from "../Header/Header.js";
import Footer from "../../components/Footer.js";
// import SchematicDwg from "../../components/SchematicDwg.js";
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
      currentPos: { x: null, y: null },
      activate: false,
      modalIsOpen: false,
      pinList: []
    };
  }

  componentDidMount() {
    console.log("projectId is", this.projectId);
    getProjectById(this.projectId).then(projectData => {
      console.log("componentDidMount", projectData);
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
    console.log("pins activated");
    this.setState({
      activate: true
    });
  }

  logPostition(x, y) {
    if (this.state.activate === true) {
      let username = localStorage.getItem("loggedInUserName");
      let userId = localStorage.getItem("loggedInUserId");
      let schematicId = localStorage.getItem("schematicId");
      let projectId = localStorage.getItem("projectId");
      // console.log("projectId", projectId);
      // console.log("schematicId", schematicId);
      // console.log("username =", username);
      // console.log("userId", userId);
      // console.log("x", this.state.position.x);
      // console.log("y", this.state.position.y);
      let newPin = {
        x: this.state.currentPos.x,
        y: this.state.currentPos.y,
        user_id: userId,
        project_id: projectId,
        schematic_id: schematicId
      };
      axios
        .post("/api/pins", newPin)
        .then(function(response) {
          console.log("new pin dropped", response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.setState({
        pins: [...this.state.pins, this.state.currentPos],
        activate: false
      });
    } else {
      console.log("hit the button");
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this.state.project);
    console.log("PINS IN RENDER", this.state.pins);
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

        <ReactCursorPosition
          onPositionChanged={data => {
            this.setState({
              currentPos: { x: data.position.x, y: data.position.y }
            });
            console.log("x: ", data.position.x, "y:", data.position.y);
          }}
        >
          <img
            src={
              this.state.schematic
                ? this.state.schematic.image_url
                : "Props did not load"
            }
            style={{ zIndex: -50 }}
            onClick={this.logPostition.bind(this)}
          />
        </ReactCursorPosition>
        <button onClick={this.activatePins.bind(this)}>Drop Pins</button>

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
