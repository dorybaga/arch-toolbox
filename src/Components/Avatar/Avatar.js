/*jshint esversion: 6 */
import React from 'react';
import defaultPic from './default-user.png';

const Avatar = () => {
  return (
    <div>
      <img src={ defaultPic } alt="profile pic" height="42" width="42" />
    </div>
  )
}

export default Avatar;