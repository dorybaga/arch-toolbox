/*jshint esversion: 6 */

import React from 'react';
import defaultPic from './default-user.png';

const Avatar = () => {
  return (
    <div>
      <img src={ defaultPic } alt="profile pic" height="25" width="25" />
    </div>
  )
}

export default Avatar;