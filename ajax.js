//Look at the research.handlebars sheet for guidance.
var request = require("ajax-request");
var newsAPIKey = "561d192664c14d878f90660ffafa201c";


request('https://newsapi.org/v1/articles?' + 'source=' + 'bild' + '&' + 'sortBy=' + 'top' + '&' + 'apiKey=' + newsAPIKey, function(err, res, body) {});
 
var newsAPI = request({
  url: 'https://newsapi.org/v1/articles',
  method: 'GET',
  data: {
    source: 'bild',
    sortBy: 'top',
    apiKey: newsAPIKey
  }
}, function(err, res, body) {//body is likely where we will get the JSON data from the NewsAPI server.
  if(err){
  	throw err;
  };
  console.log(res);
});
//modules.export = newsAPI;//Export to the server.js