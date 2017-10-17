import React from 'react';

const Project = ({ title, job_number, client_name }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ job_number }</h3>
      <h3>{ client_name }</h3>
    </div>
  )
}

export default Project;