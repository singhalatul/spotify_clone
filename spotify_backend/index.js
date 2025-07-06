//npm init:package.json ->this is a node project
//npm i  express :Install express package. ->Project can know that ewe are using express
//use express

// import express from 'express'
// const app = express();
import {app} from "./app.js"
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import connectDB from './db/index.js';
import passport from "passport";
import User from './models/User.js' 
import authRoutes from "./routes/auth.js"
import songRoutes from './routes/song.js';
import playlistRoutes from "./routes/playlist.js";
import 'dotenv/config';
const port = 8000;


//connect mongodb with node app
//1. connect with which db 
// 2. connection options.
connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    })
})

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETJWTKEY;
passport.use(new JwtStrategy(opts, async(jwt_payload, done) =>{
    try{
        const user = await User.findOne({id: jwt_payload.sub})
        if (user) {
            return done(null,user);
        }
        return done(null, false);
    }catch(err){
            return done(null, false);
            // or you could create a new account
    }
}));

//we want to to tell express that my req go on that particular server

// adding middleware 
app.use("/auths",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);