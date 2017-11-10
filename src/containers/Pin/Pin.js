/*jshint esversion: 6 */
import React, { Component } from "react";
import pinImg from "../../assets/pin.svg";

class Pin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pinStyles = {
      position: "absolute",
      top: `${this.props.y}px`,
      left: `${this.props.x}px`
    };
    return (
      <div>
        <div className="pin" style={pinStyles}>
          <img src={pinImg} alt={"pin"} />
        </div>
      </div>
    );
  }
}

export default Pin;
