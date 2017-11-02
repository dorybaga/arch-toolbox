/*jshint esversion: 6 */
import React from 'react';
import Avatar from './Avatar/Avatar.js';

const Header = () => {
  return (
    <div className="header">
      <h3 className="appName"> Foundation </h3>
      <div className="userPic">
        <Avatar />
      </div>
    </div>
  )
}

export default Header;


// logout code:
// localStorage.removeItem('loggedInUserName');
// localStorage.setItem('loggedInUserName', '');
// window.location.href = '/login';