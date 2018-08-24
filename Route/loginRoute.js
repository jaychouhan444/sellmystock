const loginHandler = require('../Handlers/loginHandler');
const joi = require('joi');
module.exports=
{
    method:'POST',
    path:'/AdminLogin',
    config:{
        tags:['api'],
        description:'Admin Login',
        notes:'Admin Login',
        validate:{
            payload:joi.object().keys({
                adminId:joi.string().required(),
                password:joi.string().required()
                
            })
        }
    },
    handler:loginHandler.Check
}