import express from 'express'
import registerUser from '../controler/user.controler.js'

const userRouter=express.Router();


userRouter.post('/register',registerUser)





export default userRouter;