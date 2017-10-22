import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import projects from "./reducers";
import Dashboard from "./containers/Dashboard/Dashboard.js";
import Login from "./containers/Login/Login.js";
import Schematic from "./containers/Schematic/Schematic.js";

import registerServiceWorker from "./registerServiceWorker";

let store = createStore(projects, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="navBar">
        <Link to="/"> Login </Link>
        <Link to="/dashboard"> Dashboard </Link>

        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/project/:id" component={Schematic} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
