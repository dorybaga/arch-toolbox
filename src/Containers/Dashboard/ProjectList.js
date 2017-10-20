import React, { Component } from 'react';
import Project from '../../components/Project.js';

class ProjectList extends Component {
  render(){
    return (
      <ul>
        {
          this.props.data
            .map( data => {
              return (
                <Project
                  title={data.project.title}
                  client_name={data.project.client_name}
                  job_number={data.project.job_number}
                  address={data.project.address}
                />
              )
            })
        }
      </ul>
    );
  }
}

export default ProjectList;

