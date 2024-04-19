const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { connectToMongo } = require("./Database/connectDb");
const adminRouter = require("./Route/admin.route.js");
const testimonialRouter = require("./Route/testimonial.route.js");
const latestUpdateRouter = require("./Route/latestUpdate.route.js");
const projectRouter = require("./Route/project.route.js");
const bhkRouter = require("./Route/Features/bhk.route.js");
const facingRouter = require("./Route/Features/facing.route.js");
const floorRouter = require("./Route/Features/floor.route.js");
const advanceFeatureRouter = require("./Route/Features/advanceFeature.route.js");

dotenv.config();
connectToMongo();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/media", express.static(path.join(__dirname, "Media")));
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/project", projectRouter);
//Features
app.use("/api/v1/features/bhk", bhkRouter);
app.use("/api/v1/features/facing", facingRouter);
app.use("/api/v1/features/floor", floorRouter);
app.use("/api/v1/features/advanceFeature", advanceFeatureRouter);

app.use("/api/v1/testimonial", testimonialRouter);
app.use("/api/v1/latestUpdate", latestUpdateRouter);

app.listen(port, () => {
  console.log(`Server Started on Port:${port}`);
});
