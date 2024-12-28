const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const router = express.Router();

// Endpoint pour traiter le paiement
router.post('/', processPayment);

module.exports = router;
