const express = require("express");

const {
    getBrand
} = require("../controllers/BrandController");

const router = express.Router();

router.get("/", getBrand);

module.exports = router;