import dotenv from 'dotenv';
dotenv.config();

//  config();

//  console.log(process.env.PORT)
 const ___config={
    port:process.env.PORT,
    MongodbUrl:process.env.MONGODB_URI,
    corsOrigin:process.env.CORS_ORIGIN,

 }

//  console.log(___config.port)

 export const Envconfig=Object.freeze(___config);






//  export const portConfig=()=>{
    
//     console.log('Loading environment variables...');
//     import('dotenv/config').then(() => {
//         console.log('Environment variables loaded.');
//         console.log('PORT:', process.env.PORT);
//     }).catch(error => {
//         console.error('Failed to load the dotenv config:', error);
//     });
// }