import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Shield, Droplets, Package, Download, CheckCircle2, ArrowRight, Lock, Layers, BadgeCheck, Scan } from 'lucide-react';

const sizes = [
  { id:'small', label:'Small', tag:'BAG/FILL', img:'/new_page_img/screen6.png',
    badge:'Tamper Evident',
    metric:'20 x 12 x 28 cm', imperial:'8" x 4.7" x 11"',
    bestFor:'Single meal boxes, coffee & pastry combos, bakery wraps, and small takeaway orders.',
    features:['Food-grade inner lining','Flat base for self-standing','Twisted paper handle'] },
  { id:'medium', label:'Medium', tag:'PREFERRED', img:'/new_page_img/screen7.png',
    badge:'Recommended', featured:true,
    metric:'28 x 16 x 35 cm', imperial:'11" x 6.3" x 13.8"',
    bestFor:'Full restaurant orders, multi-item takeaways, family meals and bento-set deliveries.',
    features:['Reinforced gusset sides','Oil & moisture barrier lining','Tamper-evident seal strip'] },
  { id:'large', label:'Large', tag:'BAG/FILL', img:'/new_page_img/screen8.png',
    badge:'Extra Capacity',
    metric:'36 x 18 x 42 cm', imperial:'14.2" x 7.1" x 16.5"',
    bestFor:'Catering trays, party platters, dual-meal combos, and premium event deliveries.',
    features:['Block-bottom gusset','Double-ply kraft lining','Heavy-duty handles'] },
  { id:'xl', label:'Extra Large (XL)', tag:'4L/APPROX', img:'/new_page_img/screen9.png',
    badge:'Bulk Catering',
    metric:'44 x 22 x 50 cm', imperial:'17.3" x 8.7" x 19.7"',
    bestFor:'Bulk catering, convention meals, large hampers, and institutional delivery runs.',
    features:['Oversized gusset bottom','Multi-bag carrier strip','Custom printing available'] },
];

