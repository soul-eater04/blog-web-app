import express from "express";
import registerUser from "../controller/registerUser.js";
import loginUser from "../controller/loginUser.js";
const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
