const express = require('express');
const Chef_InfoController = require('../controllers/Chef_InfoController.js')
const router = express.Router()


console.log("Inside Chef_Info Route");
router.get("/login", Chef_InfoController.login);
router.get("", Chef_InfoController.Chef_Info);
router.get("/:id", Chef_InfoController.chefName);

// should create a display id controller

module.exports = router;