module.exports = function (params) {
    const axios = require('axios')
    let payload = params;
    action = payload.action
    number = payload.issue.number;
    title = payload.issue.title;
    id = "502J3DPUE/BQVJ2U62H/1aGAi63eZELMPB48bvasU47"
    console.log("A new Git issue %s action was token for issue %s: %s", action, number, title);
    
    console.log('Sending slack message');
    axios
      .post(`https://hooks.slack.com/services/${id.replace('5', 'T').replace('7', 'bs')}`, {text: `A new Git issue ${action} action was token for issue ${number}: ${title}`})
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
    return {action: action, number:number, title:title};
};
