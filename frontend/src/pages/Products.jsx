import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Ruler, ArrowUpRight, Recycle, ShoppingBag, CheckCircle, Package, ShieldCheck } from 'lucide-react';
import { useLocation, Navigate, Routes, Route, Link } from 'react-router-dom';
import ImageZoom from '../components/ImageZoom';
import Velaris from '../components/Velaris';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CorrugatedBoxes = () => {
  return (
    <div className="pt-24 pb-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-20 md:mb-24 h-[450px] md:h-[500px] flex items-center border border-gray-200 shadow-sm">
          <div className="absolute inset-0 z-0">
             <img src="/IMG/bg_corrugated_box.png" alt="Corrugated Boxes" className="w-full h-full object-cover" />
             <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--color-background) 10%, rgba(249, 247, 244, 0.85) 60%, transparent 100%)' }}></div>
          </div>
          
          <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-4 md:space-y-5">
              <motion.div variants={fadeIn} style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#EBEAE4', borderRadius: '999px', padding: '0.25rem 0.875rem', border: '1px solid #D1CEC2' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: '#4B5563', fontWeight: 600 }}>INDUSTRIAL PACKAGING</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="mb-4">
                Engineered Strength.<br />
                Corrugated Solutions.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-base md:text-lg" style={{ color: '#4B5563', maxWidth: '35rem', lineHeight: 1.6, fontWeight: 500 }}>
                From lightweight shipping to heavy-duty industrial transport, our multi-ply corrugated boxes deliver uncompromising protection. Built with premium kraft linerboard for maximum stacking strength.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                <button className="btn-primary w-full sm:w-auto justify-center">
                  Request a Quote <ArrowRight size={16} />
                </button>
                <button className="btn-secondary w-full sm:w-auto justify-center">
                  Download Specs <Download size={16} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Choose Your Protection Level */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Explore Our Box Options</h2>
              <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>Engineered configurations for every application, from lightweight retail to heavy-duty industrial transport.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gray-50">
                <Ruler size={24} color="var(--color-forest-deep)" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Custom Dimensions</p>
                <p className="text-sm text-gray-500">Available on all ply levels</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* 3-Ply */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row border border-gray-100 group">
              <div className="lg:w-5/12 relative overflow-hidden h-[260px] lg:h-auto">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.05em' }}>SINGLE WALL</span>
                </div>
                <ImageZoom src="/IMG/3_ply.jpg" alt="3-Ply Box" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
              </div>
              <div className="lg:w-7/12 p-7 lg:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>3-Ply Corrugated Box</h3>
                  <div className="bg-gray-100 px-3 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-600">3 PLY</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">Ideal for standard retail packaging, lightweight e-commerce shipping, and inner product protection. Balances cost-effectiveness with reliable structure.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>BURST STRENGTH</p>
                    <p className="font-semibold text-gray-900 text-sm">7-10 kg/cm²</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>LOAD CAPACITY</p>
                    <p className="font-semibold text-gray-900 text-sm">Up to 10 kg</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">E-commerce</span>
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">Apparel</span>
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">FMCG</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <Recycle size={14} /> 100% Recyclable
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-forest-deep)' }}>
                    Request Samples <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 5-Ply */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row-reverse border border-gray-100 group">
              <div className="lg:w-5/12 relative overflow-hidden h-[260px] lg:h-auto">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.05em' }}>DOUBLE WALL</span>
                </div>
                <ImageZoom src="/IMG/5ply.jpg" alt="5-Ply Box" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
              </div>
              <div className="lg:w-7/12 p-7 lg:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>5-Ply Corrugated Box</h3>
                  <div className="bg-gray-100 px-3 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-600">5 PLY</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">Enhanced rigidity and impact resistance. The industry standard for safe transit of heavier goods, electronics, and fragile items over long distances.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>BURST STRENGTH</p>
                    <p className="font-semibold text-gray-900 text-sm">12-16 kg/cm²</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>LOAD CAPACITY</p>
                    <p className="font-semibold text-gray-900 text-sm">Up to 30 kg</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">Electronics</span>
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">Glassware</span>
                  <span className="text-xs bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-gray-600">Export</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <Recycle size={14} /> 100% Recyclable
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-forest-deep)' }}>
                    Request Samples <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 7-Ply */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group border border-gray-200" style={{ backgroundColor: '#EAE9E2' }}>
              <div className="lg:w-5/12 relative overflow-hidden h-[260px] lg:h-auto">
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full" style={{ backgroundColor: '#093A27' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.05em', color: '#E8E4D9' }}>TRIPLE WALL • HEAVY DUTY</span>
                </div>
                <ImageZoom src="/IMG/7_ply.jpg" alt="7-Ply Box" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
              </div>
              <div className="lg:w-7/12 p-7 lg:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: '#093A27' }}>7-Ply Corrugated Box</h3>
                  <div className="px-3 py-1.5 rounded-xl text-center" style={{ backgroundColor: '#093A27' }}>
                    <div className="text-base font-bold text-white leading-none">7</div>
                    <div className="text-[0.6rem] font-bold text-white/80 mt-0.5">PLY</div>
                  </div>
                </div>
                <p className="mb-5 leading-relaxed font-medium text-sm" style={{ color: '#6B7280' }}>Ultimate structural integrity for industrial and export requirements.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>BURST STRENGTH</p>
                    <p className="font-bold text-gray-900 text-sm">Up to 500+ lbs/sq.in</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.2rem' }}>LOAD CAPACITY</p>
                    <p className="font-bold text-gray-900 text-sm">Industrial (up to 300 lbs)</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', marginBottom: '0.5rem' }}>IDEAL APPLICATIONS</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-white border border-white/50 shadow-sm px-3 py-1 rounded-lg text-gray-600 font-medium">Heavy Machinery</span>
                    <span className="text-xs bg-white border border-white/50 shadow-sm px-3 py-1 rounded-lg text-gray-600 font-medium">Automotive Parts</span>
                    <span className="text-xs bg-white border border-white/50 shadow-sm px-3 py-1 rounded-lg text-gray-600 font-medium">Export Shipping</span>
                    <span className="text-xs bg-white border border-white/50 shadow-sm px-3 py-1 rounded-lg text-gray-600 font-medium">Chemicals</span>
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-300/60">
                  <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#8F7A54' }}>
                    <ShieldCheck size={15} /> Maximum Impact Resistance
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-80" style={{ color: '#093A27' }}>
                    Consult an Engineer <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="rounded-[3rem] overflow-hidden relative">
          <Velaris
            bg="#061A10"
            colors={["#0D4A2F", "#1A6B3C", "#2D8653", "#0a3520"]}
            speed={1.5}
            grain={0.25}
            height="auto"
          >
            <div className="p-12 lg:p-20 text-center relative z-10 max-w-3xl mx-auto">
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '1.5rem' }}>Ready to optimize your packaging?</h2>
              <p className="text-lg text-white/80 mb-10">Connect with our packaging experts to design the perfect corrugated solution for your specific requirements.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 rounded-full text-gray-900 font-semibold transition-transform hover:scale-105" style={{ backgroundColor: '#FDFBF7' }}>
                  Start Custom Quote
                </button>
                <button className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold transition-colors hover:bg-white/10">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </Velaris>
        </motion.div>
      </div>
    </div>
  );
};

