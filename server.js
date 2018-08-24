

const hapi = require('hapi');
// const server= new Hapi.Server({
//     connections:{
//         routes:{
//             cors:true
//         }
//     }
// });
const server = new hapi.Server({connections:{
    routes:{
        cors:true
    }
}});
const dbconn = require('./utils/dbconnection');
const loginRoute = require('./Route/loginRoute');
//const answerRoute=require('./Route/answerRoute');
//const questionRoute=require('./Route/questionRoute');
const hapiSwagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');
const Pack = require('./package');
const secretKey = require('./utils/secret');
const categoryRoute = require('./Route/categoryRoute');
//const youtubeRoute = require('./Route/youtubeRoute');
const userRegisterRoute = require('./Route/userRegisterRoute');
//const linkedAllRoute = require('./Route/linkedAllRoute');
//const userAnswerRoute = require('./Route/userAnswerRoute');
//const linkQuesAnsRoute = require('./Route/linkQuesAnsRoute');
//const macAddressCheckRoute = require('./Route/macAddressCheckRoute');
const userloginRoute = require('./Route/userLoginRoute');
//const userRoute = require('./Route/userRoute');
//const paymentRoute = require('./Route/paymentRoute');
const validation = require('./Utils/validation')
const submitAdRoute = require('./Route/submitAdRoute');
const otpVerificationRoute = require('./Route/otpverificationRoute');
const textsearchRoute = require('./Route/textsearchroute');
const cityRoute = require('./Route/cityRoute');
const imageRoute = require('./Route/imageRoute');
const adSearchRoute = require('./Route/adSearchRoute');
const passwordRoute = require('./Route/passwordRoute');
const resetPasswordRoute = require('./Route/resetPasswordRoute');
const mobAndEmailChangeRoute = require('./Route/mobAndEmailChangeRoute');
const options = {
    info:{
    'title':'test api documentation',
    'version':Pack.version
}
};
const corsoptions={
    origins: ['*'],
    allowCredentials: 'true',
    exposeHeaders: ['content-type', 'content-length'],
    maxAge: 600,
    method: ['POST, GET, OPTIONS, PUT, DELETE'],
    headers: ['Origin', 'X-Requested-With','Accept', 'Content-Type', 'Authorization']
};
server.connection({
    port:9001,
    host:'0.0.0.0'
});


server.register([
    inert,
    vision,
    {
        register: require('hapi-swagger'),
        options
    }
],function(err){
    if(err){
        server.log(['error'],'hapi-swagger load error: '+err)
    }else{
        server.log(['start'],'hapi-swagger interface loaded')
    }
});



server.route({
    path:'/',
    method:'GET',
    handler:function(req,res)
    {
        res("Welcome To OLX");
    }
});
// server.route({  
//     method: 'GET',
//     path: '/uploads/{file*}',
//     handler: {
//       directory: { 
//         path: 'Handlers/uploads'
//       }
//     }
//   })



//Hapi authentication====================================================================================================
server.register(require('hapi-auth-jwt2'),function(err){
    if(err){
        console.log(err+"Hello i m in server.js in jwt2 registration");
    }
    server.auth.strategy('one','jwt',
    {
        key:secretKey.secret,
        verifyOptions:{algorithms:['HS256']},
        validateFunc:validation.validate
    },
    
);
// server.auth.strategy('two','jwt',
//     {
//         key:secretKey.secret,
//         verifyOptions:{algorithms:['HS256']},
//         validateFunc:validation.validateUser
//     }
// );
 server.route(userRegisterRoute);
 server.route(categoryRoute);
 server.route(loginRoute);
 server.route(submitAdRoute);
 //server.route(textsearchRoute);
 server.route(imageRoute);
 server.route(cityRoute);
 server.route(adSearchRoute);
 server.route(passwordRoute);

// // server.route(answerRoute);
// //  server.route(questionRoute);
// // server.route(youtubeRoute);
// // server.route(linkedAllRoute);
// // server.route(paymentRoute);
// // server.route(userRoute);
// // server.route(userAnswerRoute);
// // server.route(linkQuesAnsRoute);
 server.route(userloginRoute);
 server.route(otpVerificationRoute);
 server.route(resetPasswordRoute);
 server.route(mobAndEmailChangeRoute);

server.route([{
                    
    path:'/hi',
    method:'GET',
    config: { auth: 'one' },
    handler:function(req,reply)
    {
        reply("hello world")
       
    }

},
{
    method: 'GET', path: '/restricted', config: { auth: 'one' },
    handler: function(request, reply) {
      reply({text: 'You used a Token!'})
      .header("Authorization", request.headers.authorization);
    }
  }
]);
});


//=============================================================================================
//server.route(answerRoute);
//server.route(questionRoute);

//server.route(macAddressCheckRoute);

server.start(function(err){
    if(err){
        console.log('Server Starting With Error');
        throw err;
    }
    else{
        console.log(`Server Running at : ${server.info.uri}`);
    }
});