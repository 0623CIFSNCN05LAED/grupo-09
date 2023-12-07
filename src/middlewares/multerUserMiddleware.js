/*const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile; 
*/


const multer = require('multer');
const path = require("path");
const bcrypt = require('bcryptjs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars');
    },
    filename: async (req, file, cb) => {
        // Genera un nombre de archivo cifrado
        const saltRounds = 10;
        const fileName = `${await bcrypt.hash(file.originalname, saltRounds)}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;
