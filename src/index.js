import app from './app.js';
// require('dotenv').config()
import 'dotenv/config'

import DbConnection from "./dbConnection/index.js";

// console.log(process.env);
const port=process.env.PORT||8000;

DbConnection()
.then(()=>{
    app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
  app.listen(port,()=>{
    console.log(`Server is Listen at port : ${port}`);
  })
})
.catch((error)=>{
  console.error(`Mongodb Conneection error :${error}`);
})




/*

import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/