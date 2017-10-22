/*jshint esversion: 6 */

import React from "react";

const ProjectItem = ({
  title,
  client_name,
  job_number,
  address,
  projectId
}) => {
  const projectRoute = "/project/" + projectId;
  console.log(projectRoute);

  return (
    <div className="projectBox">
      <a href={projectRoute} className="projectItem">
        <h1>{projectId} </h1>
        <h3>{title}</h3>
        <p>Location: {address}</p>
        <p>Client: {client_name}</p>
        <p>Job #{job_number}</p>
      </a>
    </div>
  );
};

export default ProjectItem;
