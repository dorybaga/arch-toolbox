/*jshint esversion: 6 */
import React from "react";

const Footer = ({ project }) => {
  console.log(project);
  return (
    <div className="projectFooter">
      <h3>{project.title}</h3>
      <p>Job# {project.job_number}</p>
      <p>Address: {project.address}</p>
      <p>Client: {project.client_name}</p>
    </div>
  );
};

export default Footer;
