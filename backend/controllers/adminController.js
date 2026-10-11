const mongoose = require('mongoose');
const User = require('../models/User');
const Quote = require('../models/Quote');

const ALLOWED_STATUSES = ['pending', 'reviewed', 'quoted', 'closed'];

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-__v').sort('-createdAt');
    res.json({ success: true, count: users.length, data: users });
  } catch (err) {
    console.error('getAllUsers error:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve users' });
  }
};

exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort('-createdAt');
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (err) {
    console.error('getAllQuotes error:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve quotes' });
  }
};

exports.updateQuoteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid quote ID format' });
    }

    if (!status || !ALLOWED_STATUSES.includes(status)) {
      return res.status(400).json({ 
        success: false, 
        message: `Invalid status. Allowed values: ${ALLOWED_STATUSES.join(', ')}` 
      });
    }

    const quote = await Quote.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!quote) {
      return res.status(404).json({ success: false, message: 'Quote not found' });
    }

    res.json({ success: true, data: quote });
  } catch (err) {
    console.error('updateQuoteStatus error:', err);
    res.status(500).json({ success: false, message: 'Failed to update quote status' });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalQuotes = await Quote.countDocuments();
    const pendingQuotes = await Quote.countDocuments({ status: 'pending' });
    const recentQuotes = await Quote.find().sort('-createdAt').limit(5);

    res.json({
      success: true,
      data: { totalUsers, totalQuotes, pendingQuotes, recentQuotes },
    });
  } catch (err) {
    console.error('getDashboardStats error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard statistics' });
  }
};