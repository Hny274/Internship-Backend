const { Schema, model } = require("mongoose");

const tokenSchema = new Schema(
  {
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("ResetToken", tokenSchema);
