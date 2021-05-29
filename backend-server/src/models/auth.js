const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = require("mongoose").Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        contactNumber: { type: String, unique: true, trim: true },
        hashPassword: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["farmer", "mandi", "market", "admin"],
            default: "farmer",
        },
        profilePicture: { type: String },
        contactPersonName: { type: String },
        idProof: [{ name: { type: String }, img: { type: String } }],
        address: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            trim: true,
        },
        pincode: { type: String },
        userStatus: {
            type: String,
            enum: ["pending", "allowed", "verified", "banned"],
            default: "pending",
        },
        ratings: { type: Number, default: 0.0, min: 0.0, max: 5.0 },
        reviews: [
            {
                user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                rating: { type: Number, default: 0.0, min: 0.0, max: 5.0 },
                message: { type: String, required: true },
            },
        ],
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true }
);

userSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hashPassword);
    },
};

module.exports = new mongoose.model("User", userSchema);
