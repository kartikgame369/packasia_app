const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, token missing' });
  }

  if (!process.env.JWT_SECRET) {
    console.error('CRITICAL: JWT_SECRET environment variable is missing.');
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ success: false, message: 'User belonging to this token no longer exists' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Token is invalid or expired' });
  }
};

exports.authorize = (...roles) => (req, res, next) => {
  if (!req.user || !req.user.role || !roles.includes(req.user.role)) {
    return res.status(403).json({ success: false, message: 'Access forbidden: insufficient permissions' });
  }
  next();
};
