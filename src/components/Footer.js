/*jshint esversion: 6 */
import React from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import "../index.css";

const style = {
};

const Footer = ({ project }) => {
  return (
    <div className="projectFooter">
      <Card>
        <CardHeader
          title="Project Details"
          subtitle={project.title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Photo Gallery" />
          <FlatButton label="Comments" />
        </CardActions>
        <CardText expandable={true}>
          <div>Project ID: {project.id}</div>
          <div>Project Address: {project.address}</div>
          <div>Project Client: {project.client_name}</div>
        </CardText>
      </Card>
    </div>
  );
};

export default Footer;
