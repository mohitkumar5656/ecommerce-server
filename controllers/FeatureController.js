const Feature = require("../models/Feature");

const getFeature = async (req, res) => {
    try {
        const data = await Feature.find();

        res.json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getFeature
};