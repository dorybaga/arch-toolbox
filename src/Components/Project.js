/*jshint esversion: 6 */

import React from 'react';

const Project = ({ title, client_name, job_number, address }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ client_name }</h3>
      <h3>{ job_number }</h3>
      <p>{ address }</p>
    </div>
  )
}

export default Project;


