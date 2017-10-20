
export const getProjectsFromDB = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      var parseData = JSON.parse(this.responseText);
      resolve(parseData);
    });

    oReq.open("GET", "/api/projects");
    oReq.send();
  });
};