const express = require("express");
const { requireSignIn } = require("../controller/common-middleware/auth");
const {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/product");
const router = express.Router();

router.get("/products", getAllProducts);
router.post("/product/create", requireSignIn, createProduct);
router.get("/product/:id", getProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
