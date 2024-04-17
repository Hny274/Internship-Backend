const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
    },
    description: {
        type: String,
        required: [true, "Description is Required"],
    },
    image: {
        type: String,
        required: [true, "Image is Required"],
    },
    location: {
        type: String,
        required: [true, "location is Required"],
    },
    type: {
        type: String,
        required: [true, "Type is Required"],
    },
});

module.exports = model("Project", projectSchema);
