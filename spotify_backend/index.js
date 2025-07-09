//npm init:package.json ->this is a node project
//npm i  express :Install express package. ->Project can know that ewe are using express
//use express

// import {app} from "./app.js"
import { Strategy as JwtStrategy, ExtractJwt as ExtractJwt } from 'passport-jwt'
import connectDB from './db/index.js';
import passport from "passport";
import User from './models/User.js' 
import authRoutes from "./routes/auth.js"
import songRoutes from './routes/song.js';
import playlistRoutes from "./routes/playlist.js";
import 'dotenv/config';
import cors from 'cors';
import express from 'express'
const app = express();
const port = 8000;


//connect mongodb with node app
//1. connect with which db 
// 2. connection options.

app.use(cors());
app.use(express.json());
connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    })
})

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETJWTKEY;
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  console.log("JWT Payload:", jwt_payload);
  try {
    const user = await User.findById(jwt_payload.sub); // or _id
    if (user) return done(null, user);
    else return done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

//we want to to tell express that my req go on that particular server

// adding middleware 
app.use("/auths",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);