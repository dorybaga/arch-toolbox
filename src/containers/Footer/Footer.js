/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import "../../index.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getPhoto() {
    console.log("fired");
    let projectId = localStorage.getItem("projectId");
    axios
      .get(`/api/projects/${projectId}`)
      .then(function(response) {
        console.log("getPhoto RESPONSE", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="projectFooter">
        <Card style={{ backgroundColor: "#E0E0E0" }}>
          <CardHeader
            title="Project Details"
            subtitle={this.props.project.title}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton
              onClick={this.getPhoto.bind(this)}
              label="Photo Gallery"
            />
            <FlatButton label="Comments" />
          </CardActions>
          <CardText expandable={true}>
            <div>Project ID: {this.props.project.id} </div>
            <div>Project Address: {this.props.project.address} </div>
            <div>Project Client: {this.props.project.client_name} </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Footer;
