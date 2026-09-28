const express = require("express");

const {
    getNewsletter
} = require("../controllers/NewsletterController");

const router = express.Router();

router.get("/", getNewsletter);

module.exports = router;