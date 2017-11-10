/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import ReactCursorPosition from "react-cursor-position";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import ModalContent from "../../containers/ModalContent/ModalContent.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { getProjectById } from "../../lib/projects-api";
import Pin from "../../containers/Pin/Pin.js";

const pinBtn = {
  margin: 0,
  top: "auto",
  right: 200,
  bottom: 20,
  left: "auto",
  position: "fixed"
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
      currentPinId: null,
      activate: false,
      open: false
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

  logPostition(x, y, pinId) {
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

      console.log(newPin);

      axios
        .post("/api/pins", newPin)
        .then(response => {
          console.log("new pin dropped", response);
          console.log("new pin id", response.data.id);
          this.setState(
            {
              currentPinId: response.data.id,
              pins: [...this.state.pins, response.data],
              activate: false
            },
            () => console.log("checking state", this.state)
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("hit the button");
    }
  }

  addPhoto() {
    let userId = localStorage.getItem("loggedInUserId");
    let newPhoto = {
      pin_id: this.state.currentPinId,
      user_id: userId
    };
    axios
      .post("/api/projects/1/images", newPhoto)
      .then(function(response) {
        console.log("your photo was added to the bucket!", response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      open: false
    });
  }

  handleOpen(pinId) {
    console.log("current pinId from handleOpen", pinId);
    localStorage.setItem("pinId", pinId);

    this.setState({
      currentPinId: pinId,
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false,
      currentPinId: null
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.addPhoto.bind(this)}
      />
    ];

    return (
      <div>
        <Header />
        <div className="schematicCanvas">
          <div className="pinLayer">
            {this.state.pins.map(pin => {
              return (
                <div>
                  <a
                    onClick={() => {
                      this.handleOpen(pin.id);
                    }}
                  >
                    <Pin x={pin.x} y={pin.y} pinId={pin.id} />
                  </a>

                  <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                    autoScrollBodyContent={true}
                  >
                    <ModalContent />
                  </Dialog>
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
            <div className="imageLayer">
              <img
                className="image"
                src={
                  this.state.schematic
                    ? this.state.schematic.image_url
                    : "Props did not load"
                }
                onClick={this.logPostition.bind(this)}
              />
            </div>
          </ReactCursorPosition>
        </div>

        <Footer
          project={
            this.state.project ? this.state.project : "Props did not load"
          }
        />
        <FloatingActionButton
          onClick={this.activatePins.bind(this)}
          style={pinBtn}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Schematic;
