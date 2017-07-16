//Look at the research.handlebars sheet for guidance.
var request = require("ajax-request");
var newsAPIKey = "561d192664c14d878f90660ffafa201c";


request('https://newsapi.org/v1/articles?' + 'source=' + 'national-geographic' + '&' + 'sortBy=' + 'top' + '&' + 'apiKey=' + newsAPIKey, function(err, res, body) {});
request('https://newsapi.org/v1/sources?' + 'category=' + 'scienceAndNature' + '&' + 'language=' + 'en' + '&' + 'apiKey=' + newsAPIKey, function(err, res, body) {}) //This is probably more useful, because it filters articles down to 'Science and Nature' category for our Climate Change app.
var keyWords = ["climate", "average temperature", "climate change", "environmental", "global warming", "ocean level", "sea level", "endanger"];
var newsAPIArticle = request({
  url: 'https://newsapi.org/v1/articles',
  method: 'GET',
  data: {
    source: 'national-geographic',
    sortBy: 'top',
    apiKey: newsAPIKey
  },
  parse: true
}, function(err, res, body) {//body is likely where we will get the JSON data from the NewsAPI server.
  if(err){
  	throw err;
  };
  // for(var i = 0, i < keyWords.length, i++){//Look into the match() method to get matching key words.
  // 		for(var j = 0, j < body.length, j++){
		//   	if(body[j].description !== keyWords[i]){
		//   		delete body[j];//This should delete articles which do not contain the climate-change-relevant key words.
	 //  		};
	 //  	};
  // 	};
  // };
  
  console.log(res);
});
var newsAPISource = request({
	url:"https://newsapi.org/v1/souces",
	method:"GET",
	data:{
		category:"science-and-nature",
		language:"en",
		country:""//All countries
	},
	parse:true
}, function(req, res, body){

});
//module.exports = newsAPI;//Export to the server.js

// var webHoseAPI = request({
//   url:""
//   method:"GET", 
//   data:{
//     //Basic query data
//     q:"climate",
//     token:"15882b37-bd74-4282-840d-a3b7e415178b",
//     sort:"relevency",
//     order:"desc",
//     from:"5", //limits number of pages.
//     format:"json",
//     size:"10",
//     accuracy_confidence:"high",
//     //Up next, the filters
//     text:"climate AND temperature",
//     //Now the site filters
//     site_type:"news"
//   },
//   parse:true
// });

// const webhoseio = require('webhoseio');

// const client = webhoseio.config({token: '15882b37-bd74-4282-840d-a3b7e415178b'});
// client.query('filterWebContent', {q: 'github'})
//   .then(output => {
//     console.log(output['posts'][0]['text']); // Print the text of the first post
//     console.log(output['posts'][0]['published']); // Print the text of the first post publication date
// });

// // Get the next batch of posts
// client.getNext()
//   .then(output => {
//     console.log(output['posts'][0]['thread']['site']); // Print the site of the first post
//   });