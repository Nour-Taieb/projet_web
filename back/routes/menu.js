const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Route pour obtenir tous les articles du menu
router.get('/', menuController.getAllMenuItems);

module.exports = router;
