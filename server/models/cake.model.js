const mongoose = require("mongoose");

const CakeSchema = new mongoose.Schema(
    {
        BakerName: String,
        ImageUrl: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cake", CakeSchema);