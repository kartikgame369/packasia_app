import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, Settings, ClipboardCheck, Zap, Droplets, Recycle, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--color-border)] text-sm font-medium tracking-wide uppercase">
              Facility & Process
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
              Precision Engineering. <br />
              <span className="text-[var(--color-forest-deep)] italic font-serif">Sustainable Scale.</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Our state-of-the-art facilities combine advanced automation with eco-friendly practices to deliver high-quality packaging solutions at scale, ensuring every product meets our rigorous standards.
            </p>
            
            <button className="bg-[var(--color-forest-deep)] hover:bg-green-800 text-white px-8 py-4 rounded-full font-medium inline-flex items-center transition-colors">
              Explore Our Facilities
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[16/10]">
              <img 
                src="/IMG/manufacturing_hero.png" 
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Info Card */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-white rounded-2xl p-6 shadow-xl max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center mb-2">
  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
    <div className="w-2 h-2 rounded-full bg-[var(--color-forest-deep)]"></div>
  </div>
  <h3 className="text-sm md:text-base font-semibold text-gray-900">High-Speed Corrugators</h3>
</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* End-to-End Production Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-sm font-bold tracking-widest text-[var(--color-text-muted)] mb-4 uppercase">
              End-to-End Production
            </div>
            <h2 className="text-4xl md:text-5xl font-light">The Circular Manufacturing Process</h2>
          </div>
          <div>
            <p className="text-lg text-[var(--color-text-muted)]">
              From responsible material sourcing to rigorous quality assurance, our integrated manufacturing process ensures efficiency, sustainability, and exceptional product quality at every stage.
            </p>
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 1 */}
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-8">
              1
            </div>
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 group-hover:scale-110 transition-transform">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sustainable Sourcing</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We carefully select raw materials from responsibly managed forests and verified recycled sources, ensuring the foundation of our products is environmentally sound.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700"></span> */}
              <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">TRACEABLE</span>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-8">
              2
            </div>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Automated Production</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our smart factories utilize advanced robotics and IoT sensors to optimize material usage, reduce energy consumption, and maintain precise manufacturing tolerances.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">INDUSTRY 4.0</span>
              <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">LOW EMISSION</span>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-8">
              3
            </div>
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 text-amber-600 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Quality & Testing</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every batch undergoes rigorous structural and material testing to guarantee performance, durability, and compliance with international packaging standards.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700"></span>
              <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700"></span> */}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Zero-Waste Stats Bento & Metrics */}
      <section className="py-24 px-4 md:px-8 bg-[var(--color-surface-dim)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: 2x2 Bento Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 h-[420px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Top Left */}
              <div className="bg-white rounded-3xl p-8 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-light text-[var(--color-forest-deep)] mb-2">98%</div>
                <div className="font-semibold text-gray-900 mb-1">Material Recovery Rate</div>
                <div className="text-sm text-gray-500">Across all production lines</div>
              </div>
              
              {/* Top Right */}
              <div className="bg-[var(--color-forest-deep)] text-white rounded-3xl p-8 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-light mb-2">2M+</div>
                <div className="font-semibold mb-1">Bags Produced Daily</div>
                <div className="text-sm text-green-100">Meeting global demand</div>
              </div>
              
              {/* Bottom Left */}
              <div className="bg-[#fcf8f2] rounded-3xl p-8 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-light text-amber-700 mb-2">&lt;1%</div>
                <div className="font-semibold text-gray-900 mb-1">Defect Rate</div>
                <div className="text-sm text-gray-500">Industry-leading quality control</div>
              </div>
              
              {/* Bottom Right Image */}
              <div className="rounded-3xl overflow-hidden">
                <img src="/IMG/manufacturing_machine.jpg" alt="Corrugated Fluting" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Right: Metrics & Progress Bars */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-4xl font-light mb-6">Zero-Waste Initiatives & Operational Metrics</h2>
                <p className="text-lg text-[var(--color-text-muted)]">
                  We are continuously optimizing our manufacturing processes to minimize environmental impact while maximizing production efficiency. Our goal is to achieve true zero-waste operations by 2030.
                </p>
              </div>

              <div className="space-y-8">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-900 font-medium">
                      <Zap className="w-5 h-5 text-yellow-500 mr-3" />
                      Energy from Renewable Sources
                    </div>
                    <span className="font-semibold text-[var(--color-forest-deep)]">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-yellow-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-900 font-medium">
                      <Droplets className="w-5 h-5 text-blue-500 mr-3" />
                      Water Recycling Efficiency
                    </div>
                    <span className="font-semibold text-[var(--color-forest-deep)]">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '82%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-900 font-medium">
                      <Recycle className="w-5 h-5 text-green-500 mr-3" />
                      Scrap Material Repulped
                    </div>
                    <span className="font-semibold text-[var(--color-forest-deep)]">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-green-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '99%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;