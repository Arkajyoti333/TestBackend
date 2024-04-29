import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { Envconfig } from './config/config.js';
dotenv.config({ path: './.env' });

// console.log(process.env);




const app=express();


app.use(express.json());

//  console.log(`${process.env.CORS_ORIGIN}`);
app.use(cors({
    origin:Envconfig.corsOrigin,
    credentials: true
}));
app.use(express.json({limit:"21kb"}));
app.use(express.urlencoded({
    extended:true,
    limit:"21kb",
}))
app.use(cookieParser());
app.use(express.static("public"));
app.get('/',(req,res)=>{
   res.json({message:"Response sent successfully from app.js"})
})




export default app;