/*jshint esversion: 6 */
import React, { Component } from "react";
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import "../../index.css";

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Header extends Component {
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
        <AppBar style={{ backgroundColor: '#9E9E9E'}}
          title={<span style={styles.title}>BluePrint</span>}
          onTitleTouchTap={this.redirectDashboard.bind(this)}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.userLogout.bind(this)}
          iconElementRight={<Avatar src="https:www.politiplatform.com/img/politicians/donald_trump/avatar.jpg" />}
        />
      </div>
    );
  }
}

export default muiThemeable()(Header);