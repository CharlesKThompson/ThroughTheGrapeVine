var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'VineyardWine'
var Comments = require('../models/comment');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    variety: {type: String},
    comments: [{}]
});

schema.post('remove', function (next) {
    Comments.remove({listId: this._id}).exec();
})

module.exports = mongoose.model(schemaName, schema);