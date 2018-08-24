const userRegisterSchema = require('../Schema/userRegisterSchema');
const hashing = require('../utils/passwordHash').hashPassword;
const jwt = require('jsonwebtoken');
const secretKey=require('../Utils/secret');
module.exports={
    create(req,res){
        // hashing(req.payload.pwd, (err, hash) => {
        //     if (err) {
                
        //       res(err);
        //     }
        //     if(hash){
        //         const abc = module.exports=hash;
        //         res({
        //             hash
        //         })
        //     }
        //     else{
        //         console.log('error')
        //     }
        // })
        //console.log('Hello'+abc);
         var type = req.payload.type;
         if(type=='N'){
            hashing(req.payload.password, (err, hash) => {
                if (err) {
                        throw err;
                }
                if(hash){
                    userRegisterSchema.create({
                        name:req.payload.name,
                        mob:req.payload.mob,
                         emailId:req.payload.emailId,
                        // gender:req.payload.gender,
                        password:hash,
                    },(err,doc)=>{
                        if(err){
                            throw err
                        }
                        if(doc){
                            res({
                                StatusCode:'200',
                                Message:'Success',
                                doc
                            })
                        }
                        else{
                            res({
                                StatusCode:'201',
                                Message:'Fail'
                                
                            })
                        }
                    })
                }
                else{
                    res({Message:'Some error'});
                }
            })
            
         }
         if(type=='F'){
             var user = req.payload.emailId;
             userRegisterSchema.find({emailId:user},(err,doc)=>{
                 if(err){
                     throw err
                 }
                 if(doc){
                     if(doc.length>0){
                     console.log(doc);
                    //  res(doc)
                    //console.log("Hello"+doc)
                    //console.log("CHIKU"+doc._id);
                     const a =  jwt.sign( {data:doc[0]._id},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
                        console.log(a)
                           
                              res({
                             statusCode:200,
                              message: 'Login Sucessful',
                              doc,error:false,token:a,
                                
                            });
                        }
                        else{
                            console.log('Hollla');
                            userRegisterSchema.create({
                                name:req.payload.name,
                                emailId:req.payload.emailId,
                                //gender:req.payload.gender
                                
                             },(err,doc)=>{
                                 if(err){
                                     throw err
                                 }
                                 if(doc){
                                    const a =  jwt.sign( {data:doc._id},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
                                    console.log(a)
                                       
                                          res({
                                         statusCode:200,
                                          message: 'Login Sucessful',
                                          doc,error:false,token:a,
                                            
                                        });
                                 }
                                 else{
                                     res({Message:'Error shot'});
                                 }
                             })
                        }
                 }
                 else{
                     res({Message:'There is some error'});
                 }
             })

         }
         if(type=='G'){
            var user = req.payload.emailId;
             userRegisterSchema.find({emailId:user},(err,doc)=>{
                 if(err){
                     throw err
                 }
                 if(doc){
                     if(doc.length>0){
                     console.log(doc);
                    //  res(doc)
                    //console.log("Hello"+doc)
                    //console.log("CHIKU"+doc._id);
                     const a =  jwt.sign( {data:doc[0]._id},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
                        console.log(a)
                           
                              res({
                             statusCode:200,
                              message: 'Login Sucessful',
                              doc,error:false,token:a,
                                
                            });
                        }
                        else{
                            console.log('Hollla');
                            userRegisterSchema.create({
                                //name:req.payload.name,
                                emailId:req.payload.emailId,
                               // gender:req.payload.gender
                                
                             },(err,doc)=>{
                                 if(err){
                                     throw err
                                 }
                                 if(doc){
                                    const a =  jwt.sign( {data:doc._id},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
                                    console.log(a)
                                       
                                          res({
                                         statusCode:200,
                                          message: 'Login Sucessful',
                                          doc,error:false,token:a,
                                            
                                        });
                                 }
                                 else{
                                     res({Message:'Error shot'});
                                 }
                             })
                        }
                 }
                 else{
                     res({Message:'There is some error'});
                 }
             }) 
            
         }
        //  else{
        //      res({Message:'There is some error'})
        //  }
      
    }
}