const mongoose = require('mongoose')
const { MONGO_URL } = require('./config')

const connectDB = async () => {
      try {
            await mongoose.connect(MONGO_URL)
            console.log('MongoDb connected')
      } catch (error) {
            console.error(error.message)
      }
}

module.exports = connectDB