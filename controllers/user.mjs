 import User from '../models/user.mjs';
 import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
 




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

async function login(req, res) {
    try{
        // find the user by email by querying the db
        const user = await User.findOne({email: req.body.email});
        // if the email does not exist throw an error
        if (!user) throw new Error('User not found');
        // if we find the user, compare the password
        // but remeber it is stored encrypted
        // 1st argument is from the credentials that the user typed in
        //second argument is what is stored in the db
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error('Invalid Login');
        const token = createJWT(user);
        res.status(200).json(token);
    }catch(err){
        res.status(400).json(err);
    }

}
export default { create, login }