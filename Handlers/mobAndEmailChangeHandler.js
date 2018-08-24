const userRegisterSchema = require('../Schema/userRegisterSchema');
const jwt = require('jsonwebtoken');
const secretKey = require('../utils/secret');
module.exports={
    //create(req,res){
    //     citySchema.create({
    //         city:req.payload.city
    //     },(err,doc)=>{
    //         if(err){
    //             throw err
    //         }
    //         if(doc){
    //             res({
    //                 doc,
    //                 Message:'Success'
    //             })
    //         }
    //         else{
    //             res({Message:'There is some error'})
    //         }
    //     })
    // },
    find(req,res){
        userRegisterSchema.find({mob:req.payload.mob},(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                if(doc.length==0){
                    res({Message:'User Does Not Exist',StatusCode:200})
                }
                else if(doc.length != 0){
                    res({Message:'User Exist',StatusCode:201})
                }
                else{
                    res({Message:'There is some error. '})
                }
            }
            else{
                res({Message:'There is some error'})
            }
        })
    },
    sendOtp(req,res){
        const token = req.headers['authorization']
        var decode=jwt.verify(token,secretKey.secret);
        userRegisterSchema.find({_id:decode.data._id},(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                if(doc.length==0){
                    res({Message:'User Does Not Exist.'})
                }
                else if(doc.length != 0){
                    
                }
            }
            else{
                res({Message:'there is some error'})
            }
        })
    }
    // findById(req,reply){
    //     citySchema.findById(req.payload.id,(err,doc)=>{
    //         if(err){
    //             err
    //         }if(doc){
    //             reply({StatusCode:'200',
    //                     Message:'Success',
    //                     doc
    //         })
    //         }else{
    //             reply({Message:'There is Some Error'})
    //         }
    //     })
    // },
    // update(req,res){
    //     citySchema.updateOne({_id:req.payload.id},
    //     {
    //         $set:{
                
    //            city:req.payload.city
                
    //         }
    //     },(err,doc)=>{
    //         if(err){
    //             throw err
    //         }
    //         if(doc){
    //             res({
    //                 StatusCode:200,
    //                 Message:'Success',
    //                 doc
    //             })
    //         }
    //         else{
    //             res({Message:'There is some error'})
    //         }
    //     })
    // },
   



}




