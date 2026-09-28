const express = require("express");

const {
    getSetting
} = require("../controllers/SettingController");

const router = express.Router();

router.get("/", getSetting);

module.exports = router;