const bcrypt=require('bcryptjs');
const UserMod=require('../Schema/userRegisterSchema');
const jwt = require('jsonwebtoken');
const secretKey = require('../Utils/secret');
module.exports={
    Check(req,res)
    {
        const Password = req.payload.password;
        UserMod.findOne({
            
               emailId: req.payload.emailId 
            
            
          }, function(err, user)
           {
              if(user)
              {
               //   console.log(user,user.password);
                bcrypt.compare(Password,user.password,function(errr,result)
                     {
        
                         if(errr){
                                 res({
                                    statusCode: 401,
                                     message: 'Invalid Password ',
                                     errr
                                   });
                         }
                        if(result)
                         {

                            const a =  jwt.sign( {data:user},secretKey.secret,{ algorithm: 'HS256' },{expiresInMinutes:60} );
                            //console.log(user);
                               
                                  res({
                                 statusCode:200,
                                  message: 'Login Sucessful',
                                  result,error:false,token:a,
                                    
                                });
                         }
                         else{
                            res({
                                statusCode: 401,
                                 message: 'Invalid Password ',
                                 
                               });
                         }
                     }
                    );

             }
            else
                {
                  res({
                    statusCode: 401,
                     message: 'Invalid emailid  ',
                     err
                   }); 

                }

            }
        );
     
    }
}









