const { Schema, model } = require("mongoose");

const latestUpdateSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Link is Required"],
    },
    image: {
      type: String,
      required: [true, "Image is Required"],
    },
    updates: {
      type: [String],
      required: [true, "Updates are Required"],
    },
  },
  { timestamps: true }
);

module.exports = model("LatestUpdate", latestUpdateSchema);
