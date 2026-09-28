const Newsletter = require("../models/Newsletter");

const getNewsletter = async (req, res) => {
    try {
        const data = await Newsletter.find();

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
    getNewsletter
};