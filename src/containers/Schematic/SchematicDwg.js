/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";

class SchematicDwg extends Component {
  constructor(props) {
    super(props);
    };
  }


  render() {
    return (
      <div className="drawing">
        <img src={this.props.image}/>
      </div>
    )
  }
}

export default SchematicDwg;
