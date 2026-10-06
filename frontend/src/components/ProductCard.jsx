import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ title, description, image, link, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group card overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: 'var(--color-surface-dim)' }}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(13,74,47,0.6) 0%, transparent 60%)' }} />

        {/* Hover CTA */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <Link to={link}
            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-white text-sm font-semibold"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', fontFamily: 'var(--font-heading)', border: '1px solid rgba(255,255,255,0.3)' }}>
            Explore Product <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest-deep)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
        <Link to={link}
          className="inline-flex items-center gap-2 text-sm font-semibold group/link transition-colors"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest-deep)' }}>
          Learn More
          <ArrowRight size={16} className="group-hover/link:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
