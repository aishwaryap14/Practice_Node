let express = require('express');
let router = express.Router()
let control = require('../controllers/controller')

console.log("before routes")

let route1 =  router.get('/get', control.controllerFun)
console.log("After routes", route1)

module.exports = router;