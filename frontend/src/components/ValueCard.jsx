import React from 'react';
import { motion } from 'framer-motion';

export default function ValueCard({ icon: Icon, title, description, highlighted = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative p-8 rounded-3xl transition-shadow"
      style={highlighted
        ? { backgroundColor: 'var(--color-forest-deep)', color: '#fff', boxShadow: '0 20px 60px rgba(13,74,47,0.3)' }
        : { backgroundColor: 'var(--color-surface-card)', border: '1px solid var(--color-surface-muted)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }
      }
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
        style={{ backgroundColor: highlighted ? 'rgba(255,255,255,0.15)' : 'var(--color-olive-chip)' }}>
        <Icon size={22} style={{ color: highlighted ? '#fff' : 'var(--color-forest-mid)' }} />
      </div>
      <h3 className="text-lg font-bold mb-3" style={{
        fontFamily: 'var(--font-heading)',
        color: highlighted ? '#fff' : 'var(--color-text-primary)',
      }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{
        color: highlighted ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
      }}>
        {description}
      </p>
    </motion.div>
  );
}
