const userRegisterHandler = require('../Handlers/userRegisterHandler');
const joi = require('joi');
const corsHeaders=require('../server').corsoptions;
module.exports=[
{
    method:'POST',
    path:'/RegisterUser/insert',
    config:{
        tags:['api'],
        description:'User Registration',
        notes:'User Registration',
        //auth:'one',
        validate:{
            // headers:joi.object({
            //     'authorization':joi.string().required()
            // }).options({allowUnknown:true}),
            payload:joi.object().keys({
                
                mob:joi.string().empty(),
                name:joi.string(),
                 emailId:joi.string().required(),
                // gender:joi.string().required(),
                password:joi.string().empty(),
                type:joi.string().required()
                
            })
        }
    },
    handler:userRegisterHandler.create
}]