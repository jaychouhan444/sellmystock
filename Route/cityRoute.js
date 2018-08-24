

const joi = require('joi');
const cityHandler = require('../Handlers/cityHandler');
module.exports=[
    {
        path:'/city/1/cityInsert',
        method:'POST',
        config:{
            tags:['api'],
            description:'city insert',
            notes:'city insert',
            validate:{
                payload:joi.object().keys({
                    city:joi.string().required(),
                    
                })
            },
            
        },
        handler:cityHandler.create
    },
    {
        path:'/city/2/cityFind',
        method:'GET',
        config:{
            tags:['api'],
            description:'Find city',
            notes:'Find city',
            handler:cityHandler.find
        }
    },
    {
        path:'/city/3/cityFindById',
        method:'POST',
        config:{
            tags:['api'],
            description:'Find city By Id',
            notes:'Find city By Id',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    
                })
            },
            
        },
        handler:cityHandler.findById
    },
    {
        path:'/city/4/update',
        method:'POST',
        config:{
            tags:['api'],
            description:'Updates city data',
            notes:'Update data of city',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                   city:joi.string().required()
                })
            },
            handler:cityHandler.update
        }
    },
    {
        path:'/city/5/Delete',
        method:'POST',
        config:{
            tags:['api'],
            description:'Delete city By Id',
            notes:'Delete city By Id',
            validate:{
                payload:joi.object().keys({
                    id:joi.string().required(),
                    
                })
            },
            
        },
        handler:cityHandler.delete
    },

]