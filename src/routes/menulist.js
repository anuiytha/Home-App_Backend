const express = require("express");
const router = express.Router();
const menulistController = require("../controllers/menulistController");

console.log("Inside menulist route");
router.post("/", menulistController.createmenulist);


module.exports = router;