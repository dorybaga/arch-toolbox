import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state ={
      userInput:''
    };

  }

  verifyUser(){
    // check if username exists
    // check if password is correct

  }

  userLogin(){
    this.props.verfiyUser(this.state.userInput);
  }

  handleUserLogin(e){
    console.log(e.target.value);
    this.setState({
      userInput: e.target.value
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
            onChange={this.handleUserLogin.bind(this)}
           />
           <br/>
           <input
            type="text"
            placeholder="password"
            onChange={this.handleUserLogin.bind(this)}
           />
           <br />
           <button onClick={this.userLogin.bind(this)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
