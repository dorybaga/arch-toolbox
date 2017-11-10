/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import Camera from "../../components/Camera.js";

// import CommentForm from "../Comments/CommentForm.js";

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinImageUrl: "",
      projectId: localStorage.getItem("projectId"),
      pinId: localStorage.getItem("pinId"),
      image: null
    };
  }

  componentDidMount() {
    this.getPinPhoto();
  }

  getPinPhoto() {
    axios
      .get(
        `https://fieldmarkapp.com/api/projects/${this.state
          .projectId}/pin/${this.state.pinId}`
      )
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

  handleImageFile(e) {
    this.setState({
      image: e.target.files[0]
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.imageUpload(this.state.image).then(response => {
      if (response.data.statusCode === 200) {
        this.getPinPhoto();
      } else {
        console.log("unsuccessful, could not post photo");
      }
    });
  }

  imageUpload(image) {
    let userId = localStorage.getItem("loggedInUserId");
    const url = `https://fieldmarkapp.com/api/projects/${this.state
      .projectId}/images`;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("pin_id", this.state.pinId);
    formData.append("user_id", userId);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return axios.post(url, formData, config);
  }

  render() {
    return (
      <div>
        <div className="imageBox">
          <img src={this.state.pinImageUrl} className="imagePreview" />
        </div>
        <Camera
          handleImageFile={this.handleImageFile.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
        {/* <CommentForm /> */}
      </div>
    );
  }
}

export default ModalContent;
