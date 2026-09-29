const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is Required"]
    },

    maincategory: {
        type: String,
        required: [true, "Maincategory is Required"]
    },

    subcategory: {
        type: String,
        required: [true, "Subcategory is Required"]
    },

    brand: {
        type: String,
        required: [true, "Brand is Required"]
    },

    color: {
        type: [String],
        required: true
    },

    size: {
        type: [String],
        required: true
    },

    basePrice: {
        type: Number,
        required: [true, "Base Price is Required"]
    },

    discount: {
        type: Number,
        required: [true, "Discount is Required"]
    },

    finalPrice: {
        type: Number,
        required: [true, "Final Price is Required"]
    },

    stock: {
        type: Boolean,
        default: true
    },

    stockQuantity: {
        type: Number,
        required: [true, "Stock Quantity is Required"]
    },

    description: {
        type: String,
        default: ""
    },

    pic: {
        type: [String],
        required: true
    },

    status: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model(
    "Product",
    ProductSchema,
    "products"
);

module.exports = Product;