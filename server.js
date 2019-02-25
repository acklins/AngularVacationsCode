var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
path = require('path'),
models = require('./server/models/vacation.js'),
db_connect = require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public')));
require("./server/config/routes.js")(app);

var server = app.listen(8000, function(){
    console.log("listening on port 8000");
})