let service = require('../services/service')
console.log("before Controller")
exports.controllerFun = async(req, res) => {
    // console.log("controllerFun request: ", req);
    // let error = req.validationErrors();
    try {
        // if (error){
        //     res.status(400).send(error);
        // } else {
            console.log("before in controller")
            let resdata = await service.serviceFunction();
            console.log("controllerFun response data: ", resdata)
            res.status(200).send(resdata)
        // }
    }catch (e) {
        console.log("error in controllerFun by service: ", e);
        res.status(500).send(e);
    }
}
