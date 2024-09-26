// const multer = require('multer');
// const fs = require('fs');
// require('dotenv-flow').config({ silent: true })

// const storage = (folderName) => multer.diskStorage({
//     destination: function (req, file, cb) {
//         const uploadFolder = `${process.env.FOLDER_PATH}`;
//         const folderPath = `${uploadFolder}/${folderName}`;


//         if (!fs.existsSync(folderPath)) {
//             fs.mkdirSync(folderPath, { recursive: true });
//         }

//         cb(null, folderPath);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
//         cb(null, true);
//     } else {
//         cb(new Error('Only image & pdf files are allowed!'), false);
//     }
// };

// const uploadMiddleware = (folderName) => multer({ storage: storage(folderName), fileFilter: fileFilter });

// module.exports = { uploadMiddleware };
