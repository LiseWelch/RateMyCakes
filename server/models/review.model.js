const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        CakeID: String,
        Rating: Number,
        Comment: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);