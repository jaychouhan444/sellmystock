const loginController=require('../Handlers/userLogin');
const Joi=require('joi');
const corsHeaders=require('../server').corsoptions;

module.exports= 
{
    method:'POST',
    path:'/UserLogin',
    
    config: {
          // config:{
    //     auth:'token'
    // },
        // Include this API in swagger documentation
        tags: ['api'],
        description: 'Login data',
        notes: 'data',
        cors: corsHeaders,
        validate: {
            // params: {
            //     emailid:Joi.string().required(),
            //     password:Joi.string().required(),
            // },
           
            payload: Joi.object().keys({
                
                emailId:Joi.string().email().required(),
                password:Joi.string().required(),
                
            })
        }
    },
    handler:loginController.Check
}