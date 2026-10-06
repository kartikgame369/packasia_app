const express = require('express');
const { createQuote, getMyQuotes } = require('../controllers/quoteController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', createQuote); // public - anyone can submit a quote
router.get('/my', protect, getMyQuotes);

module.exports = router;
