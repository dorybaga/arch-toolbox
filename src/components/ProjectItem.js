/*jshint esversion: 6 */

import React from 'react';

const ProjectItem = ({ title, client_name, job_number, address }) => {
  return (
    <div className='projectBox'>
      <a href='/schematic' className='projectItem'>
        <h3>{ title }</h3>
        <p>Location: { address }</p>
        <p>Client: { client_name }</p>
        <p>Job #{ job_number }</p>
      </a>
    </div>
  )
}

export default ProjectItem;
