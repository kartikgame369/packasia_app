import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package, Users, FileText, Clock, CheckCircle, ArrowRight, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';

const statusColors = {
  pending: { bg: '#FEF3C7', text: '#92400E' },
  reviewed: { bg: '#DBEAFE', text: '#1E40AF' },
  quoted: { bg: '#D1FAE5', text: '#065F46' },
  closed: { bg: '#F3F4F6', text: '#6B7280' },
};

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || user.role !== 'admin') { navigate('/login'); return; }

    const fetchData = async () => {
      try {
        const [statsRes, quotesRes] = await Promise.all([
          api.get('/admin/stats'),
          api.get('/admin/quotes'),
        ]);
        setStats(statsRes.data.data);
        setQuotes(quotesRes.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user, navigate]);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/admin/quotes/${id}/status`, { status });
      setQuotes(prev => prev.map(q => q._id === id ? { ...q, status } : q));
    } catch (err) { console.error(err); }
  };

  if (loading) return (
    <div className="min-h-screen pt-28 flex items-center justify-center" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="text-center">
        <div className="w-10 h-10 border-2 rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: 'var(--color-forest-deep)', borderTopColor: 'transparent' }} />
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Loading dashboard...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen pt-28 flex items-center justify-center">
      <div className="text-center max-w-sm">
        <p className="text-sm mb-4" style={{ color: 'var(--color-error)' }}>{error}</p>
        <button onClick={() => { logout(); navigate('/login'); }} className="btn-primary">Back to Login</button>
      </div>
    </div>
  );

  const statCards = [
    { label: 'Total Clients', value: stats?.totalUsers ?? 0, icon: Users, color: 'var(--color-olive-chip)', iconColor: 'var(--color-forest-mid)' },
    { label: 'Total Quotes', value: stats?.totalQuotes ?? 0, icon: FileText, color: '#EFF6FF', iconColor: '#3B82F6' },
    { label: 'Pending Review', value: stats?.pendingQuotes ?? 0, icon: Clock, color: '#FEF3C7', iconColor: '#D97706' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-1">Admin Portal</p>
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Dashboard
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>Welcome back, {user?.name}</p>
          </div>
          <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary flex items-center gap-2">
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {statCards.map(({ label, value, icon: Icon, color, iconColor }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6" style={{ backgroundColor: 'var(--color-surface-card)', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
                  <Icon size={18} style={{ color: iconColor }} />
                </div>
              </div>
              <p className="text-4xl font-extrabold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>{value}</p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{label.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>

        {/* Quotes table */}
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--color-surface-card)', boxShadow: '0 4px 30px rgba(0,0,0,0.07)' }}>
          <div className="px-8 py-6 border-b" style={{ borderColor: 'var(--color-surface-muted)' }}>
            <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>All Quote Requests</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-surface-muted)' }}>
                  {['Client', 'Company', 'Product', 'Qty', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quotes.length === 0 ? (
                  <tr><td colSpan={7} className="px-6 py-12 text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>No quotes yet.</td></tr>
                ) : quotes.map((q, i) => (
                  <tr key={q._id}
                    className="border-b transition-colors hover:bg-gray-50/50"
                    style={{ borderColor: 'var(--color-surface-dim)', animationDelay: `${i * 0.05}s` }}>
                    <td className="px-6 py-4 font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{q.name}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--color-text-muted)' }}>{q.company || '—'}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--color-text-secondary)' }}>{q.productType}</td>
                    <td className="px-6 py-4" style={{ color: 'var(--color-text-muted)' }}>{q.quantity || '—'}</td>
                    <td className="px-6 py-4 text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {new Date(q.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: statusColors[q.status]?.bg, color: statusColors[q.status]?.text }}>
                        {q.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select value={q.status} onChange={e => updateStatus(q._id, e.target.value)}
                        className="text-xs rounded-lg px-2 py-1.5 outline-none border"
                        style={{ borderColor: 'var(--color-surface-muted)', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
                        {['pending', 'reviewed', 'quoted', 'closed'].map(s => (
                          <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
