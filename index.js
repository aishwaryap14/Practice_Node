console.log("hello..");
let express = require('express')
let bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
let route = require('./routes/route')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

(async() => {
    try{
        mongoose.connect("mongodb://localhost:27017/Practice", { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("database connected")
    }catch(e){
        console.log("error in database: ", e);
    }
    
})();

app.listen(3005, () => {
    console.log("server listening to port 3005")
})

app.use('/', route)