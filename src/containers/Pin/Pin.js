/*jshint esversion: 6 */
import React, { Component } from "react";

class Pin extends Component {
  constructor(props) {
    super(props);
    console.log("these are the props", this.props);
  }

  // pinStyles() {
  //   return {
  //     position: "absolute",
  //     top: `${this.props.y}px`,
  //     left: `${this.props.x}px`
  //     // width: "5px"
  //   };
  // }

  render() {
    const pinStyles = {
      position: "absolute",
      top: `${this.props.y}px`,
      left: `${this.props.x}px`
    };
    return (
      <div style={pinStyles}>
        <p>PIN</p>
      </div>
    );
  }
}

export default Pin;
