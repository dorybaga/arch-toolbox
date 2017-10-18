import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import projects from './reducers';
import Dashboard from './containers/Dashboard/Dashboard.js';
import Login from './containers/Login/Login.js';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(projects);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to='/'> Login </ Link>
        <Link to='/dashboard'> Dashboard </ Link>

        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();