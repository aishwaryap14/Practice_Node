const { default: mongoose } = require('mongoose')
let MongoSchema = require('../models/model')
let conn = require('./config')
//model
// let connection =  mongoose.createConnection("mongodb://localhost:27017/Practice");
// let aaa = async() => {
//     let model1 =  await connection.model("TableName", MongoSchema)
//     return model1
// }

// console.log("connection: ", connection)
// let mongomod = aaa;
console.log("before service");

exports.serviceFunction = async() => {
    console.log("serviceFunction request: ")
    try{
        let data = await MongoSchema.mongoModel.find({});
        console.log("serviceFunction response data: ", data);
        return data;
    }catch (e) {
        console.log("error in serviceFunction catch block: ", e)
        return e;
    }
}

// module.exports = {serviceFunction}