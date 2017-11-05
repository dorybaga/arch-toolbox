/*jshint esversion: 6 */
import React from "react";
import { Link } from "react-router-dom";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Divider from 'material-ui/Divider';
import "../index.css";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="projectBox">
      {projects.map(({ project }) => {
        console.log(project.title);
        return (
          <Link to={`/project/${project.id}`} className="projectItem">
          <List>
            <ListItem
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText={project.title}
              secondaryText={project.job_number}
            />
            <Divider inset={true} />
            </List>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
