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

var newsBlurAPI = request({
  url:""
  method:"POST", 
  data:{

  },
  parse:true
})