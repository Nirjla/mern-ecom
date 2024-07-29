const User = require("../models/User");
const bcrypt = require('bcryptjs')

module.exports.signin = async (req, res) => {
      const { email, password } = req.body;
      console.log(req.user)
      console.log(password)
      try {
            const isMatch = await bcrypt.compare(password, req.user.password)
            if (!isMatch) {
                  return res.status(400).json({ message: "Invalid email or password" })
            }
            const username = req.user.username
            const token = jwt.sign({ username }, SECRET_KEY, {
                  expiresIn: '1hr'
            })
            return res.status(200).json({ message: "Admin login successfully", token: token })
      } catch (err) {
            console.error("Error during signin:", err.message);
            res.status(500).json({ message: "Internal server error" });
      }
}

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