



const otpSchema = require('../Schema/otpSchema');
const accountSid = 'ACea3e3f916268b8f88b8dbf221e7e57e5';
const authToken = '0944c7f678957b0792c0c12fdb253c0e';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require('nodemailer');
const hashing = require('../utils/passwordHash').hashPassword;
const userRegisterSchema = require('../Schema/userRegisterSchema');
module.exports={
create(req,res){
userRegisterSchema.find({ "emailId": req.payload.emailId},(err,doc)=>{
    if(err){
        throw err
    }
    if(doc){
        if(doc.length==0){
            res({Message:'User does not exist'})
        }
        else if(doc[0].mob === ""){
            var val = Math.floor(1000 + Math.random() * 9000);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'durgesh@ariantechsolutions.com',
                  pass: 'durgesh@007'
                }
              });
              
              var mailOptions = {
                from: 'No Reply<info@ariantechsolutions.com>',
                to: 'jay@ariantechsolutions.com',
                subject: 'Otp to reset password',
                html: 'Your Otp :'+ val  +'<br/>'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  throw (error);
                } if(info) {
                   
                    otpSchema.deleteMany({ userId : doc[0]._id },(err,suc)=>{
                        if(err){
                            throw err
                        }
                        if(suc){
                            
                            otpSchema.create({
                                userId:doc[0]._id,
                                otp:val

                            },(err,doc)=>{
                                if(err){
                                    throw err
                                }
                                if(doc){
                                    
                                    res({message:'otp sent successfully',Id:doc.userId})
                                }
                                else{
                                    res({Message:'There is some error'})
                                }
                            })
                        }
                    })
                }
                else{
                    console.log('Problem')
                }
              });
        }
        else if(doc[0].mob != ""){
            var val = Math.floor(1000 + Math.random() * 9000);
            otpSchema.deleteMany({ userId : doc[0]._id },(err,suc)=>{
                if(err){
                    throw err
                }
                if(suc){
                    
                    otpSchema.create({
                        userId:doc[0]._id,
                        otp:val

                    },(err,doc)=>{
                        if(err){
                            throw err
                        }
                        if(doc){
                            var transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                  user: 'durgesh@ariantechsolutions.com',
                                  pass: 'durgesh@007'
                                }
                              });
                              
                              var mailOptions = {
                                from: 'No Reply<info@ariantechsolutions.com>',
                                to: 'jay@ariantechsolutions.com',
                                subject: 'Otp to reset password',
                                html: 'Your Otp :'+ val  +'<br/>'
                              };
                              
                              transporter.sendMail(mailOptions, function(error, info){
                                if (error) {
                                 throw (error);
                                } if(info) {
                                    client.messages
                                    .create({
                                        body: "your otp is "+val,
                                        from: '+19513566073',
                                        to: '+918082242523'
                                    },(err,suc)=>{
                                        if(err){
                                            throw err
                                        }
                                        if(suc){
                                            //console.log(doc)

                                            //res({StatusCode:'200',Message:'Otp and email sent successfully',doc}) 
                                            //res(doc)
                                            var strobj = JSON.stringify(doc);

                                                console.log(strobj);
                                                console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh');
                                                var unstrobj = JSON.parse(strobj);

                                            console.log(unstrobj);

                                            res({
                                                doc,
                                                Message:'Success'
                                            })

                                        }
                                        else{
                                            res({Message:'There is some error'})
                                        }
                                    })
                                }
                              });
                        }
                    })
                }
            })   
        }
        else{
            res({Message:'Some error'})
        }
    }
    else{
        res({Message:'There is some error'})
    }
})
},

verifyOtp(req,res){
    console.log('step 1 Logged');
    otpSchema.find({
        "userId": req.payload.id
    }, {
        "otp": 1,
        "_id": 0 
    },(err,doc)=>{
        if(err){
            throw err
        }
        if(doc){
            console.log('step 2 Logged'+doc);
            console.log(doc);
            if(doc[0].otp==req.payload.otp){
                console.log('step 3 Logged'+doc.otp+req.payload.otp)
                res({Message:'matched'})
        }
        else{
            res({Message:'Not matched'})
        }
    }
    else{
        res({Message:'There is some error'})
    }

    
})

},

setPassword(req,res){
    hashing(req.payload.password,(err,hash)=>{
        if(err){
            throw err
        }
        if(hash){
            userRegisterSchema.updateOne({_id:req.payload.id},
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
            res({Message:'There is some error'})
        }
    })

   
}
}