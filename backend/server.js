require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Database availability check middleware
const { getStatus } = require('./config/db');
app.use('/api', (req, res, next) => {
  if (req.path === '/health') return next();
  if (req.path.startsWith('/chat')) return next();
  if (!getStatus()) {
    return res.status(503).json({
      success: false,
      message: 'Database is offline. Please start MongoDB locally or configure a connection string (MONGODB_URI) in packasia_app/backend/.env.'
    });
  }
  next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/insights', require('./routes/insights'));
app.use('/api/chat', require('./routes/chat'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Packasia API running' }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
