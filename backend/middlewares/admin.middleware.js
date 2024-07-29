const { SECRET_KEY } = require("../config");
const User = require("../models/User");

module.exports.adminMiddleware = async (req, res, next) => {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!existingUser.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }
        // Attach the user to the request object
        req.user = existingUser;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        console.error("Error in admin middleware:", err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
