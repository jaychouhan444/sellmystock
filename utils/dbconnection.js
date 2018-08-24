module.exports=[];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/olx');
//mongoose.connect('mongodb://astuteuser1:astute123@ds113640.mlab.com:13640/astute');
//mongodb://astuteuser:astute@007@ds113640.mlab.com:13640/astute
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection-error'));
db.once('open',function callback(){
    console.log('HapiJs MongoDb Database Connection successfull');
})