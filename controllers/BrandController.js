const Brand = require("../models/Brand");

const getBrand = async (req, res) => {
    try {
        const data = await Brand.find();

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
    getBrand
};