const express = require('express');
const rateLimit = require('express-rate-limit');
const { createQuote, getMyQuotes } = require('../controllers/quoteController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Rate limit quote submissions: 20 quotes per hour per IP to prevent spam and DB bloating
const quoteLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Quote submission limit reached for this IP. Please try again later.' },
});

router.post('/', quoteLimiter, createQuote);
router.get('/my', protect, getMyQuotes);

module.exports = router;
