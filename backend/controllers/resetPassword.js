const bcrypt = require("bcrypt");
const User = require("../models/User");

const resetPassword = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;



        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await User.updateOne(
            { email: email },
            { $set: { password: hashedPassword } }
        );

        res.json({
            message: "Password updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

module.exports = resetPassword;