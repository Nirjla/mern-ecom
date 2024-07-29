require('dotenv').config()

module.exports = {
      MONGO_URL: process.env.MONGO_URL,
      SECRET_KEY: process.env.SECRET_KEY,
      PORT: process.env.PORT || 3000
}