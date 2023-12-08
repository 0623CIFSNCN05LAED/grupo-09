
const multer = require('multer');
const path = require("path");
const bcrypt = require('bcryptjs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/avatars')
    },

    filename: async (req, file, cb) => {
        /*const fileName = `${await bcrypt.hash(file.originalname, 10)}_img${path.extname(file.originalname)}`;*/
        const fileName = Date.now() + path.extname(file.originalname)
        cb(null, fileName);
    }
    
})

const uploadFile = multer({ storage });

module.exports = uploadFile;
