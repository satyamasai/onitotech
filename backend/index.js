const express = require("express");

const { Router } = express;
require("dotenv").config();
const userRouter = Router();
const cors = require("cors");
const { addUser } = require("./Controller/user.controller");
const { connection } = require("./Config/db");
const { userModel } = require("./Models/user.model");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to onito..!!!" });
});

app.post("/getuser", addUser);

app.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (Err) {
    res.status(500).send({ msg: "bad responce" });
    console.log(Err);
  }
});
// ----Listening ---------
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected successfull.....");
    console.log("app is running on PORT :" + process.env.PORT);
  } catch (err) {
    console.log("Database connection failed.....");
    console.log(err);
  }
});
