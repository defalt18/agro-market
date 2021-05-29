const Product = require("../models/product");
const slugify = require("slugify");

exports.createProduct = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body });

    const {
        productType,
        productName,
        quantityKG,
        showPrice,
        offerPrice,
        affordableRangeKM,
    } = req.body;

    const product = new Product({
        productType,
        productName,
        slug: slugify(productName),
        quantityKG,
        showPrice,
        offerPrice,
        affordableRangeKM,
        createdBy: req.user._id,
    });

    product.save((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product)
            return res.status(201).json({
                message: "Product created successfully",
                category: product,
            });
    });
};
