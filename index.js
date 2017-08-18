var express = require("express");
var path = require('path');
var index = require('./routes/index');

var app = express();

app.use(express.static(path.join(__dirname, 'angular/dist/')));
app.use('/', index);

app.listen(5000, function(){
    console.log("Server Started");
})