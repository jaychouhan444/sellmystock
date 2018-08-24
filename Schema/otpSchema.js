const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const otpSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }

},{
    timestamps: true
    }
);
module.exports=mongoose.model('otp',otpSchema);
