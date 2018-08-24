

const joi = require('joi');
const passwordHandler = require('../Handlers/passwordHandler');
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
        path:'/password/2/passwordFindByemail',
        method:'GET',
        config:{
            tags:['api'],
            description:'Find city',
            notes:'Find city',
            handler:passwordHandler.find
        }
    },
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
    {
        path:'/password/4/passwordupdatefornonblank',
        method:'POST',
        config:{
            tags:['api'],
            description:'Updates user password data',
            notes:'Update user password ',
            validate:{
                payload:joi.object().keys({
                    
                   oldPassword:joi.string().required(),
                   //userPassword:joi.string().required(),
                   newPassword:joi.string().required()

                })
            },
            handler:passwordHandler.update
        }
    },
    {
        path:'/password/5/passwordupdateforblank',
        method:'POST',
        config:{
            tags:['api'],
            description:'Updates user password data',
            notes:'Update user password ',
            validate:{
                payload:joi.object().keys({
                    
                   password:joi.string().required()

                })
            },
            handler:passwordHandler.updateForBlank
        }
    },
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