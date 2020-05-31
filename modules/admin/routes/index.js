//get express router
var router = require('express').Router();

// import controller
// get the model
const adminController = require('../controllers/index')

router.post('/Employee',adminController.createEmployee)
router.get('/Employee',adminController.getAllEmployees)

module.exports = router;