const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

//parse the request data
app.use(express.json());

//use router
app.use(userRouter, taskRouter);

module.exports = app;