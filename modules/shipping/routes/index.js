//get express router
var router = require('express').Router();

// import controller
// get the model
const ShippingControllers = require('../controllers/index')

router.post('/createshipping', ShippingControllers.createShipping);
module.exports = router;