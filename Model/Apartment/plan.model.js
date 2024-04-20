const { Schema, model } = require("mongoose");

const planSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "ProjectId is Required"],
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
});

module.exports = model("Plan", planSchema);
