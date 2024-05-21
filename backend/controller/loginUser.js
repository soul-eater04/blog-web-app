import asyncHandeler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const loginUser = asyncHandeler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new Error("All fields are necessary");
  }
  const user = await User.findOne({ username });
  if (!user) {
    console.log("USER NOT FOUND");
  }
  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("User not found or wrong password");
  }
});

export default loginUser;
