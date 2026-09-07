const express = require('express');

const User = require("../models/User");

const bcrypt = require('bcrypt');

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        console.log(user);

        if (!user) {
            return res.status(401).json({
                message: "Invalid eamil or password"
            });
        }
        console.log("password:", password);

        console.log("DB password:", user.password);

        const match = await bcrypt.compare(password, user.password);

        console.log("DB password:", user.password);
        console.log("Match:", match);

        if (!match) {
            return res.status(401).json({
                message: "Invalid  password"
            })
        }

        res.json({
            message: "Login successfull",
            user: user
        })

    }


    catch (error) {

        res.status(500).json({

            message: "Something went wrong",
            error: error.message

        })
    }

};

module.exports = {

    login

}