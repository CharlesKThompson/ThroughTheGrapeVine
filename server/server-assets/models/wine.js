var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Wine'


var schema = new Schema({
    variety: {type: String },
    type: {type: Array},
    meats: {
        pairs: Array,
        perfectPairs: Array
    },
    dairy: {
        pairs: Array,
        perfectPairs: Array
    },
    vegetables: {
        pairs: Array,
        perfectPairs: Array
    },
    starches: {
        pairs: Array,
        perfectPairs: Array
    },
    sweets: {
        pairs: Array,
        perfectPairs: Array
    }
});

module.exports = mongoose.model(schemaName, schema);