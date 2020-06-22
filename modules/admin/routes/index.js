//get express router
var router = require('express').Router();

// import controller
// get the model
const adminController = require('../controllers/index')

router.post('/createemployee',adminController.createEmployee)
router.post('/getallemployee',adminController.getAllEmployees)
router.post('/updateemployee',adminController.updateEmployee)

module.exports = router;