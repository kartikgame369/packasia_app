import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ArrowRight, ShieldCheck, ChevronDown, 
  CheckCircle2, Package, ShoppingBag, User, Building2, 
  Layers, Star, Sparkles, Check, Info
} from 'lucide-react';

// ── Product Categories ─────────────────────────────────────────────────────
const PRODUCT_CATEGORIES = [
  {
    id: 'corrugated',
    name: 'Corrugated Boxes',
    subtitle: '3-Ply, 5-Ply, 7-Ply Multi-Wall',
    icon: Package,
  },
  {
    id: 'paper',
    name: 'Paper Carry Bags',
    subtitle: 'Retail & Boutique Kraft Bags',
    icon: ShoppingBag,
  },
  {
    id: 'delivery',
    name: 'Parcel Delivery Bags',
    subtitle: 'Food-Grade & Takeaway Bags',
    icon: ShoppingBag,
  },
];

// ── 3-Ply, 5-Ply, 7-Ply Corrugated Box Specifications ─────────────────────
const CORRUGATED_SIZES = [
  {
    id: '3ply',
    ply: '3-Ply',
    name: '3-Ply Corrugated Box',
    sub: 'Single Wall Liner',
    img: '/IMG/3_ply.jpg',
    burst: '7–10 kg/cm²',
    load: 'Up to 10 kg',
    desc: 'Lightweight & cost-effective. Perfect for e-commerce parcels, retail goods, apparel, and FMCG.',
    tag: 'Single Wall',
    badge: 'Light Duty',
  },
  {
    id: '5ply',
    ply: '5-Ply',
    name: '5-Ply Corrugated Box',
    sub: 'Double Wall Liner',
    img: '/IMG/5ply.jpg',
    burst: '12–16 kg/cm²',
    load: 'Up to 30 kg',
    desc: 'Enhanced rigidity & stacking strength. Industry standard for electronics, glassware, and export shipping.',
    tag: 'Double Wall',
    badge: 'Most Popular',
    featured: true,
  },
  {
    id: '7ply',
    ply: '7-Ply',
    name: '7-Ply Corrugated Box',
    sub: 'Triple Wall Heavy-Duty',
    img: '/IMG/7_ply.jpg',
    burst: '500+ lbs/sq.in',
    load: 'Up to 300 lbs (135+ kg)',
    desc: 'Extreme crush resistance & durability. Engineered for heavy industrial machinery, automotive, and bulk freight.',
    tag: 'Triple Wall',
    badge: 'Heavy Industrial',
  },
];

// ── Paper Carry Bags Sizes ─────────────────────────────────────────────────
const PAPER_BAG_SIZES = [
  {
    id: 'xs',
    label: 'XS / Mini',
    metric: '12 × 6 × 16 cm',
    volume: '1.1 L',
    bestFor: 'Jewellery, cosmetics, luxury tester sets',
    badge: 'Compact',
  },
  {
    id: 'small',
    label: 'Small',
    metric: '18 × 8 × 23 cm',
    volume: '3.3 L',
    bestFor: 'Artisan bakery, skincare, pharmacy goods',
    badge: 'Standard',
  },
  {
    id: 'medium',
    label: 'Medium',
    metric: '25 × 11 × 32 cm',
    volume: '8.8 L',
    bestFor: 'Apparel, t-shirts, novels, lifestyle cafes',
    badge: 'Recommended',
    featured: true,
  },
  {
    id: 'large',
    label: 'Large',
    metric: '32 × 13 × 42 cm',
    volume: '17.5 L',
    bestFor: 'Winter apparel, shoeboxes, fashion retail',
    badge: 'Spacious',
  },
  {
    id: 'xl',
    label: 'XL / Jumbo',
    metric: '42 × 16 × 48 cm',
    volume: '32.2 L',
    bestFor: 'Bulky merchandise, gift hampers, bulk sets',
    badge: 'Heavy Duty',
  },
];

