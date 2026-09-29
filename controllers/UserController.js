const User = require("../models/User");


// Get all users
const getUser = async (req, res) => {
    try {
        const data = await User.find();

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


// Create user
const createUser = async (req, res) => {
    try {
        const data = await User.create(req.body);

        res.status(201).json({
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


// Update user
const updateUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

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


// Delete user
const deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(
            req.params.id
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

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
    getUser,
    createUser,
    updateUser,
    deleteUser
};