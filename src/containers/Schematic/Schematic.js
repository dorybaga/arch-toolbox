/*jshint esversion: 6 */

import React, { Component } from "react";
// import './Dashboard.css';
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { getProjectById } from "../../lib/projects-api";

class Schematic extends Component {
  constructor(props) {
    super(props);
    this.projectId = props.match.params.id;
  }

  componentWillMount() {
    getProjectById(this.projectId);
    console.log("projectId is:", this.projectId);
    console.log("this.props", this.props.data);
    // upload schematic from aws
  }

  componentDidMount() {
    console.log("didmount", this.props.data);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Schematic</h1>
        <Footer />
      </div>
    );
  }
}

export default Schematic;
