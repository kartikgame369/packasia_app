// ─── API Configuration ────────────────────────────────────────────────────────
//
// In development  → VITE_API_URL is set in .env (e.g. http://localhost:5000/api)
// In production   → requests go through the nginx proxy at /api  (relative path)
//                   nginx location /api/ { proxy_pass http://127.0.0.1:5000; }
//
// All API calls should be relative to this base URL.
// ──────────────────────────────────────────────────────────────────────────────

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
