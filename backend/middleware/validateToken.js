import asyncHandeler from "express-async-handler"
import jwt from "jsonwebtoken"

const validateToken = asyncHandeler(async (req, res, next) => {
  let token
  let authHeader = req.headers.Authorization || req.headers.authorization
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401)
        throw new Error("Not auth")
      }
      console.log(decoded)
    })
  }
  next();
})

module.exports = validateToken;
