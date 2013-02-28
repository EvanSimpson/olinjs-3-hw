var Ord = require('../models/order');
var Ing = require('../models/ingredient');


exports.index = function(req, res){
	Ord.find().exec(function(err, docs){
		res.render('orders', {orders: docs, title: "Current Orders"});
	});
};

exports.new = function(req, res){
	Ing.find().sort('-cost').exec(function(err, docs){
		res.render('order_form', {ingredients: docs, title: "Place an Order"});
	});
};

exports.create = function(req, res){
	console.log(req.body);
	var order = new Ord({customer: req.body.name, ingredients: req.body.ingredient});
	order.save(function(err){
		res.redirect('/orders');
	});
};

exports.complete = function(req, res){
	console.log(req.body);
	Ord.findOneAndRemove({_id: req.body.id}).exec(function(err, docs){
		res.redirect('/orders');
	});
};
