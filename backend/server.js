import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import connectDb from "./config/dbConnection.js";
import cors from "cors"

const app = express();
const port = process.env.PORT || 5000;


connectDb();
app.use(cors())
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
