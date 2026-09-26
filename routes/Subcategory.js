const express = require("express");

const {
    getSubcategory
} = require("../controllers/SubcategoryController");

const router = express.Router();

router.get("/", getSubcategory);

module.exports = router;