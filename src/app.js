import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Envconfig } from './config/config.js';
import createHttpError from 'http-errors';
import globalErrorHandler from './middlewers/globalErrorHandler.js'
import userRouter from './routes/user.routes.js';

import dotenv from "dotenv";
dotenv.config({ path: './.env' });

// console.log(process.env);




const app=express();


app.use(express.json({limit:"21kb"}));

app.use(cors({
    origin:Envconfig.corsOrigin,
    credentials: true
}));

app.use(express.urlencoded({
    extended:true,
    limit:"21kb",
}))
app.use(cookieParser());
app.use(express.static("public"));

app.get('/',(req,res)=>{

 const error= createHttpError(400,"Something went to wrong")
//  throw error;

   res.json({message:"  Wellcome to Home page !!!"})

})

app.use('/api/user',userRouter)



// Global error handeler

app.use(globalErrorHandler);

export default app;