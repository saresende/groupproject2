var express = require("express");

var router = express.Router();

var climate = ("../models/climate.js");

var user 

router.get("/research", function (req, res) {
	climate.all(function(data) {
		var researchObj = {
			climate: data
		}
	
	console.log(researchObj);
	res.render('research', researchObj);
	});
});

router.post('/research', function(req, res) {
	
})