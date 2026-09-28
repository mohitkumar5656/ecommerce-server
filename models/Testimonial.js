const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    designation: {
        type: String,
        required: [true, "Designation is Required"]
    },
    message: {
        type: String,
        required: [true, "Message is Required"]
    },
    pic: {
        type: String,
        required: [true, "Picture is Required"]
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;