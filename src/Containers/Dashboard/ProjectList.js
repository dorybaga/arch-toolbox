import React, { Component } from 'react';
import Project from '../../components/Project.js';

class ProjectList extends Component {
  render(){
    return (
      <ul>
        {
          this.props.projects
            .map( project => {
              return (
                <Project
                  title={project.title}
                  client_name={project.client_name}
                  job_number={project.job_number}
                  address={project.address}
                />
              )
            })
        }
      </ul>
    );
  }
}

export default ProjectList;

