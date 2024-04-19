const { Schema, model } = require("mongoose");

const advanceFeatureSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "ProjectId is Required"],
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
  },
  features: [String],
});

module.exports = model("AdvanceFeature", advanceFeatureSchema);