export default function DeliveryBags() {
  const [selectedSize, setSelectedSize] = useState('medium');
  const selectedConfig = sizes.find(s => s.id === selectedSize) || sizes[1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -60 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pt-20 flex-1 min-h-screen flex flex-col font-['Inter'] text-[#181816] bg-[#F9F7F4]"
    >
      {/* SECTION 1: Hero */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div className="text-sm text-[#686862] tracking-wide font-medium">
            <Link to="/products" className="hover:text-[#0D4A2F] transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <Link to="/products/paper-bags" className="hover:text-[#0D4A2F] transition-colors">Paper Bags</Link>
            <span className="mx-2">/</span>
            <span className="text-[#181816]">Parcel Bags</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="chip flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-800 rounded-full text-xs font-semibold uppercase tracking-wider border border-green-200">
              <Leaf size={14} /> 100% RECYCLABLE KRAFT
            </span>
            <span className="chip flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
              FSCÂ® CERTIFIED
            </span>
          </div>
        </div>

        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] text-[#0D4A2F] mb-6 leading-tight"
          >
            Kraft Parcel Delivery Bags
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#686862] leading-relaxed mb-10"
          >
            Kraft sourced paper grain bags designed for table top food delivery, takeaway meals, bakery orders, and directly-to-customer handover boxes and catering platters. Minimum burst resistance, food-grade certified, and customisable Packasia printing for restaurants, fast kitchens, and food platforms.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 shadow-sm"
        >
          <div className="flex-1">
            <span className="font-bold text-[#181816]">Manufacturing Specifications: </span>
            <span className="text-[#686862]">Available in 120gsm - 150gsm virgin kraft or recycled blends. Custom sizes available with minimum run of 5,000 units. Base dimension modifications supported for specific container fits.</span>
          </div>
          <Link to="/contact" className="btn-primary shrink-0 whitespace-nowrap bg-[#0D4A2F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1A6B3C] transition-colors flex items-center gap-2">
            Request Custom Button <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* SECTION 2: Size Lineup */}
      <section className="bg-white py-16 lg:py-24 border-t border-[#F0EBE1]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-['Plus_Jakarta_Sans'] text-[#181816] mb-4">
                Standard Parcel Delivery Bag Size Lineup
              </h2>
              <p className="text-[#686862] text-lg">
                Fine-tuning maximum, bridge performance and small-load format floor for square, supermarket, and similar options.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-[#0D4A2F] text-white rounded-full text-sm font-semibold whitespace-nowrap">
                All Sizes (4)
              </button>
            </div>
          </div>



          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:p-2 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x md:snap-none">
            {sizes.map((size) => {
              const isSelected = selectedSize === size.id;
              return (
              <motion.div
                key={size.id}
                whileHover={{ y: -5 }}
                className={`flex-none w-[85vw] md:w-auto snap-center bg-white rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'ring-2 ring-[#0D4A2F] shadow-xl scale-[1.02] z-10' 
                    : 'border border-gray-200 shadow-sm hover:shadow-md hover:border-[#1A6B3C]'
                }`}
                onClick={() => setSelectedSize(size.id)}
              >
                {size.featured && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-[#0D4A2F] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-md whitespace-nowrap">
                    
                  </div>
                )}
                <div className="h-32 bg-[#F9F7F4] relative flex items-center justify-center p-1 overflow-hidden">
                  <img src={size.img} alt={size.label} className="h-full object-contain mix-blend-multiply scale-125 origin-bottom" />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[#181816] px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-sm z-10">
                    {size.badge}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-[#181816] font-['Plus_Jakarta_Sans']">{size.label}</h3>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#686862] bg-[#F0EBE1] px-1.5 py-0.5 rounded">{size.tag}</span>
                  </div>
                  <div className="mb-3">
                    <div className="font-mono text-[13px] text-[#0D4A2F] font-bold">{size.metric}</div>
                    <div className="text-[11px] text-[#686862]">{size.imperial}</div>
                  </div>
                  <p className="text-[12px] text-[#686862] mb-4 leading-relaxed flex-1">
                    {size.bestFor}
                  </p>
                  <ul className="space-y-1.5 mb-4 text-[#181816]">
                    {size.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12px]">
                        {idx === 0 ? <Shield size={14} className="text-[#1A6B3C] shrink-0 mt-0.5" /> : <CheckCircle2 size={14} className="text-[#1A6B3C] shrink-0 mt-0.5" />}
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-2 rounded-xl text-sm font-semibold transition-colors mt-auto ${
                      isSelected
                        ? 'bg-[#0D4A2F] text-white'
                        : 'bg-white text-[#181816] border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Size'}
                  </button>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* SECTION 3: Configurator Bar */}
      <section className="bg-[#F9F7F4] py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-[#0D4A2F] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div>
                <div className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">Currently Selected</div>
                <div className="text-white font-['Plus_Jakarta_Sans'] font-bold text-xl lg:text-2xl flex items-center gap-3">
                  {selectedConfig.label} Kraft Parcel Bag
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-mono whitespace-nowrap hidden sm:inline-block">
                    {selectedConfig.metric}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a href="/new_page_img/pdf.pdf" download="Packasia_Spec_Sheet.pdf" className="flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors w-full sm:w-auto py-2">
                <Download size={18} />
                <span className="font-medium text-sm">Download Spec Sheet</span>
              </a>
              <Link to="/contact" className="w-full sm:w-auto bg-white text-[#0D4A2F] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                Personalize <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Engineering Quality / Technical Specs */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#F0EBE1]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 bg-[#F0EBE1] text-[#181816] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Engineering Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-['Plus_Jakarta_Sans'] text-[#181816] mb-6">
              Food Delivery Packaging, Engineering & Safety Specs
            </h2>
            <p className="text-lg text-[#686862]">
              Engineered for fast, arduous passing lines and high-security points, our parcel bags feature dual-lock band protection with tamper-evident registration seals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#F2EFE8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-[#181816] mb-2">Tamper-Evident Closure & Hygiene</h3>
              <p className="text-sm text-[#686862] mb-5">Secure by design. Clean by standard</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Tamper-evident seal</strong> for secure, traceable delivery</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Fold-and-lock closure</strong> helps prevent unauthorized access in transit</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Controlled ventilation</strong> helps protect hot, crispy foods</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Hygienic production standards</strong> for clean, food-contact packaging</span></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#F2EFE8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-[#181816] mb-2">Oil & Moisture Barrier Substrates</h3>
              <p className="text-sm text-[#686862] mb-5">Built to handle grease, condensation, and everyday delivery challenges.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Grease-resistant barrier</strong> helps contain sauces and oily foods</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Moisture protection</strong> helps manage condensation from cold beverages</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">High-strength virgin paper</strong> supports reliable tear resistance</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Food-contact compliant materials</strong> for safe everyday use</span></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-[#F2EFE8] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Scan size={28} />
              </div>
              <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-[#181816] mb-2">Square Block Bottom Stability</h3>
              <p className="text-sm text-[#686862] mb-5">Designed to stand strong from packing line to doorstep.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Flat square base</strong> keeps takeaway containers upright</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">High burst resistance</strong> supports heavier food and liquid orders</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Curbside recyclable & commercially compostable</strong> construction</span></li>
                <li className="flex items-start gap-3"><BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" /><span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Water-based inks</strong> deliver a cleaner, more responsible finish</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <section className="py-16 bg-[#F9F7F4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0D4A2F] rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="lg:max-w-2xl text-center lg:text-left z-10">
              <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                Service Foundation & Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-white mb-6 leading-tight">
                Need custom branded food parcel bags or custom base sizing?
              </h2>
              <p className="text-white/80 text-lg">
                Our packaging craftsmen design custom Packasi×brand parcel bags with custom base-sizing, restaurant branding, delivery artwork, and minimum order starts at 1,000 units.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto z-10 shrink-0">
              <Link to="/quote" className="bg-white text-[#0D4A2F] px-8 py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Request of Custom Quote <ArrowRight size={18} />
              </Link>
              <a href="mailto:hello@packasiapackaging.com" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-colors flex items-center justify-center">
                hello@packasiapackaging.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
