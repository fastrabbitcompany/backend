require('dotenv').config();
const express = require('express');
const cors = require('cors');

const AccountRouter = require('./app/authentication/routes').AccountRouter;
const AuthenticationRouter = require('./app/authentication/routes')
  .AuthenticationRouter;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/accounts', AccountRouter);
app.use('/api/auth', AuthenticationRouter);

module.exports = app;
