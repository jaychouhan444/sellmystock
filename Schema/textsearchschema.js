const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const textsearchSchema = new Schema({
    adId:{
        type:String,
        required:true
    },
    word:{
        type:String,
        required:true
    },
    
}
);
module.exports=mongoose.model('textsearch',textsearchSchema);