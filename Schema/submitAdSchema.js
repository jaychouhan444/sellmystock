

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const submitAdSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    categoryId:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    mob:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    nearBy:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    expire: { type: Number }
},{
    timestamps: true
  });
module.exports=mongoose.model('submitad',submitAdSchema);