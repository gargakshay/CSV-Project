var express = require("express");
var multer  = require('multer');
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   }
// });

// var upload = multer({ storage : storage }).any();

var csv = require('csvtojson');
var path = require('path');
// var index = require('./routes/index');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'angular1/dist/')));
console.log("path******************88", path.join(__dirname, 'angular1/dist/'));
// app.use('/', index);

app.set('view engine', 'html');

app.get('/', function(req, res, next){
    res.send('index.html11111111');
});
router.post('/upload', function(req, res, next){
    res.send('index.html11111111');
    // upload(req, res, function(err) {

    //     if(err){
    //         res.sendStatus(400);
    //         return;
    //     }
        
    //     var arrFiles = req.files;
    //     var arrData = [];

    //     for(let i = 0; i < arrFiles.length; i++){
    //         //Converting CSV to JSON
    //         csv()
    //         .fromFile(arrFiles[i].path)
    //         .on("end_parsed", function(jsonObj){
    //             arrData.push({data: jsonObj, filename: arrFiles[i].originalname});
                
    //             // When file is last then send Response
    //             if(i == arrFiles.length - 1){
    //                 res.send(arrData);
    //             }
    //         })
    //         .on('error',(err)=>{
    //             res.sendStatus(400);
    //         });        
    //     }
    // });
});


app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
})