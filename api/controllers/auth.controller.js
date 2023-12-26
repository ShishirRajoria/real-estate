import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

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