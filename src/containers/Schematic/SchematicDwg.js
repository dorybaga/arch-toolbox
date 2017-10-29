/*jshint esversion: 6 */

import React, { Component } from "react";

class SchematicDwg extends Component {
  constructor(props) {
    super(props);
  }

  logPostition() {
    console.log("x and y =", this.props.position);
  }

  render() {
    return (
      <div>
        <img
          src={this.props.image}
          onClick={this.logPostition.bind(this)}
          alt="#"
        />
      </div>
    );
  }
}

export default SchematicDwg;
