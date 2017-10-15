import React, { Component } from 'react';
import Login from '../Login/Login.js';
import './Dashboard.css';
import Header from '../../Components/Header.js';

class Dashboard extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <Header />
          <h1 className="Dashboard-title">Project Dashboard</h1>
        </header>
      </div>
    );
  }
}

export default Dashboard;
