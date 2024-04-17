const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema(
  {
    link: {
      type: String,
      required: [true, "Link is Required"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
  },
  { timestamps: true }
);

module.exports = model("Testimonial", testimonialSchema);
