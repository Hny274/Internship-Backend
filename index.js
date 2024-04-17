const express = require("express");
const dotenv = require("dotenv");
const { connectToMongo } = require("./Database/connectDb");
const adminRouter = require("./Route/admin.route");
const testimonialRouter = require("./Route/testimonial.route");
const latestUpdateRouter = require("./Route/latestUpdate.route");

dotenv.config();
connectToMongo();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/testimonial", testimonialRouter);
app.use("/api/v1/latestUpdate", latestUpdateRouter);

app.listen(port, () => {
  console.log(`Server Started on Port:${port}`);
});
