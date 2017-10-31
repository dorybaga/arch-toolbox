/*jshint esversion: 6 */
import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="projectBox">
      {projects.map(({ project }) => {
        console.log(project.title);
        return (
          <Link to={`/project/${project.id}`} className="projectItem">
            <h1>{project.id}</h1>
            <h3>{project.title}</h3>
            <p>Location:{project.address}</p>
            <p>Client:{project.client_name}</p>
            <p>Job #{project.job_number}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
