/*jshint esversion: 6 */

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './Dashboard.css';
import Header from '../../components/Header.js';


class Schematic extends Component {

  componentWillMount() {
      // upload schematic from aws
    }


  render() {
    return (
      <div>
        <Header />
        <h1>Schematic</h1>
      </div>
    );
  }
}


export default Schematic;