// ── Parcel Delivery Bags Sizes ─────────────────────────────────────────────
const DELIVERY_BAG_SIZES = [
  {
    id: 'del_s',
    label: 'Small',
    metric: '20 × 12 × 28 cm',
    bestFor: 'Single meal box, coffee & pastry, cafe takeaway',
    badge: 'Tamper Evident',
  },
  {
    id: 'del_m',
    label: 'Medium',
    metric: '28 × 16 × 35 cm',
    bestFor: 'Full restaurant orders, family bento meals',
    badge: 'Recommended',
    featured: true,
  },
  {
    id: 'del_l',
    label: 'Large',
    metric: '36 × 18 × 42 cm',
    bestFor: 'Catering trays, platters, multi-meal containers',
    badge: 'Extra Capacity',
  },
  {
    id: 'del_xl',
    label: 'Extra Large (XL)',
    metric: '44 × 22 × 50 cm',
    bestFor: 'Bulk catering, convention runs, large platters',
    badge: 'Bulk Catering',
  },
];

// ── Reusable Component Helpers ─────────────────────────────────────────────
const inputCls = "w-full bg-[#FCFAF8] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D4A2F]/30 focus:border-[#0D4A2F] placeholder-gray-400 transition-all";
const labelCls = "block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5";

const SectionDivider = ({ label, tag, isRequired }) => (
  <div className="flex items-center gap-3 my-7">
    <div className="h-px bg-gray-200 flex-1" />
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
        {label}
      </span>
      {tag && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
          isRequired 
            ? 'bg-red-50 text-red-600 border border-red-200' 
            : 'bg-gray-100 text-gray-500 border border-gray-200'
        }`}>
          {tag}
        </span>
      )}
    </div>
    <div className="h-px bg-gray-200 flex-1" />
  </div>
);

export default function Quote() {
  // Category state — defaults to 'corrugated' so 3-ply, 5-ply, 7-ply are immediately visible
  const [product, setProduct] = useState('corrugated');
  const [selectedPly, setSelectedPly] = useState('5ply');
  const [selectedBagSize, setSelectedBagSize] = useState('medium');
  const [selectedDeliverySize, setSelectedDeliverySize] = useState('del_m');

  // Form input states
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('');
  const [location, setLocation] = useState('');
  const [customDimensions, setCustomDimensions] = useState('');
  const [printing, setPrinting] = useState('none');
  const [notes, setNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSelectedSizeSummary = () => {
    if (product === 'corrugated') {
      const match = CORRUGATED_SIZES.find(c => c.id === selectedPly);
      return match ? `${match.ply} (${match.tag})` : '5-Ply Double Wall';
    }
    if (product === 'paper') {
      const match = PAPER_BAG_SIZES.find(b => b.id === selectedBagSize);
      return match ? `${match.label} - ${match.metric}` : 'Medium';
    }
    if (product === 'delivery') {
      const match = DELIVERY_BAG_SIZES.find(d => d.id === selectedDeliverySize);
      return match ? `${match.label} - ${match.metric}` : 'Medium';
    }
    return 'Custom Specification';
  };

  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Breadcrumbs / Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#0D4A2F] font-semibold">Request a Quote</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Get a Custom Packaging Quote
          </h1>
          <p className="text-base text-gray-600 mt-2 max-w-2xl">
            Choose your packaging type and ply or size specification, then fill in your business details. Our engineers deliver custom pricing within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* ── Left Sidebar Info ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-4/12 flex flex-col gap-6"
          >
            {/* Summary Card */}
            <div className="bg-[#0D4A2F] text-white p-7 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block bg-white/15 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase mb-4">
                  FAST QUOTE ENGINE
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Selected Specification
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 my-4 border border-white/15">
                  <p className="text-xs text-white/70 uppercase tracking-wider font-mono">Category</p>
                  <p className="font-bold text-base text-white capitalize mt-0.5">
                    {PRODUCT_CATEGORIES.find(c => c.id === product)?.name}
                  </p>
                  <div className="h-px bg-white/15 my-2.5" />
                  <p className="text-xs text-white/70 uppercase tracking-wider font-mono">Size / Thickness</p>
                  <p className="font-bold text-base text-green-300 mt-0.5">
                    {getSelectedSizeSummary()}
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-400 shrink-0" />
                    <span>Direct factory wholesale pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-400 shrink-0" />
                    <span>ISO 9001 & FSC® Certified Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-green-400 shrink-0" />
                    <span>Pan-India shipping within 7–14 days</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col gap-5">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                Direct Contact
              </h4>
              
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#0D4A2F] shrink-0 mt-0.5">
                  <Phone size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Priority Sales Desk</p>
                  <p className="text-sm font-semibold text-gray-800">+91 70204 82515</p>
                  <p className="text-sm font-semibold text-gray-800">+91 82370 50035</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#0D4A2F] shrink-0 mt-0.5">
                  <Mail size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email Inquiry</p>
                  <a href="mailto:info@packasiapackaging.com" className="text-sm font-semibold text-[#0D4A2F] hover:underline break-all">
                    info@packasiapackaging.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#0D4A2F] shrink-0 mt-0.5">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Factory & Headquarters</p>
                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    Plot No. 29, Wardha Rd, near Rly Gate, beside New Underpass, Manish Layout, Nagpur, Maharashtra 440037
                  </p>
                </div>
              </div>

              <div className="mt-2 bg-[#F4F1E9] p-3.5 rounded-2xl flex items-center gap-2.5 text-xs text-gray-700">
                <ShieldCheck size={18} className="text-[#0D4A2F] shrink-0" />
                <span>NDA & Client Data 100% Confidential</span>
              </div>
            </div>
          </motion.div>

          {/* ── Main Quote Form ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-8/12"
          >
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-6 sm:p-10">

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success Screen ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-[#0D4A2F] mb-2">
                      <CheckCircle2 size={36} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                      Quote Request Received!
                    </h2>
                    <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                      Thank you, <strong className="text-gray-900">{fullName || 'Valued Client'}</strong>! We have recorded your request for <strong className="text-[#0D4A2F]">{getSelectedSizeSummary()}</strong>. Our packaging specialists will contact you at <strong className="text-gray-900">{email || phone}</strong> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 bg-[#0D4A2F] text-white rounded-full font-semibold text-sm hover:bg-[#1A6B3C] transition-colors"
                    >
                      Submit Another Specification
                    </button>
                  </motion.div>
                ) : (
                  /* ── Interactive Quote Form ── */
                  <form onSubmit={handleSubmit}>

                    {/* ══════════════════════════════════════════════════════
                        STEP 1: PRODUCT CATEGORY SELECTION
                       ══════════════════════════════════════════════════════ */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <label className={labelCls}>
                          1. Select Packaging Category
                        </label>
                        <span className="text-xs text-gray-400 font-medium">Click to change</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {PRODUCT_CATEGORIES.map(cat => {
                          const isSelected = product === cat.id;
                          const IconComp = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setProduct(cat.id)}
                              className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                                isSelected
                                  ? 'border-[#0D4A2F] bg-green-50/40 shadow-sm ring-1 ring-[#0D4A2F]'
                                  : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                  isSelected ? 'bg-[#0D4A2F] text-white' : 'bg-gray-100 text-gray-600'
                                }`}>
                                  <IconComp size={16} />
                                </div>
                                {isSelected && (
                                  <span className="w-5 h-5 rounded-full bg-[#0D4A2F] text-white flex items-center justify-center">
                                    <Check size={12} />
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className={`font-bold text-sm ${isSelected ? 'text-[#0D4A2F]' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                                  {cat.name}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                                  {cat.subtitle}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ══════════════════════════════════════════════════════
                        STEP 2: SIZE / PLY SELECTION (3-PLY, 5-PLY, 7-PLY)
                       ══════════════════════════════════════════════════════ */}
                    <div className="mb-8">
                      {product === 'corrugated' && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <label className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                                <Layers size={15} className="text-[#0D4A2F]" />
                                2. Choose Corrugated Box Ply / Thickness
                              </label>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Select between 3-Ply, 5-Ply, or 7-Ply wall construction
                              </p>
                            </div>
                            <span className="text-[11px] font-bold text-[#0D4A2F] bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                              3-Ply • 5-Ply • 7-Ply
                            </span>
                          </div>

                          {/* 3-PLY, 5-PLY, 7-PLY CARDS */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {CORRUGATED_SIZES.map(item => {
                              const isSelected = selectedPly === item.id;
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => setSelectedPly(item.id)}
                                  className={`relative rounded-2xl border-2 p-4 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                                    isSelected
                                      ? 'border-[#0D4A2F] bg-[#F5F9F6] shadow-md ring-2 ring-[#0D4A2F]/20'
                                      : 'border-gray-200 bg-white hover:border-[#0D4A2F]/40 hover:shadow-sm'
                                  }`}
                                >
                                  {/* Featured / Popular Badge */}
                                  {item.featured && (
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#0D4A2F] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow whitespace-nowrap z-10 flex items-center gap-1">
                                      <Star size={10} className="fill-white" /> {item.badge}
                                    </div>
                                  )}

                                  <div>
                                    {/* Image Thumbnail */}
                                    <div className="h-28 rounded-xl bg-gray-50 overflow-hidden mb-3 relative flex items-center justify-center border border-gray-100">
                                      <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                      />
                                      <span className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-bold font-mono">
                                        {item.ply}
                                      </span>
                                    </div>

                                    {/* Title & Tag */}
                                    <div className="flex items-start justify-between gap-1 mb-1.5">
                                      <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {item.name}
                                      </h4>
                                      <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                        isSelected ? 'bg-[#0D4A2F] text-white' : 'border border-gray-300'
                                      }`}>
                                        {isSelected && <Check size={10} />}
                                      </span>
                                    </div>

                                    <p className="text-[11px] text-gray-500 font-medium mb-3">
                                      {item.sub}
                                    </p>

                                    {/* Specs Badges */}
                                    <div className="bg-white/80 rounded-xl p-2.5 border border-gray-100 space-y-1.5 mb-3 text-[11px]">
                                      <div className="flex justify-between">
                                        <span className="text-gray-400">Burst Strength:</span>
                                        <span className="font-bold text-gray-800">{item.burst}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-400">Load Capacity:</span>
                                        <span className="font-bold text-[#0D4A2F]">{item.load}</span>
                                      </div>
                                    </div>

                                    <p className="text-[11px] text-gray-600 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  </div>

                                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                      {item.tag}
                                    </span>
                                    <span className={`font-bold ${isSelected ? 'text-[#0D4A2F]' : 'text-gray-400'}`}>
                                      {isSelected ? '✓ Selected' : 'Select'}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Paper Carry Bags Size Selection */}
                      {product === 'paper' && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                              2. Choose Carry Bag Size
                            </label>
                            <span className="text-xs text-gray-400">5 standard formats</span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                            {PAPER_BAG_SIZES.map(item => {
                              const isSelected = selectedBagSize === item.id;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => setSelectedBagSize(item.id)}
                                  className={`p-3 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                                    isSelected
                                      ? 'border-[#0D4A2F] bg-green-50/30 shadow ring-1 ring-[#0D4A2F]'
                                      : 'border-gray-200 bg-white hover:border-gray-300'
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-xs font-bold text-gray-900">{item.label}</span>
                                      {isSelected && <Check size={12} className="text-[#0D4A2F]" />}
                                    </div>
                                    <span className="text-[11px] font-mono text-[#0D4A2F] font-bold block">{item.metric}</span>
                                    <span className="text-[10px] text-gray-400 block mb-2">{item.volume}</span>
                                    <p className="text-[10px] text-gray-500 leading-tight line-clamp-2">{item.bestFor}</p>
                                  </div>
                                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-2 block">
                                    {item.badge}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Parcel Delivery Bags Size Selection */}
                      {product === 'delivery' && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                              2. Choose Parcel Delivery Bag Size
                            </label>
                            <span className="text-xs text-gray-400">4 food & takeaway sizes</span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {DELIVERY_BAG_SIZES.map(item => {
                              const isSelected = selectedDeliverySize === item.id;
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => setSelectedDeliverySize(item.id)}
                                  className={`p-3.5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between ${
                                    isSelected
                                      ? 'border-[#0D4A2F] bg-green-50/30 shadow ring-1 ring-[#0D4A2F]'
                                      : 'border-gray-200 bg-white hover:border-gray-300'
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-xs font-bold text-gray-900">{item.label}</span>
                                      {isSelected && <Check size={12} className="text-[#0D4A2F]" />}
                                    </div>
                                    <span className="text-[11px] font-mono text-[#0D4A2F] font-bold block mb-2">{item.metric}</span>
                                    <p className="text-[10px] text-gray-500 leading-tight line-clamp-3">{item.bestFor}</p>
                                  </div>
                                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-2 block">
                                    {item.badge}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ══════════════════════════════════════════════════════
                        STEP 3: COMPULSORY / REQUIRED CLIENT DETAILS
                       ══════════════════════════════════════════════════════ */}
                    <SectionDivider 
                      label="Client Details" 
                      tag="Compulsory / Required *" 
                      isRequired={true} 
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                      {/* Full Name */}
                      <div>
                        <label className={labelCls}>
                          Full Name <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rajesh Sharma"
                            className={inputCls + " pl-10"}
                          />
                          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className={labelCls}>
                          Company / Business Name <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="e.g. Sharma Enterprises Ltd."
                            className={inputCls + " pl-10"}
                          />
                          <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className={labelCls}>
                          Email Address <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rajesh@company.com"
                            className={inputCls + " pl-10"}
                          />
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className={labelCls}>
                          Phone Number <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className={inputCls + " pl-10"}
                          />
                          <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* ══════════════════════════════════════════════════════
                        STEP 4: OTHER OPTIONAL FIELDS
                       ══════════════════════════════════════════════════════ */}
                    <SectionDivider 
                      label="Project & Logistics Details" 
                      tag="Optional" 
                      isRequired={false} 
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Estimated Volume */}
                      <div>
                        <label className={labelCls}>Estimated Quantity / Volume</label>
                        <input
                          type="text"
                          value={volume}
                          onChange={(e) => setVolume(e.target.value)}
                          placeholder="e.g. 5,000 units or 10,000 boxes/month"
                          className={inputCls}
                        />
                      </div>

                      {/* Delivery Location */}
                      <div>
                        <label className={labelCls}>Delivery Destination</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Mumbai, Maharashtra"
                          className={inputCls}
                        />
                      </div>

                      {/* Custom Dimensions */}
                      <div>
                        <label className={labelCls}>Custom Dimensions (L × W × H)</label>
                        <input
                          type="text"
                          value={customDimensions}
                          onChange={(e) => setCustomDimensions(e.target.value)}
                          placeholder="e.g. 35 × 25 × 20 cm or custom inches"
                          className={inputCls}
                        />
                      </div>

                      {/* Printing / Branding Options */}
                      <div>
                        <label className={labelCls}>Custom Printing / Branding</label>
                        <div className="relative">
                          <select
                            value={printing}
                            onChange={(e) => setPrinting(e.target.value)}
                            className={inputCls + " pr-9 appearance-none cursor-pointer"}
                          >
                            <option value="none">Plain / No Printing</option>
                            <option value="1color">Single Color Logo Print</option>
                            <option value="2color">Two-Color Brand Printing</option>
                            <option value="fullcolor">Full Color (4-Color CMYK / Flexo)</option>
                            <option value="custom">Custom Artwork & Foil Finish</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Special Requirements / Notes */}
                    <div className="mb-8">
                      <label className={labelCls}>Special Requirements / Notes</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Detail any specific burst resistance, moisture barrier, food grade certification, handle preferences, pallet sizing, or delivery deadlines…"
                        className={inputCls + " resize-y"}
                      />
                    </div>

                    {/* ══════════════════════════════════════════════════════
                        FOOTER & SUBMIT BUTTON
                       ══════════════════════════════════════════════════════ */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-gray-500">
                        <span className="text-red-500 font-bold">*</span> Full Name, Company, Email & Phone are required.
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-sm bg-[#0D4A2F] hover:bg-[#1A6B3C] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <span>Submit Quote Request</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}