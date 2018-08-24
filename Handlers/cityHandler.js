const citySchema = require('../Schema/citySchema');
module.exports={
    create(req,res){
        citySchema.create({
            city:req.payload.city
        },(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({
                    doc,
                    Message:'Success'
                })
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },
    find(req,res){
        citySchema.find({},{"city":1},(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({
                    StatusCode:200,
                    Message:'Success',
                   doc
                })
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },
    findById(req,reply){
        citySchema.findById(req.payload.id,(err,doc)=>{
            if(err){
                err
            }if(doc){
                reply({StatusCode:'200',
                        Message:'Success',
                        doc
            })
            }else{
                reply({Message:'There is Some Error'})
            }
        })
    },
    update(req,res){
        citySchema.updateOne({_id:req.payload.id},
        {
            $set:{
                
               city:req.payload.city
                
            }
        },(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                res({
                    StatusCode:200,
                    Message:'Success',
                    doc
                })
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },
    delete(req,reply){
        citySchema.findByIdAndRemove(req.payload.id,(err,doc)=>{
            if(err){
                err
            }if(doc){
                reply({StatusCode:'200',
                        Message:'Success',
                        doc
            })
            }else{
                reply({Message:'There is Some Error'})
            }
        })
    }



}




