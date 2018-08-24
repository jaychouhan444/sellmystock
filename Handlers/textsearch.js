const textsearchSchema = require('../Schema/textsearchschema');
const moment = require('moment');

module.exports={
    search(req,res){

        textsearchSchema.create({word:req.payload.word},(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({Message:'Success'})
            }
            else{
                res({Message:'There is some error'})
            }
        })
}
}