const otpSchema = require('../Schema/otpSchema');
const moment = require('moment');
const submitAdSchema = require('../Schema/submitAdSchema');
module.exports={
    verify(req,res){

        console.log('step 1 Logged');
        otpSchema.find({
            "userId": "abc"
        }, {
            "otp": 1,
            "_id": 0 
        },(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                console.log('step 2 Logged'+doc);
                console.log(doc);
                if(doc[0].otp==req.payload.otp){
                    console.log('step 3 Logged'+doc.otp+req.payload.otp)
                    submitAdSchema.updateOne({_id:req.payload.id},
                        {
                            $set:{
                                
                                    "status":"Hey Jay"
                                
                            }
                },(err,doc)=>{
                    if(err){
                        throw err
                    }
                    if(doc){
                        console.log('Step 3 Logged');
                        res({doc,Message:"otp verified"})
                    }
                    else{
                        res({Message:"There is some error"})
                    }
                })
            }
        }
        else{
            res({Message:'There is some error'})
        }

        
    })
}
}