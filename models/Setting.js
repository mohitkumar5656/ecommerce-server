const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    value: {
        type: String,
        required: [true, "Value is Required"]
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Setting = mongoose.model("Setting", SettingSchema);

module.exports = Setting;