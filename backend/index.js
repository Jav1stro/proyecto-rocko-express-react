const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const indexRouter = require('./routes/indexRoutes');
const holaRouter = require('./routes/holaRoutes');
const apiRouter = require("./routes/api/apiRoutes");


app.use('/', indexRouter);
app.use('/hola', holaRouter);
app.use('/api', apiRouter);


const port = 3001;

app.listen(port,()=>{
    console.log('listening on port '+ port);
});