/*jshint esversion: 6 */
import React, { Component } from "react";
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import "../../index.css";

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const chevron ={
  margin: 10
};

const style = {margin: 5};

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
          title={<span style={styles.title}>App Name</span>}
          iconElementLeft={<i style={chevron} class="material-icons">chevron_left</i>}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem onClick={this.userLogout.bind(this)} primaryText="Logout" />
            </IconMenu>
          }
          onLeftIconButtonTouchTap={this.redirectDashboard.bind(this)}

        />
      </div>
    );
  }
}

export default muiThemeable()(Header);