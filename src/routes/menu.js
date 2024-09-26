const express = require("express");
const menuController = require("../controllers/menuController");
const router = express.Router();

console.log("Inside menu routes->menu");
router.get('/:id', menuController.menuDetails);
router.get('/', menuController.allmenuDetails)

module.exports = router;