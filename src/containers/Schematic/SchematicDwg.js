/*jshint esversion: 6 */
import React, { Component } from "react";
import Pin from "../../containers/Pin/Pin.js";
import ModalContent from "../../containers/ModalContent/ModalContent.js";
import axios from "axios";
import "./SchematicDwg.css";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class SchematicDwg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false,
      pinList: [],
      modalIsOpen: false
    };
  }

  openModal(){
    console.log('I am working');
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  logPostition() {
    if (this.state.activate === true) {
      let username = localStorage.getItem('loggedInUserName');
      let userId = localStorage.getItem('loggedInUserId');
      let schematicId = localStorage.getItem('schematicId');
      let projectId = localStorage.getItem('projectId');
      console.log("projectId", projectId);
      console.log("schematicId", schematicId);
      console.log("username =", username);
      console.log("userId", userId);
      console.log("x and y =", this.props.position);
      console.log("x", this.props.position.x);
      console.log("y", this.props.position.y);
      let newPin = {
        x: this.props.position.x,
        y: this.props.position.y,
        user_id: userId,
        project_id: projectId,
        schematic_id: schematicId
      };

      axios.post('/api/pins', newPin)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({
        pinList: [...this.state.pinList, this.props.position],
        activate: false
      });
    } else {
      console.log("hit the button");
    }
  }

  activatePins() {
    this.setState({
      activate: true
    });
    console.log("can I drop a pin:", this.state.activate);
  }

  render() {
    const pinLayer = {
      position: "relative",
      width: "100%",
      height: "100%"
    };
    return (
      <div className="schematicCanvas">
        <div className="pinLayer" style={pinLayer}>
          {this.state.pinList.map(pin => {
            return (
              <div>
              <div>
                <a onClick={this.openModal.bind(this)}><Pin x={pin.x} y={pin.y} /></a>
              </div>

              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal.bind(this)}
                style={customStyles}
                >
                <button onClick={this.closeModal.bind(this)}>close</button>
                <div>
                  <ModalContent />
                </div>
              </Modal>

              </div>
            )
          })}
        </div>
        <div className="imageLayer">
          <img
            src={this.props.image}
            onClick={this.logPostition.bind(this)}
            alt="#"
          />
        </div>
        <div>
          <button onClick={this.activatePins.bind(this)}>Drop Pins</button>
        </div>
      </div>
    );
  }
}

export default SchematicDwg;
