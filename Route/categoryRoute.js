const joi = require('joi');
const categoryHandler = require('../Handlers/categoryHandler');
module.exports=[
    {
        method:'POST',
        path:'/Category/insert',
        config:{
            tags:['api'],
            description:'Insert Category',
            notes:'Category Master',
            //auth:'one',
            validate:{
                // headers:joi.object({
                //     'authorization':joi.string().required()
                // }).options({allowUnknown:true}),

                payload:joi.object().keys({
                    parent:joi.string().required(),
                    child:joi.string().required()
                })
            }
        },
        handler:categoryHandler.create

    }
]