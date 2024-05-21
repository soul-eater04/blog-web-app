import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is requried"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
