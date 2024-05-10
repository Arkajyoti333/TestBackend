import createHttpError from "http-errors";
import RegisterUser from "../modelView/user.model.js";
import  bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Envconfig } from "../config/config.js";

const { sign } = jwt;


const registerUser= async(req,res,next)=>{
 
    const {name,mobile_No,email,password}=req.body;


    //validation
    if(!name || !mobile_No || !email || !password){

        const error=createHttpError(400,"all field are reqire")
       
       return next(error);
    }
     

    // Database call
   try{
     const duplicateEmail= await RegisterUser.findOne({ email:email });
     const duplicateMobileNo=await RegisterUser.findOne({mobile_No});
     if(duplicateEmail){
        const error=createHttpError(401,"User Email id Already Existed");
         return next( error);
     }else if(duplicateMobileNo){
        const error=createHttpError(401,"user Mobile Number already Existed");
        return  next(error);
     }
 
   }catch(err){
    return  next(err);
   }

//    password hashing

   const hashedPassword=await bcrypt.hash(password,10);
    
    // user create in database
    const newUser= await RegisterUser.create({
        name,
        mobile_No,
        email,
      password:hashedPassword,
    })

    // token generation
  
const token=sign({sub:newUser._id},Envconfig.jwtSecret,{expiresIn:"7d"});

 
console.log(newUser._id);
    res.json({
        accessToken:token,
    })

}



 // User  Log In Route Implement

const loginUser= async(req,res,next)=>{
    const {name,mobile_No,email,password}=req.body;

    const User = await RegisterUser.findOne({ email: email }).exec();

if(!mobile_No||!email || !password){
    const error=createHttpError(401,"All fields are require!");
    return next(error);
}


//user mobile and email check

try {
    
    const isUserEmail= await RegisterUser.findOne({ email:email });
    const isUserMobile=await RegisterUser.findOne({mobile_No});

    if(!isUserEmail){
        const error=createHttpError(404,"User Email Id is not Existed.")
       return next(error);
    }
    if(!isUserMobile){
        const error=createHttpError(404,"User Mobile No is not Existed.")
        return next(error);
    }

} catch (err) {
    const error =createHttpError(404,"error occurs when email and mobile check")
    next();
}

// password check
 
 try {
     const mainPassword=User.password;
     console.log(mainPassword)
    const isPasswordMatch= await bcrypt.compare(password,mainPassword);
    if(!isPasswordMatch){
        const error=createHttpError(400,"Mobile No and password is incorrect");
        return next(error);
    }
    
 } catch (err) {
    const error =createHttpError(400,"error occurs when password check");
    return next(error);
 }


//  sign generation
 const token = sign({ sub: User._id }, Envconfig.jwtSecret, {
    expiresIn: "7d",
    algorithm: "HS256",
  });


//   console.log(User._id);
      res.json({
          accessToken:token,
          message:`${User.name} : Successfully logged in ! `,
      })
   
}


export  {registerUser,loginUser};