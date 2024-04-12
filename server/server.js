const express = require('express');
const app = express();
const port = 4000;
var cors = require('cors');
const conn = require('./connectDB');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

//routes
const dashboardRouter = require('./routes/dashboardRoute');
const dumpRouter = require('./routes/dumpRoute')
const loginAndRegisterRouter = require('./routes/loginAndRegisterRoute');

app.use('/dashboard',dashboardRouter);
app.use('/loginAndRegister',loginAndRegisterRouter);
app.use('/dump',dumpRouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


