var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();


const index = require('./routes/index');

const testingRoute = require('./routes/testing.routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors())
app.use(index);

app.use('/api/', testingRoute);

app.listen(3001,function()
{
    console.log('API app started')
})



module.exports = app;