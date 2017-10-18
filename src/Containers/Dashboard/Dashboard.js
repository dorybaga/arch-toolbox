/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Header from '../../components/Header.js';
import { loadProjects } from '../../actions/projects.js';
import ProjectList from './ProjectList.js';
import { getProjectsFromFakeXHR } from '../../lib/projects.db.js';


class MobileDash extends Component {
  constructor() {
    super();
}

  componentWillMount() {
      getProjectsFromFakeXHR()
      .then(projectList => {
        this.props.loadProjects(projectList);
      })
      .catch(err => {
        console.log(err);
      });
    }


  render() {
    return (
      <div>
        <Header />
        <h1>Dashboard</h1>
        <ProjectList
          projects={this.props.projects}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: (projects) => {
      dispatch(loadProjects(projects));
    }
  }
}

const ConnectedMobileDash = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileDash);

export default ConnectedMobileDash;