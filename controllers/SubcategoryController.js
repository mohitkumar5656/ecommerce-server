const Subcategory = require("../models/Subcategory");

// Get all subcategories
const getSubcategory = async (req, res) => {
    try {
        const data = await Subcategory.find();

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
    getSubcategory
};