const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  contact: {
    type: String,
    required: [true, "Contact is Required"],
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "ProjectId is Required"],
  },
});

module.exports = model("Booking", bookingSchema);
