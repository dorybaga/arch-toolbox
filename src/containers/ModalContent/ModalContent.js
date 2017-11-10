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
      pinImageUrl: "",
      projectId: localStorage.getItem("projectId"),
      pinId: localStorage.getItem("pinId")
    };
  }

  componentDidMount() {
    this.getPinPhoto();
  }

  addPhoto() {
    let userId = localStorage.getItem("loggedInUserId");
    let projectId = localStorage.getItem("projectId");
    let newPhoto = {
      pin_id: this.state.currentPinId,
      user_id: userId
    };

    axios
      .post(`/api/projects/${projectId}/images`, newPhoto)
      .then(function(response) {
        console.log(
          "photo from project " + projectId + " was added to the bucket"
        );
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      open: false
    });
  }

  getPinPhoto() {
    // let projectId = localStorage.getItem("projectId");
    // let pinId = localStorage.getItem("pinId");
    axios
      .get(`/api/projects/${this.state.projectId}/pin/${this.state.pinId}`)
      .then(image => {
        if (image.data[0].images.length) {
          this.setState({
            pinImageUrl: image.data[0].images[0].image_url
          });
        } else {
          console.log("no image");
        }
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
