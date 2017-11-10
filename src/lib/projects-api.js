/*jshint esversion: 6 */
export const getProjectsFromDB = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      var parseData = JSON.parse(this.responseText);
      resolve(parseData);
    });

    oReq.open("GET", "https://fieldmarkapp.com/api/projects");
    oReq.send();
  });
};

export const getProjectById = projectId => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      var parseData = JSON.parse(this.responseText);
      console.log("RESPONSE", parseData);
      resolve(parseData);
    });

    oReq.open("GET", `https://fieldmarkapp.com/api/projects/${projectId}`);
    oReq.send();
  });
};
