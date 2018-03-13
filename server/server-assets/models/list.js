var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Comment'

var schema = new Schema({
    body: { type: String, required: true },
    // userID
});

module.exports = mongoose.model(schemaName, schema);