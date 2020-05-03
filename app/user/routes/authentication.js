const AuthenticationController = require('../controllers')
  .AuthenticationController;
const UserController = require('../controllers').UserController;

var router = require('express').Router();

router.post('/sign-up', UserController.register);
router.post('/login', AuthenticationController.authenticate);
router.post(
  '/login-with-token',
  AuthenticationController.authenticateWithToken
);
router.post(
  '/sign-out',
  AuthenticationController.authorize,
  AuthenticationController.disavow
);

module.exports = router;