const PaperBags = () => {
  return (
    <div className="pt-24 pb-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-4 md:space-y-6">
            <motion.div variants={fadeIn} style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '999px', padding: '0.25rem 0.875rem' }}>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: '#4B5563', fontWeight: 600 }}>100% RECYCLABLE</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="mb-2 md:mb-4">
              Carry with<br />
              <span className="italic font-accent" style={{ color: 'var(--color-forest-deep)' }}>Conscience.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-base md:text-lg" style={{ color: '#4B5563', maxWidth: '30rem', lineHeight: 1.6 }}>
              Sustainable, durable, and elegantly crafted paper bags designed to elevate your brand while protecting our planet.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <button className="btn-primary w-full sm:w-auto justify-center">
                <span className="font-medium">Request a Quote</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary w-full sm:w-auto justify-center text-gray-800 border-gray-300">
                <span className="font-medium">View Specs</span>
              </button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[600px]">
            <ImageZoom
              src="/IMG/box_img.png"
              alt="Paper Bags"
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full rounded-[3rem] rounded-tr-[8rem] rounded-bl-[8rem]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col gap-3 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-3 rounded-xl">
                  <ShoppingBag size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Up to 15kg</p>
                  <p className="text-sm text-gray-500 font-medium">High Tensile Strength</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Explore Collection */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Explore the Collection</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>Discover our range of premium paper bags crafted for distinct retail and utility purposes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Parcel Paper Bags */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-72 w-full rounded-2xl overflow-hidden mb-8 bg-gray-50 relative">
                <ImageZoom src="/IMG/IMG 8.png" alt="Parcel Paper Bags" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Package size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>Parcel Paper Bags</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">Heavy-duty unbleached kraft paper bags designed for grocery, delivery, and robust retail applications.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Block bottom design for self-standing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Food-grade certified materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Customizable print up to 4 colors</span>
                </li>
              </ul>
              
              <Link to="/delivery-bags" className="flex items-center gap-2 text-sm font-semibold text-gray-900 group">
                View Details <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            {/* Shopping Paper Bags */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-72 w-full rounded-2xl overflow-hidden mb-8 bg-gray-50 relative">
                <ImageZoom src="/IMG/IMG 9.png" alt="Shopping Paper Bags" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                  <ShoppingBag size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>Shopping Paper Bags</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">Premium twisted or flat handle shopping bags with excellent printability for brand enhancement.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Reinforced handles (Twisted/Flat/Rope)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Matte or glossy finish options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Premium unboxing experience</span>
                </li>
              </ul>
              
              <Link to="/parcel-paper-bags" className="flex items-center gap-2 text-sm font-semibold text-gray-900 group">
                View Details <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const location = useLocation();
  
  // Basic routing logic: if path includes paper, show paper bags, else default to corrugated
  const isPaper = location.pathname.includes('paper');

  return (
    <div className="min-h-screen">
      {isPaper ? <PaperBags /> : <CorrugatedBoxes />}
    </div>
  );
}