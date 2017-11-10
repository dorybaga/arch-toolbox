/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";

import Camera from "../../components/Camera.js";
// import CommentForm from "../Comments/CommentForm.js";
import Thumbnails from "../../components/Thumbnails.js";

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinImageUrl: ""
    };
  }

  componentDidMount() {
    this.getPinPhoto();
  }

  getPinPhoto() {
    let projectId = localStorage.getItem("projectId");
    let pinId = localStorage.getItem("pinId");
    axios.get(`/api/projects/${projectId}/pin/${pinId}`).then(image => {
      this.setState({
        pinImageUrl: image.data[0].images[0].image_url
      });
    });
  }

  render() {
    // console.log(this.state.pinImageUrl);
    return (
      <div>
        <img src={this.state.pinImageUrl} />
        <Thumbnails />
        <Camera />
        {/* <CommentForm /> */}
      </div>
    );
  }
}

export default ModalContent;
