const express = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./Database/connectDb");

dotenv.config();
connectToMongo();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started on Port:${port}`);
});
