/*jshint esversion: 6 */

import React from "react";
import { Link } from "react-router-dom";


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
      <Link to={projectRoute} className="projectItem">
        <h1>{projectId}</h1>
        <h3>{title}</h3>
        <p>Location:{address}</p>
        <p>Client:{client_name}</p>
        <p>Job #{job_number}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
