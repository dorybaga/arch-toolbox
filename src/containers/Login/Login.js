/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import NoAvatarHeader from "../Header/NoAvatarHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import pinImg from "../../assets/pin.svg";
import "../../index.css";

const style = {
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  textAlign: "center",
  display: "center"
};

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

    axios.post("https://fieldmarkapp.com/api/login", userObj).then(res => {
      localStorage.removeItem("loggedInUserName");
      localStorage.setItem("loggedInUserName", res.data.firstName);
      localStorage.removeItem("loggedInUserId");
      localStorage.setItem("loggedInUserId", res.data.id);
      let username = localStorage.getItem("loggedInUserName");
      let userId = localStorage.getItem("loggedInUserId");
      console.log("username =", username);
      console.log("userId", userId);
      window.location.href = "/dashboard";
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
      <div>
        <NoAvatarHeader />
        <div className="login">
          <div style={style}>
            <Paper zDepth={5}>
              <form>
                <div className="logo">
                  <img src={pinImg} />
                </div>
                <br/>

                <TextField
                  type="text"
                  placeholder="email"
                  onChange={this.handleUsername.bind(this)}
                />
                <br />
                <TextField
                  type="password"
                  placeholder="password"
                  onChange={this.handlePassword.bind(this)}
                />
                <br />
                <br />
                <RaisedButton
                  label="Log In"
                  onClick={this.userLogin.bind(this)}
                />
                <br />
                <br />
              </form>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
