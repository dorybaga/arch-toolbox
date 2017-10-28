/*jshint esversion: 6 */

import React from "react";

const Footer = ({ project }) => {
  console.log(project);
  return (
    <div className="projectFooter">
      {project.map(({ project }) => {
        console.log(project.title);
        return (
          <div className="projectDetails">
            <h5>{project.title}</h5>
            <p>Location:{project.address}</p>
            <p>Client:{project.client_name}</p>
            <p>Job #{project.job_number}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
