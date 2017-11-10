/*jshint esversion: 6 */

import React from "react";
// pull pin_id and user_id and

const Camera = props => {
  let userId = localStorage.getItem("loggedInUserId");
  let pinId = localStorage.getItem("pinId");
  let projectId = localStorage.getItem("projectId");

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={props.handleImageFile}
        />
        <input type="text" name="pin_id" value={pinId} />
        <input type="text" name="user_id" value={userId} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Camera;
