import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Package2, ArrowRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const { login, register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = isLogin
      ? await login(form.email, form.password)
      : await register(form.name, form.email, form.password, form.role);

    if (result.success) {
      navigate(result.user.role === 'admin' ? '/admin' : '/');
    } else {
      setError(result.message);
    }
  };

  const inputClass = `w-full px-4 py-3 text-sm rounded-xl border transition-all outline-none focus:ring-2`;
  const inputStyle = { backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-surface-muted)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex" style={{ backgroundColor: 'var(--color-background)' }}>

      {/* Left panel — decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-14"
        style={{ backgroundColor: 'var(--color-forest-deep)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #1A6B3C, transparent 60%), radial-gradient(circle at 20% 80%, #8B5E3C, transparent 50%)' }} />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2.5 mb-16">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2D8653, #C49A6C)' }}>
              <Package2 className="text-white" size={20} />
            </div>
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>Packasia</span>
          </Link>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
            Welcome to the Packasia portal.
          </h2>
          <p className="text-white/60 text-sm">Manage your orders, track quotes, and access exclusive resources.</p>
        </div>

        <div className="relative z-10 rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="text-white/80 text-sm italic leading-relaxed">
            "Packasia transformed our logistics completely. The box quality is exceptional and the eco-credentials give our brand a real edge."
          </p>
          <p className="text-white/40 text-xs mt-3" style={{ fontFamily: 'var(--font-mono)' }}>— Ahmad R., Supply Chain Director</p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 pt-28">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button onClick={() => { setIsLogin(!isLogin); setError(''); }}
                className="font-semibold hover:underline" style={{ color: 'var(--color-forest-deep)', fontFamily: 'var(--font-heading)' }}>
                {isLogin ? 'Register' : 'Sign in'}
              </button>
            </p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="mb-6 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
              style={{ backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)', border: '1px solid rgba(192,57,43,0.2)' }}>
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-secondary)' }}>
                  Full Name
                </label>
                <input name="name" type="text" required value={form.name} onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass} style={inputStyle} />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-secondary)' }}>
                Email Address
              </label>
              <input name="email" type="email" required value={form.email} onChange={handleChange}
                placeholder="you@company.com"
                className={inputClass} style={inputStyle} />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-secondary)' }}>
                Password
              </label>
              <div className="relative">
                <input name="password" type={showPass ? 'text' : 'password'} required value={form.password} onChange={handleChange}
                  placeholder="Min. 6 characters"
                  className={`${inputClass} pr-12`} style={inputStyle} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: 'var(--color-text-light)' }}>
                  {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-secondary)' }}>
                  Account Type
                </label>
                <select name="role" value={form.role} onChange={handleChange}
                  className={inputClass} style={inputStyle}>
                  <option value="user">Customer Account</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
