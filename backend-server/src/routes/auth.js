const express = require("express");
const {
    signUp,
    signIn,
    signOut,
    getUser,
    updateUser,
    deleteUser,
} = require("../controller/auth");
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
