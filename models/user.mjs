import mongoose from "mongoose";  
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;  

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
    }
},{
    timestamps: true,
    toJSON: {
        transform: function(doc, ret){
            delete ret.password;
            return ret;
        }
    }
})

userSchema.pre('save', async function(next){
    // 'this' is the user doc - this will be set to the user doc that is being saved
    if(!this.isModified('password')) return next();
    // password has been changed - salt and hash it
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})


const User = mongoose.model('User',userSchema)

export default User;