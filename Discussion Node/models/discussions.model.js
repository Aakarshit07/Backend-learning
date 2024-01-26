const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({

    title: {
        type: String,
        maxLength: [150 || "Title must be under 150 Characters"],
        required: true,
    },
    author: {
        type: String,
        required: true,
        immutable: true,
    }, 
    content: {
        type: String,
        default: "",
    }

},{timestamps: true})

const discussionModel = new mongoose.model("discussion", discussionSchema);

module.exports = discussionModel;