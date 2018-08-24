

const joi = require('joi');
const adSearchHandler = require('../Handlers/adSearchHandler');
module.exports=[
   
    {
        path:'/adSearch/2/AdFind',
        method:'POST',
        config:{
            tags:['api'],
            description:'Find city',
            notes:'Find city',
            validate:{
                payload:joi.object().keys({
                    city:joi.string().required(),
                    text:joi.string().required()
                    
                })
            },
            handler:adSearchHandler.find
        }
    },
    
 
   
    

]