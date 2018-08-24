const submitAdSchema = require('../Schema/submitAdSchema');
module.exports={
    
    find(req,res){
        submitAdSchema.find({city:req.payload.city,title:{$regex:req.payload.text,$options:'i'}},(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({
                    StatusCode:200,
                    Message:'Success',
                    doc
                })
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },
  
   
 



}




