const submitAdHandler = require('../Handlers/submitAdHandler');
const joi = require('joi');
module.exports = [
    {
        method:'POST',
        path:'/submitAd',
        config:{
            tags:['api'],
            description:'Submit Ad',
            notes:'Submit Ad',
            validate:{
                payload:joi.object().keys({
                    //userId will be provided directly from handler via token
                    title:joi.string().required(),
                    categoryId:joi.string().required(),
                    price:joi.number().required(),
                    description:joi.string().required(),
                    mob:joi.number().required(),
                    city:joi.string().required(),
                    nearBy:joi.string().required()
                    //status will be provided directly from handler as per otp verification
                })
            }
        },
        handler:submitAdHandler.create

    },
    {
        path:'/submitAd/findAdById',
        method:'POST',
        config:{
            tags:['api'],
            description:'Find Ad By Id',
            notes:'Find Ad By Id',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    
                })
            },
            
        },
        handler:submitAdHandler.findById
    },
]