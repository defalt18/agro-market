const mongoose = require("mongoose");

const productSchema = require("mongoose").Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        productType: { type: String, enum: ["sell", "buy"], required: true },
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
        },
        grade: {
            type: String,
        },
        quantityKG: {
            type: Number,
            default: 0,
            min: 0,
        },
        showPrice: {
            type: Number,
            default: 0,
            min: 0,
        },
        offerPrice: {
            type: Number,
            default: 0,
            min: 0,
        },
        affordableRangeKM: { type: Number, default: -1 },
        productPictures: [{ img: { type: String } }],
        productVideos: [{ img: { type: String } }],
        bids: [
            {
                price: { type: Number, required: true },
                quantity: { type: Number, required: true },
                user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                status: {
                    type: String,
                    enum: ["pending", "success", "rejected"],
                    default: "pending",
                },
            },
        ],
        ratings: { type: Number, default: 0.0, min: 0.0, max: 5.0 },
        review: [
            {
                user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                rating: { type: Number, default: 0.0, min: 0.0, max: 5.0 },
                message: { type: String, required: true },
            },
        ],
    },
    { timestamps: true }
);

module.exports = new mongoose.model("Product", productSchema);
