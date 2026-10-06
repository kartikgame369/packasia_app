const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, trim: true },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String },
  productType: {
    type: String,
    enum: ['corrugated-boxes', 'paper-bags', 'custom', 'other'],
    required: true,
  },
  quantity: { type: Number },
  dimensions: { type: String },
  message: { type: String },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'quoted', 'closed'],
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Quote', QuoteSchema);
