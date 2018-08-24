

const textSearchSchema = require('../Schema/textsearchschema');

const fs=require('fs');
const momentdate=require('moment');
var UniqueNumber = require("unique-number");
var uniqueNumber = new UniqueNumber();


module.exports={

    Create(request,res){
        console.log(request.payload);

         console.log(request.payload.FileList);
         console.log(request.payload.adId);
            var result = [];
            var bef = 0;
           for(var i = 0; i < request.payload["FileList"].length; i++) {
               ++bef;
               var a = request.payload["FileList"][i].hapi.filename ;
               var d=a.split(".");
               var date1=momentdate().format('DD');
               var month1=momentdate().format('MM');
                var year1=momentdate().format('YYYY');
                 var hour1=momentdate().format('h');
                 var minute1=momentdate().format('mm');
                var second1=momentdate().format('ss');
                var image_path= date1+"_"+month1+"_"+year1+"_"+hour1+"_"+minute1+"_"+second1;
                var imgName = image_path+'_'+uniqueNumber.generate()+'.'+d[1]
                result.push(request.payload["FileList"][i].hapi);
                request.payload["FileList"][i].pipe(fs.createWriteStream(__dirname + "/uploads/" + imgName))
                textSearchSchema.create({
                    adId:request.payload.adId,
                    word:imgName
                })
                      
            
                    }
                    res({Message: bef +' Image Uploaded..!!',
                
                });    
                }
          
                
            }
           
        
       
   
    
    
                                   