 import User from '../models/user.mjs';
 import jwt from 'jsonwebtoken';
 




async function create(req, res) {
    try{
        // add the user to the db
        const createdUser = await User.create(req.body);
        // create a JWT for the user
        // token will be a string
        const token = createJWT(createdUser);
        res.status(200).json(token);

    }catch(err){
        res.status(400).json(err)
    }
}

//================= HELPER FUNCTION =================
// This function will create a JWT for the user that is passed in as an argument
function createJWT(user) {
    return jwt.sign(
        // the user object is passed in as the payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}

export default { create }