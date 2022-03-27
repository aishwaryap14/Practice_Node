let mongoose = require('mongoose')

MongoSchema = mongoose.Schema({
    Country:{type: String},
    FromDate:{type: String},
    ToDate:{type: String},
    Price:{type: Number}
})

exports.mongoModel = mongoose.model("TableName", MongoSchema)
// module.exports = {MongoSchema}