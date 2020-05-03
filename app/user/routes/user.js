const UserController = require('../controllers').UserController;

var router = require('express').Router();

router.post('/', UserController.register);

module.exports = router;
