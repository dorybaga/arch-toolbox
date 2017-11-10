/*jshint esversion: 6 */

import React from "react";
// pull pin_id and user_id and

const Camera = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={props.handleImageFile}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Camera;
