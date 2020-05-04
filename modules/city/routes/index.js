//get express router
var router = require('express').Router();

// import controller
// get the model
const CityController = require('../controllers/index')

router.post('/getall', CityController.getall);
module.exports = router;