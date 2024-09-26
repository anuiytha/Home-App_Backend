// const express = require("express");
// const router = express.Router();
// const { v4: uuidv4 } = require("uuid"); //
// const multer = require("multer");
// const submissionsController = require("../controllers/submissionsController");

// // router.post("/", submissionsController.createMenu);

// // module.exports = router;

// router.post(
//     "/",
//     (req, res, next) => {
//         // console.log(req, "request_body");
//         const folderName = uuidv4();

//         const upload = uploadMiddleware(folderName).array("image_path", 5); // It will allow 5 attachments
//         // console.log(`${process.env.FOLDER_PATH}`);
//         upload(req, res, function (err) {
//             req.body.image_path = folderName;
//             if (err instanceof multer.MulterError) {
//                 return res.status(500).json({ success: false, error: err.message });
//             } else if (err) {
//                 return res.status(500).json({ success: false, error: err.message });
//             }
//             next();
//         });
//     },
//     submissionsController.createMenu
// );

// module.exports = router;