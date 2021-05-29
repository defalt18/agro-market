const User = require("../models/user");
const jwt = require("jsonwebtoken"); //for user token
const bcrypt = require("bcrypt"); //for password hashing

exports.signUp = (req, res) => {
    User.findOne({ contactNumber: req.body.contactNumber }).exec(
        async (err, user) => {
            if (err)
                return res
                    .status(400)
                    .json({ message: "something went wrong ", error: err });
            if (user)
                return res.status(400).json({
                    message: "User already registered",
                });

            const {
                role,
                fullName,
                email,
                contactNumber,
                password,
                address,
                city,
                state,
                pincode,
            } = req.body;

            let userStatus = "pending";

            if (role == "farmer" || role == "mandi") userStatus = "allowed";

            const hashPassword = await bcrypt.hash(password, 10);

            const _user = new User({
                role,
                fullName,
                email,
                contactNumber,
                hashPassword,
                address,
                city,
                state,
                pincode,
                userStatus,
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something went wrong",
                        error: error,
                    });
                }

                if (data) {
                    return res.status(201).json({
                        message: "User successfully registered",
                        user: data,
                    });
                }
            });
        }
    );
};

exports.signIn = (req, res) => {
    User.findOne({ contactNumber: req.body.contactNumber }).exec(
        (err, user) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            if (user) {
                if (user.authenticate(req.body.password)) {
                    //  send token for authorization
                    const token = jwt.sign(
                        { _id: user._id, role: user.role },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "3d",
                        }
                    );

                    const {
                        _id,
                        role,
                        fullName,
                        email,
                        contactNumber,
                        hashPassword,
                        address,
                        city,
                        state,
                        pincode,
                        userStatus,
                    } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id,
                            role,
                            fullName,
                            email,
                            contactNumber,
                            hashPassword,
                            address,
                            city,
                            state,
                            pincode,
                            userStatus,
                        },
                    });
                } else {
                    return res
                        .status(400)
                        .json({ message: "Invalid Password" });
                }
            } else {
                return res.status(400).json({ message: "User not found" });
            }
        }
    );
};

exports.signOut = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Signout successfully..." });
};
