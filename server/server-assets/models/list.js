var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'List'

var schema = new Schema({
    title: { type: String, required: true },
    date: {type: Date, required: true, default: Date.now()},
    userId: {type: ObjectId, ref: 'User'},
    vineyardwines: [{}],
    userwines: [{}]
});

module.exports = mongoose.model(schemaName, schema);