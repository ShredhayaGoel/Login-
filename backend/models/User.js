const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        age: Number,
        mobile: Number,
        address: String
    }
);


const User = mongoose.model("User", userschema);

module.exports = User;
