require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const { connectDB, getStatus } = require('./config/db');

// Verify critical environment variables
if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET environment variable is missing. Set it in .env.');
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
}

// Connect to MongoDB
connectDB();

const app = express();

// Security HTTP Headers
app.use(helmet());

// CORS configuration supporting dynamic allowed origins from environment
const defaultOrigins = ['http://localhost:5173'];
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : defaultOrigins;

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (Postman, curl, server-to-server) or approved origins
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS policy'));
    },
    credentials: true,
  })
);

// Body parsing with strict size limits to prevent Denial of Service
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Sanitize user-supplied data to prevent MongoDB Operator Injection ($gt, $ne, etc.)
app.use(mongoSanitize());

// Database availability check middleware (sanitized response, no path disclosure)
app.use('/api', (req, res, next) => {
  if (req.path === '/health') return next();
  if (req.path.startsWith('/chat')) return next();
  if (!getStatus()) {
    return res.status(503).json({
      success: false,
      message: 'Database service is currently unavailable. Please try again shortly.',
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

// Centralized error handling middleware (generic error response, logs server-side)
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message && process.env.NODE_ENV !== 'production' ? err.message : 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`));
