import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const productLinks = [
  { label: 'Parcel Paper Bags', to: '/products/paper-bags', desc: 'Durable mailing solutions' },
  { label: 'Paper Bags', to: '/products/parcel-paper-bags', desc: 'Sustainable retail solutions' },
  { label: 'Corrugated Boxes', to: '/products/corrugated-boxes', desc: 'Heavy-duty logistics packaging' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setProductsOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;
  const isProductActive = () => location.pathname.includes('/products');

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative text-sm font-semibold transition-colors duration-200 pb-1 group
        ${isActive(to) ? 'text-forest-deep' : 'text-gray-600 hover:text-gray-900'}`}
      style={{ fontFamily: 'var(--font-heading)', color: isActive(to) ? 'var(--color-forest-deep)' : undefined }}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
        style={{
          backgroundColor: 'var(--color-forest-deep)',
          width: isActive(to) ? '100%' : '0%'
        }}
      />
      <span
        className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full"
        style={{ backgroundColor: 'var(--color-forest-deep)', width: '0%' }}
      />
    </Link>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center h-14 lg:h-16 ${
          scrolled ? 'shadow-sm border-b' : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--color-surface)' : 'rgba(249, 247, 244, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: scrolled ? 'var(--color-surface-dim)' : 'transparent',
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              alt="Packasia Logo"
              className="h-6 lg:h-7 w-auto object-contain"
              src="/IMG/logo.png"
            />
            <span
              className="font-bold text-lg lg:text-xl tracking-tight"
              style={{ color: 'var(--color-forest-deep)', fontFamily: 'var(--font-heading)' }}
            >
              Packasia
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1 text-sm font-semibold transition-colors duration-200 pb-1 group`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: isProductActive() ? 'var(--color-forest-deep)' : 'var(--color-text-secondary)'
                }}
              >
                Products <ChevronDown size={13} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                <span
                  className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-forest-deep)',
                    width: isProductActive() ? '100%' : '0%'
                  }}
                />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full -left-4 mt-2 w-64 rounded-xl overflow-hidden shadow-xl border"
                    style={{ backgroundColor: 'var(--color-surface-card)', borderColor: 'var(--color-surface-muted)', minWidth: '220px' }}
                  >
                    {productLinks.map((p, i) => (
                      <Link
                        key={p.label}
                        to={p.to}
                        className="flex flex-col px-5 py-3.5 transition-colors hover:bg-gray-50 border-b last:border-0"
                        style={{ borderColor: 'var(--color-surface-dim)' }}
                      >
                        <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest-deep)' }}>{p.label}</span>
                        <span className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{p.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/manufacturing">Manufacturing</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-sm font-semibold" style={{ color: 'var(--color-forest-deep)', fontFamily: 'var(--font-heading)' }}>
                    Dashboard
                  </Link>
                )}
                <span className="text-sm" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-heading)' }}>Hi, {user.name.split(' ')[0]}</span>
                <button onClick={logout} className="btn-secondary text-sm py-2 px-5">Logout</button>
              </>
            ) : (
              <>
                <Link
                  to="/quote"
                  className="btn-primary text-sm py-2 px-6 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/login"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--color-forest-deep)' }}
                >
                  <User size={16} className="text-white" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors active:bg-black/5"
            style={{ color: 'var(--color-forest-deep)', zIndex: 60 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 flex flex-col shadow-2xl lg:hidden"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex-1 overflow-y-auto px-6 pt-24 pb-24 flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>Home</Link>
              
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-text-light)' }}>Products</span>
                {productLinks.map(p => (
                  <Link key={p.label} to={p.to} onClick={() => setMobileOpen(false)} className="text-lg font-medium pl-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest-deep)' }}>
                    {p.label}
                  </Link>
                ))}
              </div>
              
              <Link to="/manufacturing" onClick={() => setMobileOpen(false)} className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>Manufacturing</Link>
              <Link to="/insights" onClick={() => setMobileOpen(false)} className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>Insights</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>About Us</Link>
            </div>
            
            {/* Sticky Bottom Actions */}
            <div className="p-6 border-t mt-auto" style={{ borderColor: 'var(--color-surface-dim)', backgroundColor: 'var(--color-surface)' }}>
              <div className="flex flex-col gap-3">
                <Link to="/quote" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-center text-lg h-12">Get a Quote</Link>
                {!user && (
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-secondary w-full justify-center text-center text-lg h-12">
                    <User size={18} /> Client Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
