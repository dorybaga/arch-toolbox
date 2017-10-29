/*jshint esversion: 6 */
import React, { Component } from "react";
import Pin from "../../containers/Pin/Pin.js";
import "./SchematicDwg.css";

class SchematicDwg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false,
      pinList: []
    };
  }

  logPostition() {
    if (this.state.activate === true) {
      console.log("x and y =", this.props.position);
      this.setState({
        pinList: [...this.state.pinList, this.props.position]
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
            return <Pin x={pin.x} y={pin.y} />;
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
