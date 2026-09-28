// const Maincategory = require("../models/Maincategory")

const Faq = require("../models/Faq");


const getFaq = async (req, res) => {
    try {
        const data = await Faq.find();

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
    getFaq
};