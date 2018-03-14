var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'WineLabel'


var schema = new Schema({
    variety: {type: String, enum: ["Bold Red", "Medium Red", "Light Red", "Rose", "Rich White", "Light White", "Sparkling", "Sweet White", "Dessert"] },
    brandName: {type: String},
    type: {type: String, required: true},
    img: {type: String}, 
    price: {type: Number},
    location: {type: String},
    description: {type: String},
    pairings: {type: String},
    recipes: {type: String}
});

module.exports = mongoose.model(schemaName, schema);