import React, { Component } from 'react';
import Login from '../Login/Login.js';
import './Dashboard.css';
import Header from '../../Components/Header.js';

// import ProjectList from './ProjectList.js';
// import Project from '../../Components/Project.js';


class MobileDash extends Component {
  constructor() {
    super();


}

  render() {
    return (
      <div>
        <Header />
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default MobileDash;