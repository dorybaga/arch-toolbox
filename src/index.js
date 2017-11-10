import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./containers/Dashboard/Dashboard.js";
import Login from "./containers/Login/Login.js";
import Schematic from "./containers/Schematic/Schematic.js";

const style = {
  display: 'flex',
};

injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
    <div className="container">
      <Route style={style} exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/project/:id" component={Schematic} />
    </div>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
