import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique:true,
    },
    email: {
        type:String ,
        required:true,
        unique:true
    }, 
    password: {
        type:String ,
        required:true,
    }
},{timestamps:true});//creating schema

const User  =  mongoose.model('User',userSchema);//her ths 'User' shoul be capitalize and singular

export default User;

// unique:true this means usrname is unique for each user
// {timestamps:true}: this actually tells two imp. info to mongodb 
            // 1):-time of creation of the user
            //2):- time of update of the user
// with this we can use this extra info. later for filtering out based on time            