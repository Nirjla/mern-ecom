const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { SECRET_KEY } = require('../config')
module.exports.signup = async (req, res) => {
      const { username, email, password } = req.body
      try {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                  return res.status(400).json({
                        message: "User already exists"
                  })
            }
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                  username, email, password: hashedPassword
            })
            await newUser.save();
            return res.status(201).json({
                  message: "User registered successfully"
            })
      } catch (error) {
            console.error("Error registering user", error)
      }
}


module.exports.signin = async (req, res) => {
      const { email, password } = req.body
      try {
            const existingUser = await User.findOne({ email })
            if (!existingUser) {
                  return res.status(400).send({
                        message: "User Not Found"
                  })
            }
            if (!existingUser.isAdmin) {
                  return res.status(403).json({ message: "Access denied, not an admin" });
            }
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if (!isMatch) {
                  return res.status(400).json({ message: "Invalid email or password" })
            }
            const username = existingUser.username
            const token = jwt.sign({ username }, SECRET_KEY, {
                  expiresIn: '1hr'
            })
            return res.status(200).json({
                  message: "Logged In Successfully",
                  token: token
            })
      } catch (err) {
            return res.status(500).json({
                  message: "Error logging user"
            })
      }
}