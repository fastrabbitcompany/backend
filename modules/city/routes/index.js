//get express router
var router = require('express').Router();

// import controller
// get the model
const CityController = require('../controllers/index')

router.get('/getall', CityController.getall);
module.exports = router;