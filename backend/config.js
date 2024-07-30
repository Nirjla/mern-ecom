const multer = require('multer')
const path = require('path')
require('dotenv').config()




const storage = multer.diskStorage({
      destination: (req, res, cb) => {
            cb(null, '/uploads')
      },
      filename: (req, res, cb) => {
            console.log(req)
            const ext = path.extname(file.originalname);
            const filename = Date.now() + ext;
            cb(null, filename)
      }
})

const upload = multer({ storage })


module.exports = {
      MONGO_URL: process.env.MONGO_URL,
      SECRET_KEY: process.env.SECRET_KEY,
      PORT: process.env.PORT || 5000,
      upload
}