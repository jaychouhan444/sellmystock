const submitAdSchema = require('../Schema/submitAdSchema');
const otpSchema = require('../Schema/otpSchema');
//const twilio = require('twilio');
const accountSid = 'ACea3e3f916268b8f88b8dbf221e7e57e5';
const authToken = '0944c7f678957b0792c0c12fdb253c0e';
const client = require('twilio')(accountSid, authToken);
const moment = require('moment');
const nodemailer = require('nodemailer');
module.exports={





    create(req,res){

        // var val = Math.floor(1000 + Math.random() * 9000);
        
        //   var dates =  moment();
        //  var jun = moment(dates).format("DD/MM/YYYY HH:mm:ss");
        // res({Message:jun});


        // var now = moment("2018-05-28T05:48:36.498Z"); //todays date
        // var end = moment("2018-05-28T04:51:40.244Z"); // another date
        // var duration = moment.duration(now.diff(end));
        // var days = duration.asSeconds();
        // var abc = days/60;
        //  var aa = moment("2018-05-28T05:48:36.498Z").format('YYYY-MM-DD h:mm:ss A');
        //  var bb = moment("2018-05-28T04:51:40.244Z").format('YYYY-MM-DD h:mm:ss A');
        // res({days,abc,aa,bb});




            // var abc = moment("2018-05-28T04:51:40.244Z").format('YYYY-MM-DD h:mm:ss A');
            // res({Message:abc});

        submitAdSchema.create({
        userId:"abc",
        title:req.payload.title,
        categoryId:req.payload.categoryId,
        price:req.payload.price,
        description:req.payload.description,
        mob:req.payload.mob,
        city:req.payload.city,
        nearBy:req.payload.nearBy,
        status:'yes',
        expire:0
    },(err,suc)=>{
        if(err){
            throw err
        }
        if(suc){
            console.log(suc);
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
                subject: 'Olx Ad Posting Verification Otp',
                html: 'Your Otp :'+ val  +'<br/>'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            client.messages
                    .create({
                        body: "your otp is "+val,
                        from: '+19513566073',
                        to: '+918082242523'
                    },(err,doc)=>{
                        if(err){
                            throw err
                        }
                        if(doc){
                            otpSchema.deleteMany({ userId : "abc" },(err,doc)=>{
                                if(err){
                                    throw err
                                }
                                if(doc){
                                    otpSchema.create({
                                        userId:'abc',
                                        otp:val
        
                                    },(err,doc)=>{
                                        if(err){
                                            throw err
                                        }
                                        if(doc){
                                            res({message:'otp sent successfully',suc})
                                        }
                                    })
                                }
                            })
                            
                        }
                    })
                        }
                    });
   
//     var dates =  moment();
//     var jun = moment(dates).format("DD/MM/YYYY HH:mm:ss");
//    res({Message:jun});
// client.messages
//       .create({
//          body: "your otp is "+val,
//          from: '+19513566073',
//          //mediaUrl: 'http://www.example.com/cheeseburger.png',
//          to: '+918082242523'
//        })
//       .then(message => console.log(message.sid))
//       .done(res({Message:'Otp Sent Successfully'}));
},
findById(req,res){
    submitAdSchema.findById(req.payload.id,(err,doc)=>{
        if(err){
            err
        }if(doc){
        //     res({StatusCode:'200',
        //             Message:'Success',
        //             doc
        // })
        res({doc})
        }else{
            res({Message:'There is Some Error'})
        }
    })
}
}