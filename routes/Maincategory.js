const express = require("express");

const {
    getMaincategory
} = require("../controllers/MaincategoryController");

const router = express.Router();

router.get("/", getMaincategory);

module.exports = router;