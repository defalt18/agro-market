const User = require("../models/auth");
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

exports.getUser = (req, res) => {
    User.findById(req.params.id).exec((err, user) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!user)
            return res.status(400).json({
                message: "User not found",
            });

        const {
            role,
            fullName,
            email,
            contactNumber,
            profilePicture,
            address,
            city,
            state,
            pincode,
            userStatus,
            ratings,
            reviews,
            products,
        } = user;

        const sendUser = {
            role,
            fullName,
            email,
            contactNumber,
            profilePicture,
            address,
            city,
            state,
            pincode,
            userStatus,
            ratings,
            reviews,
            products,
        };

        return res.status(200).json({
            message: "User fetched successfully",
            user: sendUser,
        });
    });
};

exports.updateUser = (req, res) => {
    User.findById(req.params.id).exec((err, _user) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_user)
            return res.status(400).json({
                message: "User not found",
            });

        req.body.fullName != null && (_user.fullName = req.body.fullName);

        // const {
        //     fullName,
        //     email,
        //     contactNumber,
        //     address,
        //     city,
        //     state,
        //     pincode,
        // } = user;

        _user.save((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (user) {
                return res.status(201).json({
                    message: "User successfully updated",
                });
            }
        });
    });
};

exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, function (err) {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong", error: err });
        return res.status(201).json({ message: "User deleted" });
    });
};

exports.reviewUpdate = (req, res) => {
    console.log("user id", req.user._id);
    console.log("poaram id", req.params.id);

    User.findById(req.params.id).exec((err, _user) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_user)
            return res.status(400).json({
                message: "User not found",
            });
        if (req.body.addReview) {
            let totRating = _user.ratings * _user.reviews.length;
            totRating =
                (totRating + req.body.addReview.rating) /
                (_user.reviews.length + 1);
            let reviews = _user.reviews;
            reviews.push({
                ...req.body.addReview,
                user: req.user._id,
            });
            _user.reviews = reviews;
            _user.ratings = totRating;
        }

        if (req.body.delReview) {
            let totRating = _user.ratings * _user.reviews.length;
            totRating =
                (totRating - req.body.delReview.rating) /
                (_user.reviews.length - 1);
            _user.reviews.splice(
                _user.reviews.findIndex(
                    (review) => review._id == req.body.delReview._id
                ),
                1
            );
            _user.ratings = totRating;
        }
        _user.save((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (user) {
                return res.status(201).json({
                    message: "Review successfully updated",
                });
            }
        });
    });
};
