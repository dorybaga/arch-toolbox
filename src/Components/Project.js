/*jshint esversion: 6 */

import React from 'react';

const Project = ({ title, client_name, job_number, address }) => {
  return (
    <div>
      <h3>{ title }</h3>
      <p>Location: { address }</p>
      <p>Client: { client_name }</p>
      <p>Job #{ job_number }</p>
    </div>
  )
}

export default Project;


