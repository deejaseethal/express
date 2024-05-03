const { json } = require("body-parser");
const express = require("express");
const { userRoute } = require("./Routes/userRoutes");
const { idRoute } = require("./Routes/idRoute");
const { qRoute } = require("./Routes/qRoute");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/users", userRoute);
app.use("/id", idRoute);
app.use("/query", qRoute);

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

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
