import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.listen(3000, () => {
  return console.log("Server is running on port 5173");
});
