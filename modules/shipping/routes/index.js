//get express router
var router = require('express').Router();

// import controller
// get the model
const ShippingControllers = require('../controllers/index')

router.post('/createshipping', ShippingControllers.createShipping);
router.get('/getshippings',ShippingControllers.getAllShippings);
router.get('/getshippingsuser',ShippingControllers.getAllShippingsForUser);
module.exports = router;