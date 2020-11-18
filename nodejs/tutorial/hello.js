module.exports = function (params) {
    let payload = params;
    action = payload.action
    number = payload.issue.number;
    title = payload.issue.title;
    console.log("A new Git issue %s action was token for issue %s: %s", action, number, title);
    return {action: action, number:number, title:title};
};
