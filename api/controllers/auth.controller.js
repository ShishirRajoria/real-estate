import User from '../models/user.model.js';
import { errorhandlers } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  //data will come ito the body
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);//10 is the salt number
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save()//this will save into db
    res.status(201).json("User created Successfully")
  } catch (error) {
    next(error)//if there is a error we pass it to the next middleware
    // next(errorhandler(550,'error from the function'))
  }


}

//hashed the password for that we need to get some package that is npm install bcryptjs 

export const signin = async (req, res, next) => {
  //data will come ito the body
  console.log(req.body);
  const { email, password } = req.body;

  // Set the expiration time to one hour from the current time
const expirationTime = new Date();
console.log("expiration time",expirationTime);
expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); // One hour in milliseconds

  try {
  const validUser = await User.findOne({email});
  console.log(validUser);
  if(!validUser) return next(errorhandlers(404,'User Not Found'));

  const validPassword = bcryptjs.compareSync(password,validUser.password); 
  if(!validPassword) return next(errorhandlers(401,'Wrong Credentials!'));

  // Destructure the user object, excluding the 'password' field
  const { password:pass, ...restUserInfo } = validUser._doc;

const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
res.cookie('access_token', token, {
  httpOnly: true,
  expires: expirationTime,
}).status(200).json(restUserInfo);

   
  } catch (error) {
    next(error)
  }


}