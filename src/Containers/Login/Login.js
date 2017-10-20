import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Login.css';
import { loadUsers } from '../../actions/users.js';

class Login extends Component {
  constructor() {
    super();
    this.state ={
      username: '',
      password: ''
    };
  }

  userLogin(e){
    e.preventDefault();
    loadUsers();
    console.log('username:', this.state.username);
    console.log('password:', this.state.password);

  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e){
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
            placeholder="username"
            onChange={this.handleUsername.bind(this)}
           />
           <br/>
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