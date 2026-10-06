const express = require('express');
const { getAllUsers, getAllQuotes, updateQuoteStatus, getDashboardStats } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect, authorize('admin'));

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.get('/quotes', getAllQuotes);
router.patch('/quotes/:id/status', updateQuoteStatus);

module.exports = router;
