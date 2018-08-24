const categorySchema = require('../Schema/categorySchema');

module.exports={
    create(req,res){
        categorySchema.create({
            parent:req.payload.parent,
            child:req.payload.child
        },(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({
                    statusCode:200,
                    Message:'Category inserted successfully',
                    doc
                })
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },


    
    
}