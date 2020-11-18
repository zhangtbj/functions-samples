module.exports = function (params) {
    let payload = params;
    action = payload.action
    number = payload.issue.number;
    title = payload.issue.title;
    id = "502J3DPUE/B01EXET47AR/7uL8jEtX6o6wvMdguTTFIRya"
    console.log("A new Git issue %s action was token for issue %s: %s", action, number, title);
    
    console.log('Sending slack message');
    var request = require('request');

    var myJSONObject = {text: `A new Git issue ${action} action was token for issue ${number}: ${title}`};
    request({
        url: `https://hooks.slack.com/services/${id.replace('5', 'T')}`,
        method: "POST",
        json: true, 
        body: myJSONObject
    }, function (error, response, body){
        console.log(response);
    });
    return {action: action, number:number, title:title};
};
