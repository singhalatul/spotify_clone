// First we import mongoose package
// Create a schema to speciftthe details of user will store in a databa
import mongoose from  "mongoose";

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    likedSongs:{
        type:String,
        default:"",
    },
    username:{
        type:String,
        default:"",
    },
    
},{timestamps:true});
// first is collectName and second argument is schema name
const UserModel = mongoose.model("User",User);

export default UserModel;