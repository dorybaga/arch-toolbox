/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import ReactCursorPosition from "react-cursor-position";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Modal from "react-modal";
import ModalContent from "../../containers/ModalContent/ModalContent.js";
import Header from "../Header/Header.js";
import Footer from "../../components/Footer.js";
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

const style = {
  marginRight: 20
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

  logPostition(x, y) {
    if (this.state.activate === true) {
      let username = localStorage.getItem("loggedInUserName");
      let userId = localStorage.getItem("loggedInUserId");
      let schematicId = localStorage.getItem("schematicId");
      let projectId = localStorage.getItem("projectId");

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
    console.log("model open");
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    // const pinLayer = {
    //   position: "relative",
    //   width: "100%",
    //   height: "100%"
    // };

    return (
      <div className="schematicCanvas">
        <Header />
        <div className="pinLayer">
          {this.state.pins.map(pin => {
            return (
              <div>
                <a onClick={this.openModal.bind(this)}>
                  <Pin x={pin.x} y={pin.y} />
                </a>
              </div>
            );
          })}
        </div>

        <ReactCursorPosition
          onPositionChanged={data => {
            this.setState({
              currentPos: { x: data.position.x, y: data.position.y }
            });
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
        <FloatingActionButton
          style={style}
          onClick={this.activatePins.bind(this)}
        >
          Pin
        </FloatingActionButton>

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
