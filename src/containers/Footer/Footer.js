/*jshint esversion: 6 */
import React, { Component } from "react";
import axios from "axios";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import "../../index.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  getPhoto() {
    console.log("fired");
    axios
      .get("/api/projects/:id")
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
        <Card style={{backgroundColor: "#E0E0E0"}}>
          <CardHeader
            title="Project Details"
            subtitle="subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton onClick={this.getPhoto.bind(this)} label="Photo Gallery" />
            <FlatButton label="Comments" />
          </CardActions>
          <CardText expandable={true}>
            <div>Project ID:</div>
            <div>Project Address:</div>
            <div>Project Client:</div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Footer;
