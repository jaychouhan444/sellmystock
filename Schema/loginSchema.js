const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const loginSchema = new Schema({
    adminId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('admindetails',loginSchema);