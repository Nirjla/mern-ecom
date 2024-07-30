const User = require("../models/User");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config");

module.exports.signin = async (req, res) => {
      const { email, password } = req.body;

      try {
            // Find the user by email
            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                  return res.status(404).json({ message: "User not found" });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(password, existingUser.password);

            if (!isMatch) {
                  return res.status(400).json({ message: "Invalid email or password" });
            }

            // Check if the user is an admin (if needed)
            if (!existingUser.isAdmin) {
                  return res.status(403).json({ message: "Access denied" });
            }

            // Generate a token
            const user = {
                  id: existingUser._id,
                  email: existingUser.email
            };
            const token = jwt.sign({ user}, SECRET_KEY, { expiresIn: '1hr' });

            // Send response
            return res.status(200).json({ message: "Admin login successfully", token });

      } catch (err) {
            console.error("Error during signin:", err.message);
            return res.status(500).json({ message: "Internal server error" });
      }
};
module.exports.signup = async (req, res) => {
      const { username, email, password } = req.body
      try {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                  return res.status(400).json({
                        message: "Admin already exists"
                  })
            }
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                  username, email, password: hashedPassword, isAdmin: true
            })
            await newUser.save();
            return res.status(201).json({
                  message: "Admin registered successfully"
            })
      } catch (error) {
            console.error("Error registering user", error)
      }
}