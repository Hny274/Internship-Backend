const { Schema, model } = require("mongoose");

const advertisementSchema = new Schema({
  image: {
    type: String,
  },
});

module.exports = model("Advertisement", advertisementSchema);
