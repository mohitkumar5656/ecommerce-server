const express = require("express");

const {
    getFeature
} = require("../controllers/FeatureController");

const router = express.Router();

router.get("/", getFeature);

module.exports = router;