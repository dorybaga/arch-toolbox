/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "../../index.css";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Test</h1>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
