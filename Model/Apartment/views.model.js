const { Schema, model } = require("mongoose");

const viewsSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  images: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 5;
      },
      message: (props) => `${props.path} exceeds the limit of 5 images`,
    },
  },
});

module.exports = model("Views", viewsSchema);
