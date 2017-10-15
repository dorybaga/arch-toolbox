import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import Dashboard from './Containers/Dashboard/Dashboard.js';
import Login from './Containers/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Link to='/'> Login </ Link>
      <Link to='/dashboard'> Dashboard </ Link>

      <Route exact path='/' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  </ Router>
), document.getElementById('root'));