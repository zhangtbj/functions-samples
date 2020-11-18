module.exports = function (params) {
  let payload = params;
  number = payload.issue.number;
  title = payload.issue.title;
  return {number:number, title:title};

  console.log("A new issue action was token.");
};
