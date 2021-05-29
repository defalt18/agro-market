const express = require("express");
const { requireSignIn } = require("../controller/common-middleware/auth");
const {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    reviewUpdate,
    getAllUserProduct,
    getAllMandiProduct,
} = require("../controller/product");
const router = express.Router();

router.get("/products", getAllProducts);
router.post("/product/create", requireSignIn, createProduct);
router.get("/product/:id", getProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/user/:id", getAllUserProduct);
router.get("/mandiproduct", getAllMandiProduct);

router.post("product/review/:id", requireSignIn, reviewUpdate);
// router.get("product/review/:id", requireSignIn, getAllProduceReview);
// router.delete("product/review/:id", requireSignIn, deleteProduceReview);

// router.post("product/rating/:id", requireSignIn, addProduceRating);
// router.get("product/rating/:id", requireSignIn, getAllProduceRating);
// router.delete("product/rating/:id", requireSignIn, deleteProduceRating);

module.exports = router;
