//get express router
var router = require('express').Router();

// import controller
// get the model
const ConnectionController = require('../controllers/index')

router.post('/quote', ConnectionController.getQuote);
module.exports = router;