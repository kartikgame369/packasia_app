import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title, desc }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-[60vh] flex items-center justify-center py-20 px-4">
    <div className="text-center max-w-2xl">
      <h1 className="text-display-lg mb-6">{title}</h1>
      <p className="text-xl text-on-surface-variant leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const About = () => <PlaceholderPage title="About Us" desc="We are pioneers in eco-industrial packaging. Our mission is to deliver unmatched structural integrity while maintaining a zero-carbon footprint." />;
export const Manufacturing = () => <PlaceholderPage title="Manufacturing" desc="Our state-of-the-art facilities use recycled materials to produce high-ECT corrugated fiberboards and tear-resistant kraft paper." />;
export const Quote = () => <PlaceholderPage title="Request a Quote" desc="Contact our logistics specialists to design a custom packaging solution tailored to your product dimensions and supply chain requirements." />;
