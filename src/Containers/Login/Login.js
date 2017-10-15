import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1 className="Login-title">Login</h1>
        </header>

        <form>
          <p>Please login</p>
        </form>


      </div>
    );
  }
}

export default Login;
