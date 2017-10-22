import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem.js";

class ProjectList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(data => {
          return (
            <ProjectItem
              title={data.project.title}
              client_name={data.project.client_name}
              job_number={data.project.job_number}
              address={data.project.address}
              projectId={data.project.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default ProjectList;
