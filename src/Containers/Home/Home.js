import React, { Component } from 'react';
import Login from '../Login/Login.js';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title">Foundation</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default Home;
