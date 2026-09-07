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
        console.log("SIGNUP PASSWORD:", req.body.password);


    }
    catch (error) {
        res.status(500).json({
            message: "soomething went wrong",
            error: error.message
        })
    };
};


module.exports = {
    signup
};