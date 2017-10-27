/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Dashboard.css';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { loadProjectById } from '../../actions/projects.js';



class Schematic extends Component {
  constructor(props) {
    super(props);
    this.projectId = props.match.params.id;
    console.log(this.props);
  }

  componentWillMount() {
    this.props.loadProjectById(this.projectId);
    console.log('projectId is:', this.projectId);
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjectById: (projectId) => {
      dispatch(loadProjectById(projectId));
    }
  }
}

const ConnectedSchematic = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schematic);

export default ConnectedSchematic;