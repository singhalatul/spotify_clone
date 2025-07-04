// First we import mongoose package

import mongoose from "mongoose";

const Song = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    track:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    
    
},{timestamps:true});
// first is collectName and second argument is schema name
const SongModel = mongoose.model("Song",Song);

export default SongModel;