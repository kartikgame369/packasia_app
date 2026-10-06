import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

const Quote = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const SectionDivider = ({ label }) => (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        {label}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );

  const FormField = ({ label, type = "text", placeholder, icon: Icon, isSelect = false, options = [], rows }) => (
    <div>
      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className="relative">
        {isSelect ? (
          <>
            <select className="w-full bg-[#FCFAF8] border border-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-gray-300 appearance-none cursor-pointer">
              <option value="" disabled selected>{placeholder}</option>
              {options.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
            </select>
            {Icon && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <Icon size={16} />
              </div>
            )}
          </>
        ) : rows ? (
          <textarea 
            placeholder={placeholder} 
            rows={rows} 
            className="w-full bg-[#FCFAF8] border border-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-gray-300 resize-y"
          ></textarea>
        ) : (
          <>
            <input 
              type={type} 
              placeholder={placeholder} 
              className="w-full bg-[#FCFAF8] border border-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-gray-300 placeholder-gray-300" 
            />
            {Icon && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <Icon size={16} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Sidebar */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="lg:w-4/12 flex flex-col pt-8">
            <motion.div variants={fadeIn} className="mb-10">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">DIRECT LINE</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Get a Quote
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[280px] font-medium">
                Connect with our logistics experts to discuss custom fiberboard solutions, sustainable supply chains, and freight requirements.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* Info Card */}
              <motion.div variants={fadeIn} className="bg-[#F4F1E9] p-8 rounded-[2rem] flex flex-col gap-8">
                
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">GLOBAL HEADQUARTERS</p>
                  <p className="text-gray-700 font-semibold text-sm leading-snug">
                    1440 Industrial Parkway<br />
                    Suite 400<br />
                    Seattle, WA 98134
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">EMAIL INQUIRY</p>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-[#0D4A2F]" />
                    <a href="mailto:quotes@Packasia.com" className="text-gray-700 font-semibold text-sm hover:text-[#0D4A2F] transition-colors">
                      quotes@Packasia.com
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">PRIORITY PHONE</p>
                  <div className="flex items-start gap-2">
                    <Phone size={16} className="text-[#0D4A2F] mt-0.5" />
                    <div>
                      <p className="text-gray-700 font-semibold text-sm leading-snug">70204 82515</p>
                      <p className="text-gray-700 font-semibold text-sm leading-snug">82370 50035</p>
                    </div>
                  </div>
                </div>

              </motion.div>

              {/* Map Card */}
              <motion.div variants={fadeIn}>
                <div className="h-[180px] rounded-[1.5rem] relative overflow-hidden shadow-sm" style={{ background: 'url(/img2/img_16.png) center/cover' }}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* HQ Location Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#F4F1E9] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <MapPin size={12} className="text-gray-900" />
                    <span className="text-[9px] font-bold text-gray-900 uppercase tracking-wider">HQ LOCATION</span>
                  </div>
                  
                  {/* Coordinates */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-[10px] font-bold text-white tracking-widest drop-shadow-md">
                      47°35'N 122°19'W
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:w-8/12 flex items-center">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 w-full">
              <form>
                <SectionDivider label="CLIENT DETAILS" />
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
                  <FormField label="FULL NAME" placeholder="Jane Doe" />
                  <FormField label="COMPANY" placeholder="Acme Logistics" />
                  <FormField label="EMAIL ADDRESS" type="email" placeholder="jane@example.com" icon={Mail} />
                  <FormField label="PHONE NUMBER" type="tel" placeholder="+1 (555) 000-0000" icon={Phone} />
                </div>

                <SectionDivider label="PROJECT SCOPE" />
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-8">
                  <FormField 
                    label="PRODUCT CATEGORY" 
                    placeholder="Select an option" 
                    icon={ChevronDown} 
                    isSelect={true}
                    options={[
                      { value: 'corrugated', label: 'Corrugated Boxes' },
                      { value: 'paper', label: 'Paper Bags' },
                      { value: 'custom', label: 'Custom Packaging' }
                    ]}
                  />
                  <FormField label="ESTIMATED VOLUME" placeholder="e.g. 5000 units" />
                </div>

                <div className="mb-10">
                  <FormField 
                    label="DIMENSIONS & REQUIREMENTS" 
                    placeholder="Please detail specific dimensions, load bearing needs, or sustainability certification requirements..." 
                    rows={4} 
                  />
                </div>

                {/* Footer Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <div className="flex items-center gap-2 bg-[#EBECEC] px-4 py-2 rounded-full">
                    <ShieldCheck size={14} className="text-gray-500" />
                    <span className="text-[9px] font-bold text-gray-500 tracking-wider">100% SECURE & CONFIDENTIAL</span>
                  </div>
                  <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg text-white transition-transform hover:scale-105" style={{ backgroundColor: '#002E1E' }}>
                    <span className="font-semibold text-sm">Submit Request</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Quote;