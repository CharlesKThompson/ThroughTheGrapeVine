var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'Wine'


var schema = new Schema({
    variety: { type: String, required: true },
    type: {
        name: String,
        description: String
    },
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

// schema.post('remove', function (next) {
//     // This deletes where boardId = current boardId (board & all it's children)
//     Lists.remove({ boardId: this._id }).exec();
//     Tasks.remove({ boardId: this._id }).exec();
//     Comments.remove({ boardId: this._id }).exec();
// });


module.exports = mongoose.model(schemaName, schema);