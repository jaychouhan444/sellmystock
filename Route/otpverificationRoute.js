const joi = require('joi');
const otpVerificationHandler = require('../Handlers/otpVerificationHandler');
module.exports=[
    {
        method:'POST',
        path:'/verifyOtp',
        config:{
        tags:['api'],
        description:'otp verification',
        notes:'otp verification',
        
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    otp:joi.number().required()
                }) 
            }
        },
        handler:otpVerificationHandler.verify

    }
]
