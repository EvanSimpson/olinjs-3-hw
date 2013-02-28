var Ing = require('../models/ingredient');

exports.new = function(req, res){
	Ing.find().sort('-cost').exec(function(err, docs){
		res.render('ingredient', {ingredients: docs, title: "Make an Ingredient"});
	});
};

exports.create = function(req, res){
	var ingredient= new Ing({name: req.body.name, cost: parseInt(req.body.cost)});
	ingredient.save(function(err){
		if (err){
			console.log(err);
		}
		res.redirect('/ingredient');
	});
};

exports.delete = function(req, res){
	console.log(req.body)
	Ing.find({name: req.body.name}).remove().exec(function (err, docs){
		res.redirect('/ingredient');
	});
};