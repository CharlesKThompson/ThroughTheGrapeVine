var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Comment'

var schema = new Schema({
    body: { type: String, required: true },
    listId: { type: ObjectId, ref: 'List', required: true },
    userId: {type: ObjectId, ref: 'User', required: true},
    date: {type: Date, required: true, default: Date.now()}
});

module.exports = mongoose.model(schemaName, schema);