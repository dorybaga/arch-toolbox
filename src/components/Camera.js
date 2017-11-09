/*jshint esversion: 6 */

import React from "react";
// pull pin_id and user_id and

const Camera = () => {
  let userId = localStorage.getItem("loggedInUserId");
  let pinId = localStorage.getItem("pinId");
  let projectId = localStorage.getItem("projectId");

  return (
    <div>
      <form
        method="POST"
        action={`/api/projects/${projectId}/images`}
        encType="multipart/form-data"
      >
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="pin_id" value={pinId} />
        <input type="text" name="user_id" value={userId} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Camera;
