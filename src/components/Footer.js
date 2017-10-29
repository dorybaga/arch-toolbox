/*jshint esversion: 6 */

import React from "react";

const Footer = ({ project }) => {
  console.log(project);
  return (
    <div className="projectFooter">
      <h1>{project.id}</h1>
      <h1>{project.title}</h1>
    </div>
  );
};

export default Footer;
