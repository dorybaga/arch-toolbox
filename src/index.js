import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import Home from './Containers/Home/Home.js';
import Login from './Containers/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Link to='/'> Home </ Link>
      <Link to='/login'> Login </ Link>

      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </div>
  </ Router>
), document.getElementById('root'));