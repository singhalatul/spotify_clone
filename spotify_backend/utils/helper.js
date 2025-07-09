import jwt from 'jsonwebtoken';


const getToken = async (email, user) => {
    // Assume this code is complete
    const token = jwt.sign(
        {sub: user._id},
        process.env.SECRETJWTKEY
    );
    return token;
};

export default getToken;