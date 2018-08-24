

const joi = require('joi');
const mobAndEmailChangeHandler = require('../Handlers/mobAndEmailChangeHandler');
module.exports=[
    // {
    //     path:'/city/1/cityInsert',
    //     method:'POST',
    //     config:{
    //         tags:['api'],
    //         description:'city insert',
    //         notes:'city insert',
    //         validate:{
    //             payload:joi.object().keys({
    //                 city:joi.string().required(),
                    
    //             })
    //         },
            
    //     },
    //     handler:cityHandler.create
    // },
    {
        path:'/ChangeMob&Email/1/FindMobile',
        method:'POST',
        config:{
            tags:['api'],
            description:'Find whether the mob num already exist or not',
            notes:'Find whether the mob num already exist or not',
            auth:'one',
            validate:{
                 headers:joi.object({
                'authorization':joi.string().required()
            }).options({allowUnknown:true}),
                            payload:joi.object().keys({
                                mob:joi.string().required(),
                                
                            })
                        }
                    },
            handler:mobAndEmailChangeHandler.find
        },
        {
            path:'/ChangeMob&Email/1/SendOtp',
            method:'POST',
            config:{
                tags:['api'],
                description:'Find whether the mob num already exist or not',
                notes:'Find whether the mob num already exist or not',
                auth:'one',
                validate:{
                     headers:joi.object({
                    'authorization':joi.string().required()
                }).options({allowUnknown:true}),
                                // payload:joi.object().keys({
                                //     mob:joi.string().required(),
                                    
                                // })
                            }
                        },
                handler:mobAndEmailChangeHandler.sendOtp
            }

    
    // {
    //     path:'/city/3/cityFindById',
    //     method:'POST',
    //     config:{
    //         tags:['api'],
    //         description:'Find city By Id',
    //         notes:'Find city By Id',
    //         validate:{
    //             payload:joi.object().keys({
    //                 id:joi.string().required(),
                    
    //             })
    //         },
            
    //     },
    //     handler:cityHandler.findById
    // },
    // {
    //     path:'/city/4/update',
    //     method:'POST',
    //     config:{
    //         tags:['api'],
    //         description:'Updates city data',
    //         notes:'Update data of city',
    //         validate:{
    //             payload:joi.object().keys({
    //                 id:joi.string().required(),
    //                city:joi.string().required()
    //             })
    //         },
    //         handler:cityHandler.update
    //     }
    // },
    // {
    //     path:'/city/5/Delete',
    //     method:'POST',
    //     config:{
    //         tags:['api'],
    //         description:'Delete city By Id',
    //         notes:'Delete city By Id',
    //         validate:{
    //             payload:joi.object().keys({
    //                 id:joi.string().required(),
                    
    //             })
    //         },
            
    //     },
    //     handler:cityHandler.delete
    // },

]