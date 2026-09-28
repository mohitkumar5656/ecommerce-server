const express = require("express");

const {
    getTestimonial
} = require("../controllers/TestimonialController");

const router = express.Router();

router.get("/", getTestimonial);

module.exports = router;