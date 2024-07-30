const multer = require('multer')
const path = require('path')
require('dotenv').config()



const storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, './uploads')
      },
      filename: (req, file, cb) => {
            // console.log("File object in destination:", JSON.stringify(file, null, 2));
            const ext = path.extname(file.originalname);
            console.log("Ext" + ext)
            const filename = Date.now() + ext;
            cb(null, filename)
      }
})

const upload = multer({ storage })
// console.log("Upload" + JSON.stringify(upload, null , 2))

module.exports = {
      MONGO_URL: process.env.MONGO_URL,
      SECRET_KEY: process.env.SECRET_KEY,
      PORT: process.env.PORT || 5000,
      upload
}