import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addComment() {
    console.log("added comment");
    // axios
    //   .post("/api/comments", newComment)
    //   .then(response => {
    //     console.log("new pin id", response.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.addComment.bind(this)}
      />
    ];
    return (
      <div>
        <form method="POST" action={`/api/comments`}>
          <TextField
            hintText="Enter Comment"
            fullWidth={true}
            actions={actions}
          />
        </form>
      </div>
    );
  }
}

export default CommentForm;
