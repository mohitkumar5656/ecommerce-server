const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is Required"]
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

module.exports = Newsletter;