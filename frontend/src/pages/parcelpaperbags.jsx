import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Layers, Ruler, Download, ChevronRight, CheckCircle2, ArrowRight, Package, Star, Lock, BadgeCheck, Scan } from 'lucide-react';

const sizes = [
  { 
    id: 'xs', label: 'XS / Mini', volume: '1.1 L', badge: 'Compact', img: '/new_page_img/screen_1.png',
    metric: '12 x 6 x 16 cm', imperial: '5" x 2.5" x 6.5"',
    bestFor: 'Jewellery, small cosmetics, accessories, delicate confectionery & tester sets.' 
  },
  { 
    id: 'small', label: 'Small', volume: '3.3 L', badge: 'Standard Retail', img: '/new_page_img/screen_2.png',
    metric: '18 x 8 x 23 cm', imperial: '7" x 3" x 9"',
    bestFor: 'Small gifts, artisan bakery, premium skincare, eyewear, vitamins & pharmacy.' 
  },
  { 
    id: 'medium', label: 'Medium', volume: '8.8 L', badge: 'High Versatility', img: '/new_page_img/screen_3.png',
    metric: '25 x 11 x 32 cm', imperial: '10" x 4.5" x 12.5"',
    bestFor: 'T-shirts, novels & hardcover books, gourmet takeaways, retail apparel, and lifestyle cafes.',
    featured: true 
  },
  { 
    id: 'large', label: 'Large', volume: '17.5 L', badge: 'Spacious', img: '/new_page_img/scren4.png',
    metric: '32 x 13 x 42 cm', imperial: '12.5" x 5" x 16.5"',
    bestFor: 'Winter apparel, shoeboxes, multiple shopping units, and department store fashion merchandise.' 
  },
  { 
    id: 'xl', label: 'XL / Jumbo', volume: '32.2 L', badge: 'Heavy Duty', img: '/new_page_img/screen5.png',
    metric: '42 x 16 x 48 cm', imperial: '16.5" x 6.5" x 19"',
    bestFor: 'Gourmet gift hampers, bulky winter parkas, corporate convention kits & heavy retail goods.' 
  },
];

