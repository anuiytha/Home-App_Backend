const express = require('express');
const Admin_Controller = require('../controllers/adminController.js')
const router = express.Router()

router.get("/adminlogin", Admin_Controller.login);
router.get("", Admin_Controller.Admin_Info);
router.get("/:adminid", Admin_Controller.AdminName);

// should create a display id controller

module.exports = router;