import asyncHandeler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"

const registerUser = asyncHandeler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  //Hashed Password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    console.log("successful!!")
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("USER DATA NOT VALID");
  }
});

export default registerUser;
