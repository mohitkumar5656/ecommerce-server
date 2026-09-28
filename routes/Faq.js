const express = require("express");

const {
    getFaq
} = require("../controllers/FaqController");

const router = express.Router();

router.get("/", getFaq);

module.exports = router;