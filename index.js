var express = require("express");
// var path = require('path');
// var index = require('./routes/index');

var app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(path.join(__dirname, 'angular1/dist/')));
// app.use('/', index);

app.get('/', function(req, res, next){
    res.send('index.html');
});

app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
})