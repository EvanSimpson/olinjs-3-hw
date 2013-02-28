var mongoose = require('mongoose');

var schema = mongoose.Schema({customer: String, ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]});
var order = mongoose.model('Order', schema);

module.exports = order;

