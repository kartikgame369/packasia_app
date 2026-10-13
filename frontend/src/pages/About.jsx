import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Cpu, Handshake, Play } from "lucide-react";
import ImageZoom from "../components/ImageZoom";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 flex-1 min-h-screen flex flex-col">

      {/* -- HERO -- */}
      <section className="py-16 md:py-24 flex-1" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="chip mb-6 inline-flex uppercase">Our Story</span>
            <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.05]" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}>
              Forging strength.<br />
              <span className="italic" style={{ color: "var(--color-forest-deep)" }}>Designing for tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              At Packasia, we believe that packaging should be as resilient as the products it protects, without leaving a lasting mark on the planet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Image with organic rounding and floating stat */}
            <div className="relative">
              <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:mx-0">
                <ImageZoom
                  src="/IMG/about_us_bg.jpg"
                  alt="Packasia industrial packaging"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full relative z-10 shadow-2xl"
                  wrapperStyle={{ borderTopRightRadius: "80px", borderBottomLeftRadius: "80px", borderTopLeftRadius: "12px", borderBottomRightRadius: "12px" }}
                />
                <div className="absolute inset-4 rounded-tr-[80px] rounded-bl-[80px] opacity-40 z-0" style={{ backgroundColor: "var(--color-kraft-brown)", transform: "rotate(-3deg) translate(-10px, 10px)" }} />
                
                {/* Floating Stat Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[180px] md:max-w-[200px]"
                >
                  <p className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: "var(--color-forest-deep)", fontFamily: "var(--font-heading)" }}>98%</p>
                  <p className="text-xs font-bold leading-snug tracking-wide" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
                    Recycled Content 
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right: Mission / Vision */}
            <div className="space-y-12 lg:pt-8">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                From our early days supplying local manufacturers to becoming a trusted partner for global supply chains, our journey has been defined by a relentless pursuit of better materials and smarter engineering.
              </p>

              <div>
                <hr className="mb-5" style={{ borderColor: "var(--color-surface-muted)" }} />
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm" style={{ backgroundColor: "var(--color-forest-deep)", color: "white", fontFamily: "var(--font-mono)" }}>
                  Mission
                </div>
                <h2 className="text-2xl font-bold leading-snug" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>
                  To engineer industrial packaging solutions that eliminate waste and optimize supply chains globally.
                </h2>
              </div>

              <div>
                <hr className="mb-5" style={{ borderColor: "var(--color-surface-muted)" }} />
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm" style={{ backgroundColor: "var(--color-kraft-brown)", color: "white", fontFamily: "var(--font-mono)" }}>
                  Vision
                </div>
                <h2 className="text-2xl font-bold leading-snug" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>
                  A future where every shipment contributes to a closed-loop, circular economy.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- VIDEO SHOWCASE -- */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip mb-4 inline-flex uppercase">See Us in Action</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>
              Where innovation meets production.
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>
              Watch how we turn recycled fibers into world-class industrial packaging.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            {/* Video */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/complete_images/about_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Bottom gradient overlay */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
              }}
            />

            {/* Floating caption */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-forest-deep)" }}>
                  <Play size={16} className="text-white ml-0.5" fill="white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm md:text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    Our Manufacturing Process
                  </p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    PACKASIA • BEHIND THE SCENES
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- BUILT ON RESOLVE (Values) -- */}
      <section className="py-24" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>Built on resolve.</h2>
            <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>The core principles that drive our innovation and manufacturing processes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "var(--color-surface-muted)" }}
              >
                <Cpu size={24} style={{ color: "var(--color-text-secondary)" }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>Industrial Reliability</h3>
              <p className="text-sm font-semibold italic mb-3" style={{ color: "var(--color-text-secondary)" }}>"Engineered to endure."</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our products undergo rigorous burst and crush testing to ensure they can withstand the harshest transit environments.
              </p>
            </motion.div>

            {/* Card 2 (Featured - Dark Green) */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(13,74,47,0.35)" }}
              className="p-10 rounded-3xl shadow-2xl md:-translate-y-4"
              style={{ backgroundColor: "var(--color-forest-deep)" }}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Leaf size={24} style={{ color: "var(--color-olive-chip)" }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-heading)" }}>Material Innovation</h3>
              <p className="text-sm font-semibold italic mb-3" style={{ color: "var(--color-olive-chip)" }}>"Designing for circularity."</p>
              <p className="text-sm leading-relaxed text-white/80">
                We continuously innovate our material blends, pushing the boundaries of what recycled fibers can achieve in structural integrity.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#f6ddae" }}
              >
                <Handshake size={24} style={{ color: "var(--color-kraft-brown)" }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>True Partnership</h3>
              <p className="text-sm font-semibold italic mb-3" style={{ color: "var(--color-text-secondary)" }}>"Beyond transactional."</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We work closely with clients to audit their supply chain and design custom packaging that reduces overall logistics costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </motion.div>
  );
}