//get express router
var router = require('express').Router();

// import controller
// get the model
const UserController = require('../controllers/index')


router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;