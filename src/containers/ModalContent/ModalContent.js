/*jshint esversion: 6 */
import React, { Component } from "react";
import Camera from "../../components/Camera.js";

class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Camera />
      </div>
    );
  }
}

export default ModalContent;
