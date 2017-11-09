/*jshint esversion: 6 */
import React, { Component } from "react";
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import "../../index.css";

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class NoAvatarHeader extends Component {
  constructor() {
    super();
  }

  userLogout(){
    localStorage.removeItem('loggedInUserName');
    window.location.href = '/';

  }

  redirectDashboard(){
    window.location.href = '/dashboard';

  }

  render() {
    return (
      <div className="header">
        <AppBar
          title={<span style={styles.title}>FieldMarker</span>}
          onTitleTouchTap={this.redirectDashboard.bind(this)}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.userLogout.bind(this)}
        />
      </div>
    );
  }
}

export default muiThemeable()(NoAvatarHeader);