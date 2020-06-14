const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// //custome middleware function to validate token
// app.use((req, res, next) => {
//     if (req.method === "GET") {

//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Server is under maintenance. Check back soon!!');
// });



//parse the request data
app.use(express.json());

//use router
app.use(userRouter, taskRouter);

//Start server
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});