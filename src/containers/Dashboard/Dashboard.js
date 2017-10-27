/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Header from '../../components/Header.js';
import { loadProjects } from '../../actions/projects.js';
import ProjectList from '../ProjectList/ProjectList.js';
// import { getProjectsFromFakeXHR } from '../../lib/projects.db.js';


class MobileDash extends Component {

  componentWillMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Dashboard</h1>
        <ProjectList
          data={this.props.data}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => {
      dispatch(loadProjects());
    }
  }
}

const ConnectedMobileDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileDash);

export default ConnectedMobileDash;