//get express router
var router = require('express').Router();

// import controller
// get the model
const UserController = require('../controllers/index')


router.post('/sign-up', UserController.register);
router.post('/login', UserController.login);
router.post('/check',UserController.checkToken)
module.exports = router;