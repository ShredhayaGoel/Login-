const User = require("../models/User");

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "User found",
            userId: user._id
        });

    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}
module.exports = forgotPassword;