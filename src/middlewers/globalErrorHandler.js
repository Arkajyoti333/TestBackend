import { Envconfig } from "../config/config.js";

const globalErrorHandler=(err,req,res,next)=>{
 
    const statusCode=err.statusCode||500;

    return  res.status(statusCode).json({
        message:err.message,
        errorStack:Envconfig.enviroment ==="devlopment" ?err.stack:err.message,
    })

}


export default globalErrorHandler;