import jwt from "jsonwebtoken";

const getToken = async (email,user)=>{
    const token  = jwt.sign({identifier:user._id},process.env.SECRETJWTKEY);
    return token;
}

export default getToken;