export default function ParcelPaperBags() {
  const [selectedSize, setSelectedSize] = useState('medium');
  
  const currentSizeData = sizes.find(s => s.id === selectedSize) || sizes[2];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -60 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="pt-20 flex-1 min-h-screen flex flex-col font-body bg-[#F9F7F4] text-[#181816]"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 lg:px-8 py-8 flex flex-col gap-12 lg:gap-16">
        
        {/* SECTION 1: Hero */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#686862]">
              <Link to="/products" className="hover:text-[#0D4A2F] transition-colors">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/paper-bags" className="hover:text-[#0D4A2F] transition-colors">Paper Bags</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-[#181816]">Size Selection</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="chip bg-green-100 text-[#0D4A2F] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-200">
                <Leaf className="w-3 h-3" /> 100% RECYCLABLE KRAFT
              </span>
              <span className="chip bg-green-100 text-[#0D4A2F] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-green-200">
                FSCÂ® CERTIFIED
              </span>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#0D4A2F] mb-6">
              Kraft / Paper Carry Bags
            </h1>
            <p className="text-lg text-[#686862] leading-relaxed">
              Choose the right bag size for your product and packaging needs. Engineered with reinforced gussets, industrial-grade paper tensile strength, and ergonomic paper handles.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
            <div className="flex items-start md:items-center gap-4">
              <div className="bg-[#F0EBE1] p-3 rounded-full shrink-0 text-[#0D4A2F]">
                <Ruler className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#686862]">
                <strong className="text-[#181816] font-semibold block mb-1">Manufacturing Specifications:</strong>
                Available in custom GSM (80â€“150 GSM), virgin & recycled FSC kraft, with twisted or flat paper handles. Need custom dimensions? Request a tailored quote anytime.
              </p>
            </div>
            <button className="btn-primary bg-[#0D4A2F] text-white px-6 py-3 rounded-full font-medium whitespace-nowrap hover:bg-[#1A6B3C] transition-colors flex items-center justify-center gap-2 shrink-0">
              Request Custom Size <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.section>

        {/* SECTION 2: Standard Size Lineup */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#0D4A2F] mb-2">Standard Size Lineup</h2>
              <p className="text-[#686862]">Click any category card to inspect technical dimensions and initiate configuration.</p>
            </div>
            <div className="flex gap-2 bg-[#F0EBE1] p-1 rounded-full w-full md:w-auto overflow-x-auto hide-scrollbar">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#0D4A2F] shadow-sm whitespace-nowrap">All Sizes (5)</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium text-[#686862] hover:text-[#181816] whitespace-nowrap transition-colors">Retail & Boutique</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium text-[#686862] hover:text-[#181816] whitespace-nowrap transition-colors">Heavy & Bulk</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-4 md:p-2">
            {sizes.map((size) => {
              const isSelected = selectedSize === size.id;
              
              return (
                <div 
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`relative flex flex-col bg-white rounded-2xl ${isSelected ? 'ring-2 ring-[#0D4A2F] shadow-xl scale-[1.02] z-10' : 'border border-gray-200 hover:border-[#1A6B3C]'} overflow-hidden cursor-pointer transition-all duration-300`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 z-10 text-[#0D4A2F]">
                      <CheckCircle2 className="w-6 h-6 fill-green-100" />
                    </div>
                  )}
                  
                  <div className="relative h-40 sm:h-48 bg-[#F0EBE1] flex items-center justify-center p-1 overflow-hidden">
                    {size.featured && (
                      <div className="absolute top-3 left-0 w-full flex justify-center z-10">
                        <span className="bg-[#0D4A2F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                          Most Popular <Star className="w-3 h-3 fill-white" />
                        </span>
                      </div>
                    )}
                    <img src={size.img} alt={size.label} className="h-full object-contain mix-blend-multiply scale-125 origin-bottom" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#181816] text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {size.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold font-heading text-lg text-[#181816]">{size.label}</h3>
                      <span className="text-sm font-semibold text-[#686862] bg-gray-100 px-2 py-0.5 rounded">{size.volume}</span>
                    </div>
                    
                    <div className="text-xs text-[#686862] flex flex-col gap-1">
                      <span className="font-mono bg-gray-50 p-1 rounded inline-block w-max">{size.metric}</span>
                      <span className="text-gray-400">{size.imperial}</span>
                    </div>
                    
                    <div className="mt-2 flex-1">
                      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                      <p className="text-xs text-[#181816] leading-relaxed line-clamp-3">{size.bestFor}</p>
                    </div>
                    
                    <button className={`w-full py-2.5 rounded-full text-sm font-semibold transition-colors mt-2 ${isSelected ? 'bg-[#0D4A2F] text-white' : 'border-2 border-gray-200 text-[#181816] hover:border-[#0D4A2F] hover:text-[#0D4A2F]'}`}>
                      {isSelected ? 'Selected' : 'Select Size ->'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* SECTION 3: Selected Size Configurator Bar */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0D4A2F] rounded-2xl p-4 md:p-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 shadow-lg relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <Package className="w-64 h-64 text-white" />
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Currently Selected</span>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">{currentSizeData.label} Kraft Carry Bag</h3>
              <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full font-mono text-sm shadow-sm backdrop-blur-sm">
                {currentSizeData.metric}
              </span>
              <div className="bg-green-400/20 p-1.5 rounded-full border border-green-400/30 text-green-300">
                <Leaf className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
            <a href="/new_page_img/pdf.pdf" download="Packasia_Spec_Sheet.pdf" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5">
              <Download className="w-4 h-4" /> Download Spec Sheet
            </a>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <button className="w-full sm:w-auto bg-white text-[#0D4A2F] px-6 py-3 rounded-full font-bold hover:bg-[#F0EBE1] transition-colors shadow-md flex items-center justify-center gap-2">
              Configure & Order <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.section>

        {/* SECTION 4: Technical Specs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#0D4A2F] mb-4">Technical Specifications & Build Options</h2>
            <p className="text-[#686862] text-lg">
              Packasia bags are precision-manufactured for optimal load bearing and retail aesthetics, maintaining eco-friendly integrity from pulp to product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Col 1 */}
            <div className="bg-[#F2EFE8] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Ruler className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#181816] mb-3 font-heading">Handle Ergonomics</h3>
              <p className="text-[#686862] mb-6 flex-1 text-sm">
                Internal patch reinforced to support static loads from 4 kg up to 12 kg without fiber tear.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Twisted Paper Cord:</strong> Standard high-tensile kraft</span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Flat Folded Paper:</strong> Clean bakery & quick-service</span>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-[#C19B6C] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#4A4A46] leading-snug"><strong className="text-[#181816]">Cotton / Jute Rope:</strong> Luxury boutique options</span>
                </li>
              </ul>
              <div className="bg-white/50 text-[#4A4A46] text-[10px] font-bold px-3 py-2 rounded-lg w-max border border-gray-200/50 uppercase tracking-widest">
                Load Certified: ISO 9001 / TAPPI T-804
              </div>
            </div>

            {/* Col 2 */}
            <div className="bg-[#F2EFE8] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#181816] mb-3 font-heading">Paper Substrate (GSM)</h3>
              <p className="text-[#686862] mb-6 flex-1 text-sm">
                Choice of unbleached natural virgin softwood fibers or high-percentage post-consumer recycled pulp.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/50 p-3 rounded-xl border border-white/60 text-center text-sm shadow-sm">
                  <span className="font-bold block text-[#181816]">80 GSM</span>
                  <span className="text-gray-500 text-xs">Light Duty</span>
                </div>
                <div className="bg-white/50 p-3 rounded-xl border border-white/60 text-center text-sm shadow-sm">
                  <span className="font-bold block text-[#181816]">100 GSM</span>
                  <span className="text-gray-500 text-xs">Standard</span>
                </div>
                <div className="bg-white/50 p-3 rounded-xl border border-white/60 text-center text-sm shadow-sm">
                  <span className="font-bold block text-[#181816]">120 GSM</span>
                  <span className="text-gray-500 text-xs">Heavy Duty</span>
                </div>
                <div className="bg-[#E7F6ED] p-3 rounded-xl border border-[#BCE3C5] text-center text-sm flex flex-col items-center justify-center text-[#0A2617] shadow-sm">
                  <Leaf className="w-4 h-4 mb-1" />
                  <span className="font-bold text-xs uppercase">PEFC / FSC</span>
                </div>
              </div>
              <div className="bg-white/50 text-[#4A4A46] text-[10px] font-bold px-3 py-2 rounded-lg w-max border border-gray-200/50 uppercase tracking-widest mt-auto">
                Sustainably Sourced Verified
              </div>
            </div>

            {/* Col 3 */}
            <div className="bg-[#F2EFE8] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0A2617] rounded-2xl flex items-center justify-center text-[#90C2A3] mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#181816] mb-3 font-heading">Ecological Credentials</h3>
              <p className="text-[#686862] mb-6 flex-1 text-sm">
                Verified by SGS and globally recognized environmental bodies ensuring compostability and circularity.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/60 p-3 rounded-xl border border-white/60 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2617] shrink-0" />
                  <span className="text-[11px] font-bold text-[#0A2617]">FSC-C133275</span>
                </div>
                <div className="bg-white/60 p-3 rounded-xl border border-white/60 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2617] shrink-0" />
                  <span className="text-[11px] font-bold text-[#0A2617]">REACH</span>
                </div>
                <div className="bg-white/60 p-3 rounded-xl border border-white/60 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2617] shrink-0" />
                  <span className="text-[11px] font-bold text-[#0A2617]">100% Recyclable</span>
                </div>
                <div className="bg-white/60 p-3 rounded-xl border border-white/60 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2617] shrink-0" />
                  <span className="text-[10px] font-bold text-[#0A2617] leading-tight">Zero Single-Use Plastic</span>
                </div>
              </div>
              <div className="bg-[#E7F6ED] text-[#0A2617] text-[10px] font-bold px-3 py-2 rounded-lg w-max border border-[#BCE3C5] uppercase tracking-widest mt-auto shadow-sm">
                Green Guard Gold Certified
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5: CTA Banner */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="bg-[#0D4A2F] rounded-3xl p-8 md:p-12 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 shadow-2xl relative overflow-hidden my-8"
        >
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="flex-1 relative z-10 flex flex-col gap-4 text-center lg:text-left">
  <div>
    <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
      Enterprise & Bespoke Solutions
    </span>
    <h2 className="text-2xl md:text-3xl font-bold font-heading leading-snug mb-3 text-white">
      Need custom dimensions or full-bleed branded printing?
    </h2>
  </div>
  <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
    Our packaging craftsmen design bespoke bag dimensions, custom finishes like matte laminate, hot foil stamping, and full-bleed HD flexo printing. Minimum order starts at 1,000 units.
  </p>
</div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto shrink-0">
            <button className="bg-white text-[#0D4A2F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F0EBE1] hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto">
              Request a Custom Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto text-center">
              Make Changes Info
            </button>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}
