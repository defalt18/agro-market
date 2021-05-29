const Product = require("../models/product");
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
        affordableRangeKM,
    } = req.body;

    const _product = new Product({
        productType,
        productName,
        slug: slugify(productName),
        quantityKG,
        showPrice,
        offerPrice,
        affordableRangeKM,
        userId: req.user._id,
    });

    _product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product)
            return res.status(201).json({
                message: "product created successfully",
                category: product,
            });
    });
};

exports.signOut = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Signout successfully..." });
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
            userId,
        };

        return res.status(200).json({
            message: "Product fetched successfully",
            product: sendProduct,
        });
    });
};

exports.updateProduct = (req, res) => {
    res.status(203).json({ message: "This feature will coming soon" });
};

exports.deleteProduct = (req, res) => {
    res.status(203).json({ message: "This feature will coming soon" });
};
