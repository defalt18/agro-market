const Product = require("../models/product");
const User = require("../models/auth");
const slugify = require("slugify");

exports.getAllProducts = (req, res) => {
    Product.find({}).exec(async (err, products) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (products)
            return res.status(200).json({
                message: "all products fetched registered",
                products: products,
            });
    });
};

exports.createProduct = (req, res) => {
    const {
        productType,
        productName,
        quantityKG,
        showPrice,
        offerPrice,
        grade,
        affordableRangeKM,
    } = req.body;

    const _product = new Product({
        productType,
        productName,
        slug: slugify(productName),
        quantityKG,
        showPrice,
        offerPrice,
        grade,
        affordableRangeKM,
        userId: req.user._id,
    });
    _product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            User.findById(req.user._id).exec((err, _user) => {
                _user.products.push(product._id);
                _user.save();
            });
            console.log("product saved");
            return res.status(201).json({
                message: "product created successfully",
                category: product,
            });
        }
    });
};

exports.getProduct = (req, res) => {
    Product.findById(req.params.id).exec((err, product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!product)
            return res.status(400).json({
                message: "Product not found",
            });

        const {
            productType,
            productName,
            quantityKG,
            showPrice,
            offerPrice,
            affordableRangeKM,
            ratings,
            grade,
            userId,
        } = product;

        const sendProduct = {
            productType,
            productName,
            quantityKG,
            showPrice,
            offerPrice,
            affordableRangeKM,
            ratings,
            grade,
            userId,
        };

        return res.status(200).json({
            message: "Product fetched successfully",
            product: sendProduct,
        });
    });
};

exports.updateProduct = (req, res) => {
    Product.findById(req.params.id).exec((err, _product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_product)
            return res.status(400).json({
                message: "Product not found",
            });

        if (req.body.productType != null)
            _product.productType = req.body.productType;

        if (req.body.productName != null)
            _product.productName = req.body.productName;

        if (req.body.quantityKG != null)
            _product.quantityKG = req.body.quantityKG;

        if (req.body.showPrice != null) _product.showPrice = req.body.showPrice;

        if (req.body.offerPrice != null)
            _product.offerPrice = req.body.offerPrice;

        if (req.body.affordableRangeKM != null)
            _product.affordableRangeKM = req.body.affordableRangeKM;

        if (req.body.grade != null) _product.grade = req.body.grade;

        _product.save((error, product) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (product) {
                return res.status(201).json({
                    message: "Product successfully updated",
                });
            }
        });
    });
};

exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, function (err) {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong", error: err });
        return res.status(201).json({ message: "Product deleted" });
    });
};

exports.reviewUpdate = (req, res) => {
    Product.findById(req.params.id).exec((err, _product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_product)
            return res.status(400).json({
                message: "Product not found",
            });
        if (req.body.addReview) {
            let totRating = _product.ratings * _product.reviews.length;
            totRating =
                (totRating + req.body.addReview.rating) /
                (_product.reviews.length + 1);
            _product.reviews.push({
                ...req.body.addReview,
                user: req.user._id,
            });
            _product.ratings = totRating;
        }

        if (req.body.delReview) {
            let totRating = _product.ratings * _product.reviews.length;
            totRating =
                (totRating - req.body.delReview.rating) /
                (_product.reviews.length - 1);
            _product.reviews.splice(
                _product.reviews.findIndex(
                    (review) => review._id == req.body.delReview._id
                ),
                1
            );
            _product.ratings = totRating;
        }
        _product.save((error, product) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (product) {
                return res.status(201).json({
                    message: "Review successfully updated",
                });
            }
        });
    });
};

exports.addBid = (req, res) => {
    Product.findById(req.params.id).exec((err, _product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_product)
            return res.status(400).json({
                message: "Product not found",
            });

        const { price, quantity } = req.body.addBid;

        _product.bids = [
            ..._product.bids,
            { price, quantity, user: req.user._id },
        ];

        _product.save((error, product) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (product) {
                return res.status(201).json({
                    message: "Bid successfully added",
                });
            }
        });
    });
};

exports.updateBid = (req, res) => {
    Product.findById(req.params.id).exec((err, _product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_product)
            return res.status(400).json({
                message: "Product not found",
            });

        const { price, quantity, status } = req.body.updateBid;
        const index = _product.bids.findIndex((item) => {
            return item.user === req.user._id;
        });
        if (status) {
            _product.bids[index] = { price, quantity, status };
        } else {
            _product.bids[index] = { price, quantity };
        }

        _product.save((error, product) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (product) {
                return res.status(201).json({
                    message: "Bid successfully updated",
                });
            }
        });
    });
};

exports.deleteBid = (req, res) => {
    Product.findById(req.params.id).exec((err, _product) => {
        if (err)
            return res
                .status(400)
                .json({ message: "something went wrong ", error: err });
        if (!_product)
            return res.status(400).json({
                message: "Product not found",
            });

        const index = _product.bids.findIndex((item) => {
            return item.user === req.user._id;
        });

        _product.bids.splice(index, 1);

        _product.save((error, product) => {
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                    error: error,
                });
            }

            if (product) {
                return res.status(201).json({
                    message: "Bid successfully deleted",
                });
            }
        });
    });
};

exports.getAllUserProduct = (req, res) => {
    Product.find({ userId: req.params.id }).exec((err, products) => {
        if (err) {
            return res
                .status(400)
                .json({ message: "something went wrong", err: err });
        }
        return res.status(200).json({
            message: "all user's product fetched",
            products: products,
        });
    });
};

exports.getAllMandiProduct = (req, res) => {
    let prodList = [];
    User.find({ role: "mandi" }).exec((err, users) => {
        if (err) {
            return res
                .status(400)
                .json({ message: "something went wrong", err: err });
        }

        users.forEach(async (user) => {
            console.log("user", user);
            const myProm = new Promise((resolve, reject) => {
                Product.find({ userId: user._id }).exec((err, products) => {
                    // if (products) {
                    products?.forEach((prod) => {
                        console.log("prod", prod);
                        prodList.push({
                            mandiName: user.fullName,
                            city: user.city,
                            state: user.state,
                            contactNumber: user.contactNumber,
                            productName: prod.productName,
                            quantity: prod.quantityKG,
                            grade: prod.grade,
                            price: prod.showPrice,
                        });
                    });

                    resolve(prodList)
                    // }
                });
            });
        })
        
    });
};
