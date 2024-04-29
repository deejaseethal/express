const { json } = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const db = [
  {
    id: 1,
    name: "deeja",
    email: "deeja@gmail.com",
    password: 1234,
  },
  {
    id: 2,
    name: "anagha",
    email: "anagha@gmail.com",
    password: 12345,
  },
  {
    id: 3,
    name: "sheeja",
    email: "sheeja@gmail.com",
    password: 3425,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getAllUsers", (req, res) => {
  try {
    return res.status(200).json({ Users: db, message: "All Users" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

app.get("/getSingleUser/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(404).json({ message: "User ID Required" });
    }

    const user = db.find((user) => id === user.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ User: user, message: "User Found" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

app.post("/signUp", (req, res) => {
  try {
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

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("body", req.body);
    if (!email || !password) {
      return res.status(400).json({ message: "All field required" });
    }

    const user = db.find((user) => email === user.email);
    if (!user) {
      return res.status(404).json({ message: "User don't exist" });
    }
    if (user.password === password)
      return res
        .status(200)
        .json({ User: user.name, message: "Login Successful" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
