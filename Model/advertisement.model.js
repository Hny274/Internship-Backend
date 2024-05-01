const { Schema, model } = require("mongoose");

const advertisementSchema = new Schema({
  images: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 3;
      },
      message: (props) => `${props.path} exceeds the limit of 3 images`,
    },
  },
});

module.exports = model("Advertisement", advertisementSchema);
