const { Schema, model } = require("mongoose");

const facilitiesSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "ProjectId is Required"],
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
  },
  facilities: [String],
});

module.exports = model("Facilities", facilitiesSchema);
