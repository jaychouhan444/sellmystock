

const joi = require('joi');
const resetPasswordHandler = require('../Handlers/resetPassword');
module.exports=[
    {
        path:'/resetPassword',
        method:'POST',
        config:{
            tags:['api'],
            description:'This will send otp on email and mobile number if mob num exists',
            notes:'This will send otp on email and mobile number if mob num exists',
            validate:{
                payload:joi.object().keys({
                    emailId:joi.string().required(),
                    
                })
            },
            
        },
        handler:resetPasswordHandler.create
    },
    {
        path:'/resetPassword/otpVerification',
        method:'POST',
        config:{
            tags:['api'],
            description:'This will verify whether the entered otp is correct or not',
            notes:'This will verify whether the entered otp is correct or not',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    otp:joi.string().required()
                    
                })
            },
            
        },
        handler:resetPasswordHandler.verifyOtp
    },
    {
        path:'/resetPassword/setPassword',
        method:'POST',
        config:{
            tags:['api'],
            description:'This will be used to set a new password once otp is verified',
            notes:'This will be used to set a new password once otp is verified',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    password:joi.string().required()
                    
                })
            },
            
        },
        handler:resetPasswordHandler.setPassword
    }


   
    
   
    

]