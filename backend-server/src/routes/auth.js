const express = require("express");
const {
    signUp,
    signIn,
    signOut,
    getUser,
    updateUser,
    deleteUser,
    reviewUpdate,
} = require("../controller/auth");
const { requireSignIn } = require("../controller/common-middleware/auth");
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.post("/user/review/:id", requireSignIn, reviewUpdate);
// router.get("user/review/:id", requireSignIn, getAllUserReview);
// router.delete("user/review/:id", requireSignIn, deleteUserReview);

module.exports = router;
