const Setting = require("../models/Setting");

const getSetting = async (req, res) => {
    try {
        const data = await Setting.find();

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
    getSetting
};