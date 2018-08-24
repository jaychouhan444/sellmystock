const bcrypt = require('bcryptjs');
const loginSchema = require('../Schema/loginSchema');
const secretKey = require('../Utils/secret');
const jwt = require('jsonwebtoken');
module.exports={
    Check(req,res){

      loginSchema.findOne({adminId:req.payload.adminId,password:req.payload.password},(err,result)=>{
            if(err){
                res({
                    StatusCode:400,
                    Message:'Error',
                    err
                })
            }
            if(result){
                //var adminId = result.adminId;
                console.log(result);
               // const a =  jwt.sign( result.toObject({expiresInMinutes: 60}) , secretKey.secret,{ algorithm: 'HS256' } );
               const a =  jwt.sign( {data:result.adminId},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
               console.log(a)
                           
                              res({
                             statusCode: 200,
                              message: 'Login Sucessful ',
                              result,error:false,token:a
                           });
            }
            else{
                    res({
                        StatusCode:401,
                        Message:'Login UnSucessful'

                    })
            }
        })
      
    }
}