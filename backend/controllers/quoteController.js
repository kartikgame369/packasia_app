const Quote = require('../models/Quote');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_PRODUCTS = ['corrugated-boxes', 'paper-bags', 'custom', 'other'];

exports.createQuote = async (req, res) => {
  try {
    const { name, company, email, phone, productType, quantity, dimensions, message } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Valid full name is required' });
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Valid email address is required' });
    }

    const normalizedProduct = productType && typeof productType === 'string' ? productType.toLowerCase() : 'custom';
    const safeProductType = ALLOWED_PRODUCTS.includes(normalizedProduct) ? normalizedProduct : 'custom';

    // Parse quantity safely
    let safeQuantity = undefined;
    if (quantity !== undefined && quantity !== null && quantity !== '') {
      const parsed = parseInt(quantity, 10);
      if (!isNaN(parsed) && parsed > 0 && parsed <= 10000000) {
        safeQuantity = parsed;
      }
    }

    // Security fix: Explicitly assign fields. Force status to 'pending' to prevent mass assignment tampering.
    const quote = await Quote.create({
      name: name.trim().slice(0, 100),
      company: typeof company === 'string' ? company.trim().slice(0, 120) : '',
      email: email.trim().toLowerCase().slice(0, 120),
      phone: typeof phone === 'string' ? phone.trim().slice(0, 30) : '',
      productType: safeProductType,
      quantity: safeQuantity,
      dimensions: typeof dimensions === 'string' ? dimensions.trim().slice(0, 100) : '',
      message: typeof message === 'string' ? message.trim().slice(0, 2000) : '',
      status: 'pending',
    });

    res.status(201).json({ success: true, data: quote });
  } catch (err) {
    console.error('Quote creation error:', err);
    res.status(400).json({ success: false, message: 'Unable to submit quote. Please check your input.' });
  }
};

exports.getMyQuotes = async (req, res) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }
    const quotes = await Quote.find({ email: req.user.email }).sort('-createdAt');
    res.json({ success: true, data: quotes });
  } catch (err) {
    console.error('getMyQuotes error:', err);
    res.status(500).json({ success: false, message: 'Failed to retrieve quotes' });
  }
};
