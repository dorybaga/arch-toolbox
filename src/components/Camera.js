/*jshint esversion: 6 */

import React from "react";

const Camera = () => {
  return (
    <div>
      <p>CAMERA</p>
      <form method="POST" action="/api/images" encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Camera;
