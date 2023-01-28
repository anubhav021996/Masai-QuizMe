const express = require("express");
const app = express();
const cors = require("cors");

const connect = require("./configs/db");
const questionsController = require("./controllers/questions.controller");

app.use(cors());
app.use(express.json());

app.use("/questions", questionsController);

let port = process.env.PORT || 2548;
app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening");
  } catch (e) {
    console.log(e.message);
  }
});
