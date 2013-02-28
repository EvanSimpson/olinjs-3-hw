var mongoose = require('mongoose');

var schema = mongoose.Schema({name: String, cost: Number});
var Ing = mongoose.model('Ingredient', schema);

module.exports = Ing;
