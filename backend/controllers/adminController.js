const User = require('../models/User');
const Quote = require('../models/Quote');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort('-createdAt');
    res.json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort('-createdAt');
    res.json({ success: true, count: quotes.length, data: quotes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateQuoteStatus = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!quote) return res.status(404).json({ success: false, message: 'Quote not found' });
    res.json({ success: true, data: quote });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalQuotes = await Quote.countDocuments();
    const pendingQuotes = await Quote.countDocuments({ status: 'pending' });
    const recentQuotes = await Quote.find().sort('-createdAt').limit(5);
    res.json({ success: true, data: { totalUsers, totalQuotes, pendingQuotes, recentQuotes } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
//  backend/controllers/adminController.js