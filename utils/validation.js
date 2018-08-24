const secretKey = require('./secret');
const jwt = require('jsonwebtoken');
//const counterSchema = require('../Schema/counterSchema');
const userRegisterSchema = require('../Schema/userRegisterSchema');
module.exports={
validate(headers,req,callback){
    const token = req.headers['authorization']
    var decode=jwt.verify(token,secretKey.secret);
    //console.log(decode.data._id);
userRegisterSchema.findById(decode.data._id,(err,doc)=>{
    if(err){
        throw err
    }
    if(doc){
       return callback(null,true);
    reply({
        StatusCode:200,
        return : true
    }); 
    }
    else{
            return callback(null,false);
        reply({
            StatusCode:201,
            return:false
        })
    }
})
    // if(decode.data=='jay')
    // {
    // return callback(null,true);
    // reply({
    //     StatusCode:200,
    //     return : true
    // });
    // }
    // else
    // {
    //     return callback(null,false);
    //     reply({
    //         StatusCode:201,
    //         return:false
    //     })
    // }
},
// validateUser(headers,req,callback){
//     const token = req.headers['authorization']
//     var decode=jwt.verify(token,secretKey.secret);
//     console.log(decode);
//     userRegisterSchema.findOne({_id:decode.data},(err,doc)=>{
//         if(err){
//             throw err
//         }
//         if(doc){
//             return callback(null,true);
//             reply({
//                 StatusCode:200,
//                 return : true
//             }); 
//         }
//         else{
//             return callback(null,false);
//             reply({
//                 StatusCode:201,
//                 return:false
//             })
//         }
//     })
    
// },








//getNextSequence(req){
    


//console.log("hey");
//console.log(req);
     

 //return ret.seq;
    // if(decode.adminId=='jay')
    // {
    // return callback(null,true);
    // reply({
    //     StatusCode:200,
    //     return : true
    // });
    // }
    // else
    // {
    //     return callback(null,false);
    //     reply({
    //         StatusCode:201,
    //         return:false
    //     })
    // }
//},
// getNextSequence(name) {
//     var ret = counters.findAndModify(
//            {
//              query: { _id: name },
//              update: { $inc: { seq: 1 } },
//              new: true
//            }
//     );
 
//     return ret.seq;
//  }
}