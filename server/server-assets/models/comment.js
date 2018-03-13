var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Comment'

var schema = new Schema({
    body: { type: String, required: true },
    listId: { type: ObjectId, ref: 'List', required: true }
    // add this --> userId: 
});

module.exports = mongoose.model(schemaName, schema);