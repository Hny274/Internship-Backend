const { Schema, model } = require("mongoose");

const brochureSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: [true, "ProjectId is Required"],
    },
    pdf: {
      type: String,
      required: [true, "PDF is Required"],
    },
  },
  { timestamps: true }
);

module.exports = model("Brochure", brochureSchema);
