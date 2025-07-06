import express from "express";
const router  = express.Router();
import bcrypt from "bcrypt";
import User from '../models/User.js';
import getToken from "../utils/helper.js"


// router that help to create user 

router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body;

    // Validate input
    if (!email || !password || !firstName || !lastName || !username) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ error: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    const newUserData = {
      email,
      password: hashedPassword, // ✅ fixed name
      firstName,
      lastName,
      username,
    };

    const newUser = await User.create(newUserData);

    // Generate token
    const token = await getToken(email, newUser);

    // Prepare user data to return
    const userData = newUser.toObject();
    const userReturn = { ...userData, token };
    delete userReturn.password;

    return res.status(200).json(userReturn);
  } catch (err) {
    console.error("Error in /register:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
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