const express = require('express');
const Add_DishController = require('../controllers/Add_DishController')
const router = express.Router()

console.log('Inside addDish route');

// router.get('/', Add_DishController.getAllDishes);
router.post("/", Add_DishController.insertDish);

module.exports = router;