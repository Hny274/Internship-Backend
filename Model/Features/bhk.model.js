const { Schema, model } = require("mongoose");

const bhkSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: [true, "ProjectId is Required"],
    },
    image: {
        type: String,
        required: [true, "Image is Required"],
    },
    bhk: [String],
});

module.exports = model("bhk", bhkSchema);
