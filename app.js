require('dotenv').config();
const express = require('express');
const cors = require('cors');

const UserRouter = require('./app/user/routes').UserRouter;
const AuthenticationRouter = require('./app/user/routes')
  .AuthenticationRouter;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/accounts', UserRouter);
app.use('/api/auth', AuthenticationRouter);

module.exports = app;
