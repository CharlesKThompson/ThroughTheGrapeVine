var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'UserWine'
var Comments = require('../models/comment');


var schema = new Schema({
    variety: {type: String, enum: ["Bold Red", "Medium Red", "Light Red", "Rose", "Rich White", "Light White", "Sparkling", "Sweet White", "Dessert"] },
    brandName: {type: String},
    type: {type: String, required: true},
    img: {type: String}, 
    price: {type: Number},
    location: {type: String},
    description: {type: String},
    pairings: {type: String},
    recipes: {type: String},
    userId: {type: ObjectId, ref: 'User', required: true},
    listId: {type: ObjectId, ref: 'List', required: true}
});


schema.post('remove', function (next) {
    Comments.remove({listId: this._id}).exec();
})

module.exports = mongoose.model(schemaName, schema);