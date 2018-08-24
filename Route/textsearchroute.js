const joi = require('joi');
const textsearchHandler = require('../Handlers/textsearch');
module.exports=[
    {
        method:'POST',
        path:'/textsearch',
        config:{
        tags:['api'],
        description:'text search',
        notes:'text search',
        
            validate:{
                payload:joi.object().keys({
                    word:joi.string().required()
                    
                }) 
            }
        },
        handler:textsearchHandler.search

    }
]
