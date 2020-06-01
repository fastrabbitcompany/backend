//get express router
var router = require('express').Router();

// import controller
// get the model
const adminController = require('../controllers/index')

router.post('/Employee',adminController.createEmployee)
router.post('/Employee',adminController.getAllEmployees)
router.post('/Employee',adminController.updateEmployee)

module.exports = router;