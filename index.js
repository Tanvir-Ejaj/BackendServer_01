const express = require("express");
const chalk = require("chalk");
var cors = require("cors");
const userRouter = require("./controllars/userRouter");
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", userRouter);

app.listen(8000, () => {
  console.log(chalk.green("server is running on 8000"));
});