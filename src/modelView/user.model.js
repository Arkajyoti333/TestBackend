import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:[true, 'Email is required']
    },
    mobile_No:{
        type:Number,
        unique:true,
        require:[true, 'Mobile Number is required']
    },
    password:{
        type:String,
        require:[true, 'Password is required'],
    },
    
  },
  {
    timestamps: true,
  }
);

const  RegisterUser=mongoose.model("RegisterUser",userSchema);



export default RegisterUser;