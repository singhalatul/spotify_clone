import express from "express";
const router  = express.Router();
import bcrypt from "bcrypt";
import User from '../models/User.js';
import getToken from "../utils/helper.js"


// router that help to create user 
router.post("/register",async(req,res)=>{
    const {email,password,firstName,lastName,username} = req.body;
    const user = await User.findOne({email:email});
    //check condition if user exist or not
    if(user){
        return res
        .status(403)
        .json({
            error:"User already exist"
        })
    }
    //create a new user
    //donot store password in plain text
    //convert password in hash
    const hashPassword = await bcrypt.hash(password,10);
    const newUserData = {
        email,
        password : hashPassword,
        firstName,
        lastName,
        username}
    const newUser = await User.create(newUserData);

    //token creation for user identity

    const token  = await getToken(email,newUser);
    const userData = await newUser.toObject();
    const userReturn  = {...userData,token};
    delete userReturn.password;
    return res.status(200).json(userReturn);
});

router.post("/login",async (req,res)=>{
    // get email password set by the user 
    const {email,password} =req.body;
    // check if the user exists in database
    const user = await User.findOne({email:email});
    // if user exists, check that the password are correct
    if(!user){
        return res.status(403).json({err:"Invalid credentials"});
    } 
    // password are correct then return a token to the user 
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(403).json({err:"Invalid credentials"});
    } 

    const token = await getToken(user.email,user);
    const userData = await user.toObject();
    const userReturn  = {...userData,token};
    delete userReturn.password;
    return res.status(200).json(userReturn); 
})

export default router;