





const userRegisterSchema = require('../Schema/userRegisterSchema');
const hashing = require('../utils/passwordHash').hashPassword;
const bcrypt = require('bcryptjs');

module.exports={
    // create(req,res){
    //     userRegisterSchema.create({
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
       

        userRegisterSchema.find({
            "emailId": "sumit@ariantechsolutions.com"
        }, {
            "password": 1
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
    updateForBlank(req,res){

            hashing(req.payload.password,(err,hash)=>{
            if(err){
                throw err
            }
            if(hash){
                userRegisterSchema.updateOne({emailId:'sumit@ariantechsolutions.com'},
                    {
                        $set:{
                            
                           password:hash
                            
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
            }
        })
        
    },



//     update(req,res){

//         hashing(req.payload.oldPassword,(err,hash)=>{
//         if(err){
//             throw err
//         }
//         if(hash){
//             console.log('Step 1 Logged..!!');
//             console.log(hash);
//             console.log(req.payload.userPassword);
            
//            bcrypt.compare(hash,req.payload.userPassword,(errr,result)=>{
//                if(errr){
//                    throw errr
//                }
//                if(result){
//                    console.log(result);
//                    console.log('Step 2 Logged..!!');
//               hashing(req.payload.newPassword,(err,hash)=>{
//                   if(err){
//                       throw err
//                   }
//                   if(hash){
//                     userRegisterSchema.updateOne({emailId:'sumit@ariantechsolutions.com'},
//                         {
//                             $set:{
                                
//                                password:hash
                                
//                             }
//                         },(err,doc)=>{
//                             if(err){
//                                 throw err
//                             }
//                             if(doc){
//                                 res({
//                                     StatusCode:200,
//                                     Message:'Success',
//                                     doc
//                                 })
//                             }
//                             else{
//                                 res({Message:'There is some error'})
//                             }
//                         })
//                   }
//                   else{
//                       res({Message:'There is some error'})
//                   }
//               })
//                }
//                else{
//                    res({Message:'There is someone error'+err})
//                }
//            }) 
//         }
//         else{
//             res({Message:'There is some error'})
//         }
//     })
    
// },



















    update(req,res){

        userRegisterSchema.find({
            "emailId": "sumit@ariantechsolutions.com"
        }, {
            "password": 1
        },(err,doc)=>{
            if(err){
                throw err
            }
            if(doc){
                console.log(doc[0].password);
                bcrypt.compare(req.payload.oldPassword,doc[0].password,(err,result)=>{
                    if(err){
                        throw err
                        res({Message:'Invalid Password'})
                    }
                    if(result){
                        hashing(req.payload.newPassword,(err,hash)=>{
                            if(err){
                                throw err
                            }
                            if(hash){
                                userRegisterSchema.updateOne({emailId:'sumit@ariantechsolutions.com'},
                                {
                                    $set:{
                                        
                                       password:hash
                                        
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
                            }
                            else{
                                res({Message:'There is error'})
                            }
                        })
                        
                    }
                    else{
                        res({Message:'Invalid Password'})
                    }
                })
               
            }
            else{
                res({Message:'There is some error'})
            }
        })

        
    
},


    // delete(req,reply){
    //     citySchema.findByIdAndRemove(req.payload.id,(err,doc)=>{
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
    // }



}




