/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  userLogin(e) {
    e.preventDefault();
    let userObj = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/api/login", userObj).then(res => {
      console.log(res);
    });
    console.log("email:", this.state.email);
    console.log("password:", this.state.password);
  }

  handleUsername(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1 className="Login-title">Login</h1>
        </header>
        <form>
          <p>Please login</p>
          <input
            type="text"
            placeholder="email"
            onChange={this.handleUsername.bind(this)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.handlePassword.bind(this)}
          />
          <br />
          <button onClick={this.userLogin.bind(this)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
