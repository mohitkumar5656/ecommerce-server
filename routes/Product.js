const express = require("express");

const {
    getProduct
} = require("../controllers/ProductController");

const router = express.Router();

router.get("/", getProduct);

module.exports = router;