const imageHandler = require('../Handlers/imageHandler');
const joi = require('joi');
const corsHeaders=require('../server').corsoptions;
const inert = require('inert');
module.exports=[
    {
        method: "POST",
        path: "/upload",
        config: {
                    tags:['api'],
                    description:'Delete Specific Category Data.',
                    notes:'It will delete specific Category data.',
                   // auth:'one',
       
                    payload:{
                    
                        output: "stream",
                        parse: true,
                        allow: "multipart/form-data",
                        maxBytes: 2000 * 1000 * 1000,
                    },

                     validate:{
                    //     // headers:joi.object({
                    //     //     'authorization':joi.string().required()
                    //     // }).options({allowUnknown:true}),
                         payload:joi.object().keys({
                             adId:joi.string().required(),
                            FileList:joi.any().required()
                         })
                        }
                    },
                    handler:imageHandler.Create
                           

                    
    },

                     ]