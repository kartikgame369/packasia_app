const Quote = require('../models/Quote');

exports.createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json({ success: true, data: quote });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getMyQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ email: req.user.email }).sort('-createdAt');
    res.json({ success: true, data: quotes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
