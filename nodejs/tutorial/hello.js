module.exports = function (params) {
    let payload = params;
    number = payload.issue.number;
    title = payload.issue.title;
    console.log("A new Git issue action was token: Issue %s - %s", number, title);
    return {number:number, title:title};
};
