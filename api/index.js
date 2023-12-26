import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from  './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected To database MongoDB");
  })
  .catch((err) => {
    console.log("Error", err);
  }); //inside github people can see this only has security would be provided

const app = express(); //here we are creating our application
app.use(express.json());//this allowing us json as the input to our server
//note:by default we cant accept json object from browser
//so using this above  

app.listen(3000, () => {
  return console.log("Server is running on port 3000");
});

app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);

//below is for error
app.use((err,req,res,next)=>{
const statusCode = err.statusCode || 500;
const message = err.message || "Internal Server Error"
return res.status(statusCode).json({
  success:false,
  statusCode,
  message
})
})