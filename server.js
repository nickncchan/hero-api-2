/* Package Imports */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { sequelize } = require("./models");

console.log(process.env.hero_api_2);

/* Global Variables */
const PORT = 1337;

/* Express Server Initialization */
const app = express();

/* Middleware */
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* Endpoints/Routes */
/* GET/READ Routes */
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/heroes", async (req, res) => {
  res.send("List Heroes");
});

app.get("/heroes/:id", async (req, res) => {
  res.send("Single Hero");
});

/* POST/CREATE Routes */
app.post("/heroes", async (req, res) => {
  res.send("Create Hero");
});

/* PUT/UPDATE Routes */
app.put("/heroes/:id", async (req, res) => {
  res.send("Update Hero");
});

/* DELETE Routes */
app.delete("/heroes/:id", async (req, res) => {
  res.send("Delete Hero");
});

/* Server Listening on Port */
app.listen(PORT, async () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
