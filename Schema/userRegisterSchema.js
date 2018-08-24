const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userRegisterSchema = new Schema({
    name:{type:String,required:true,default:'olxUser'},
    mob:{type:String,default:''},
     emailId:{type:String,required:true},
    // gender:{type:String,required:true},
    password:{type:String,default:''}
    

});
module.exports=mongoose.model('userRegister',userRegisterSchema);