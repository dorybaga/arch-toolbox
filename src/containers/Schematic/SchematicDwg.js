/*jshint esversion: 6 */

import React, { Component } from "react";

class SchematicDwg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false
    };
  }

  logPostition() {
    if (this.state.activate === true){
     console.log("x and y =", this.props.position);
   } else {
    console.log('hit the button');
   }

  }

  activatePins(){
    this.setState({
      activate: true
    });
    console.log('can I drop a pin:', this.state.activate);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.image}
          onClick={this.logPostition.bind(this)}
          alt="#"
        />
        <div>
        <button onClick={this.activatePins.bind(this)}>Drop Pins</button>
        </div>

      </div>
    );
  }
}

export default SchematicDwg;
