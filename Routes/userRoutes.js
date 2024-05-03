const express = require("express");
const userRoute = express.Router();
const { db } = require("../db.js");

userRoute.post("/signUp", (req, res) => {
  try {
    console.log("values", req.body);
    const { name, email, password } = req.body;
    console.log("body", req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All field required" });
    }

    const emailAlrealyExist = db.find((user) => email === user.email);
    if (emailAlrealyExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    db.push({ id: db.length + 1, name, email, password });
    return res.status(200).json({ data: db, message: "SignUp Successful" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

userRoute.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("body", req.body);
    if (!email || !password) {
      return res.status(400).json({ message: "All field required" });
    }
    console.log("hii");
    const user = db.find((user) => email === user.email);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User don't exist" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Password Don't match" });
    }
    return res
      .status(200)
      .json({ User: user.name, message: "Login Successful" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = { userRoute };
