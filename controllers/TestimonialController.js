const Testimonial = require("../models/Testimonial");

const getTestimonial = async (req, res) => {
    try {
        const data = await Testimonial.find();

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
    getTestimonial
};
