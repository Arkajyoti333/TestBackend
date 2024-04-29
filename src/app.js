import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({ path: './.env' });

// console.log(process.env);




const app=express();


//  console.log(`${process.env.CORS_ORIGIN}`);
app.use(cors({
    origin:process.env.CORS_ORIGIN||"*",
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
   res.json({message:"Response sent successfully"})
})




export default app;