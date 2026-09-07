const express = require('express');

const User = require("../models/User");

const bcrypt = require('bcrypt');

const signup = async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);


        const user = await User.create(req.body);
        res.json({
            message: "User createed succesfully",
            user: user
        })

    }
    catch (error) {
        res.status(500).json({
            message: "soomething went wrong",
            error: error.message
        })
    };
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // 2. Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // 3. Login successful
        res.json({
            message: "Login successful",
            user: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};



module.exports = {
    signup
    , login
};