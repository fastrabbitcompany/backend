//get express router
var router = require('express').Router();

// import controller
// get the model
const ShippingControllers = require('../controllers/index')

router.post('/createshipping', ShippingControllers.createShipping);
router.post('/getshippings',ShippingControllers.getAllShippings);
router.post('/getshippingsuser',ShippingControllers.getAllShippingsForUser);
module.exports = router;