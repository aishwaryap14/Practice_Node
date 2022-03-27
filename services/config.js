let mongoose = require('mongoose')

module.exports = {
    dbConn : async() => {
        console.log("db connected");
        return  mongoose.createConnection("mongodb://localhost:27017/Practice");
        
    }
}
