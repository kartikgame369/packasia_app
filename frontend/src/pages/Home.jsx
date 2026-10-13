import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Lightbulb, Handshake, Recycle, ChevronRight } from "lucide-react";
import Velaris from "../components/Velaris";

// Animated counter
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 80, damping: 25 });
  const [display, setDisplay] = React.useState(0);
  useEffect(() => { if (inView) raw.set(to); }, [inView, to, raw]);
  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);
  return <span ref={ref}>{display}{suffix}</span>;
}

// Paper grain SVG overlay
function GrainOverlay() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
      <filter id="grain-noise">
        <feTurbulence baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" type="fractalNoise" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}

const features = [
  { icon: Leaf, title: "Sustainable", desc: "Sourced from responsibly managed forests, ensuring every box gives back to the earth.", color: "var(--color-olive-chip)", iconColor: "var(--color-forest-mid)" },
  { icon: ShieldCheck, title: "Reliable", desc: "Engineered for maximum burst strength. Your cargo stays safe through the toughest logistics.", color: "#f6ddae", iconColor: "var(--color-kraft-brown)" },
  { icon: Lightbulb, title: "Innovative", desc: "Custom structural designs that optimize pallet space and reduce shipping costs.", color: "var(--color-surface-muted)", iconColor: "var(--color-text-secondary)" },
  { icon: Recycle, title: "Responsible", desc: "100% recyclable end-of-life products, contributing to a closed-loop economy.", color: "var(--color-olive-chip)", iconColor: "var(--color-forest-mid)" },
];

const products = [
  {
    title: "Paper Bags",
    desc: "Customizable retail and parcel bags made from recycled fibers.",
    image: "/complete_images/HOME-20260921T211140Z-1-001/HOME/for_left_side.png",
    link: "/products/paper-bags",
    objectPosition: "center 20%",
  },
  {
    title: "Corrugated Boxes",
    desc: "Heavy-duty single and double wall boxes for industrial transit.",
    image: "/complete_images/HOME-20260921T211140Z-1-001/HOME/for_right_sidr.png",
    link: "/delivery-bags",
    objectPosition: "center 20%",
  },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: 0.35, ease: 'easeOut' }} className="pt-20">

      {/* -- HERO -- */}
      <section className="relative min-h-[100dvh] md:min-h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: "var(--color-surface)" }}>
        <GrainOverlay />
        <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-bl-[350px] opacity-[0.04] pointer-events-none" style={{ backgroundColor: "var(--color-forest-deep)", transform: "translate(30%,-20%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-tr-[250px] opacity-[0.07] pointer-events-none" style={{ backgroundColor: "var(--color-kraft-brown)", transform: "translate(-25%,25%)" }} />

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left mt-8 md:mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <span className="chip mb-6 md:mb-8 inline-flex"><Leaf size={11} /> SUSTAINABLE PACKAGING</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
                The Strength Behind<br />
                <span className="italic font-accent" style={{ color: "var(--color-forest-deep)" }}>Every Shipment.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: "var(--color-text-muted)" }}>
                Innovative, sustainable, and reliable packaging solutions for global industries. We design for a circular economy without compromising on durability.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('packaging-solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Explore Products <ArrowRight size={16} />
                </button>
                <Link to="/about" className="btn-secondary w-full sm:w-auto justify-center">
                  View Certifications
                </Link>
              </motion.div>
            </div>

            {/* Right — Hero image */}
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative hidden lg:block">
              {/* Container: 4:3.4 aspect ratio matching reference. Big curve top-right, gentle on other corners. */}
              <div className="relative w-full max-w-[520px] mx-auto" style={{ aspectRatio: "4 / 3.4" }}>
                {/* Decorative shadow blob behind */}
                <div className="absolute inset-3 opacity-30 -z-0" style={{ backgroundColor: "var(--color-olive-chip)", transform: "rotate(3deg)", borderTopRightRadius: "120px", borderBottomLeftRadius: "24px", borderTopLeftRadius: "48px", borderBottomRightRadius: "24px" }} />
                <img
                  src="/IMG/IMG 1.png"
                  alt="Packasia kraft boxes, paper bag and twine on wooden surface with green foliage"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover z-10 shadow-2xl"
                  style={{ borderTopRightRadius: "120px", borderBottomLeftRadius: "24px", borderTopLeftRadius: "48px", borderBottomRightRadius: "24px", objectPosition: "center center" }}
                />
                {/* Floating badge — bottom-left, slightly outside the card */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }} className="absolute -bottom-5 -left-5 z-20 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl bg-white" style={{ border: "1px solid var(--color-surface-muted)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-olive-chip)" }}>
                    <Recycle size={20} style={{ color: "var(--color-forest-mid)" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>100% Recyclable</p>
                    <p className="text-xs leading-tight" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>CERTIFIED MATERIALS</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- OUR EXCELLENCE -- */}
      <section className="py-16 md:py-24 relative" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="section-label mb-3 md:mb-4">What Drives Us</p>
            <h2 className="mb-4">Our Excellence</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>Built on four pillars of industrial strength and environmental consciousness.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch relative">
            {features.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
              <React.Fragment key={title}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }} 
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                  className="relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 group z-10 bg-white" 
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.03)", transition: "box-shadow 0.3s ease" }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-30 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: color }} />
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-6" style={{ backgroundColor: color }}>
                    <Icon size={24} style={{ color: iconColor }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 md:mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-primary)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{desc}</p>
                </motion.div>
                {/* Arrow connector between cards on desktop */}
                {i < features.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -mt-3 text-gray-300 z-0" style={{ left: `calc(${(i + 1) * 25}% - 12px)` }}>
                    <ChevronRight size={24} strokeWidth={1.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* -- PRODUCT HIGHLIGHTS -- */}
      <section id="packaging-solutions" className="py-16 md:py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
            <div>
              <p className="section-label mb-2 md:mb-3">What We Make</p>
              <h2>Packaging Solutions</h2>
              <p className="text-base mt-2" style={{ color: "var(--color-text-muted)" }}>From heavy-duty industrial shipping to premium consumer unboxing experiences.</p>
            </div>
            <a href="/new_page_img/pdf.pdf" download="Packasia_Catalog.pdf" className="btn-outline-kraft shrink-0 w-full sm:w-auto justify-center">
              View Full Catalog <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map(({ title, desc, image, link, objectPosition }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link
                  to={link}
                  className="group relative block overflow-hidden cursor-pointer h-[340px] md:h-[400px]"
                  style={{ borderRadius: "1.5rem" }}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: objectPosition || "center center" }}
                  />
                  {/* Identical bottom scrim on both cards */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 28%, transparent 52%)" }} />
                  {/* Text — same padding & sizing on both */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-[1.75rem] font-bold mb-3 text-white" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                    <span className="inline-flex items-center gap-2 font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
                      Discover Specs <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SUSTAINABILITY -- */}
      <section className="relative overflow-hidden">
        <Velaris
          bg="#061A10"
          colors={["#0D4A2F", "#1A6B3C", "#2D8653", "#0a3520"]}
          speed={1.5}
          grain={0.25}
          height="auto"
          className="py-20 md:py-32"
        >
        {/* Decorative organic blob */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-end">
          <svg className="w-full max-w-[700px] h-auto transform translate-x-1/4 -translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-3C96.2,12.1,89.5,26.7,80.4,39.3C71.3,51.9,59.8,62.5,46.7,71.3C33.6,80.1,19,87.1,3.4,81.5C-12.2,75.9,-28.9,57.7,-41.8,46C-54.7,34.3,-63.8,29.1,-72.1,19.3C-80.4,9.5,-87.9,-4.9,-85.5,-18.1C-83.1,-31.3,-70.8,-43.3,-58.1,-52.1C-45.4,-60.9,-32.3,-66.5,-19.1,-69.4C-5.9,-72.3,7.4,-72.5,20.8,-75C34.2,-77.5,47.7,-82.3,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)" style={{ color: "rgba(255,255,255,0.15)" }} />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-mono)" }}>
                <Leaf size={14} /> OUR COMMITMENT
              </span>
              <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Designing for a<br />
                <span className="italic font-accent" style={{ color: "var(--color-olive-chip)" }}>Greener Tomorrow.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
                At Packasia, sustainability is more than a commitment—it's the way we create. We harness renewable energy, recycled materials, and responsible production practices to develop eco-friendly packaging with a smaller environmental footprint.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 pt-2">
                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-white mb-1 md:mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    <Counter to={98} suffix="%" />
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>RECYCLED MATERIALS USED</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-white mb-1 md:mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    <Counter to={80} suffix="+" />
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>GLOBAL CLIENTS</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-white hover:gap-3 transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                Our Sustainability Report <ArrowRight size={16} />
              </Link>
            </div>
            {/* Sustainability poster image — square source, square container, no white frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative shadow-2xl"
              style={{ borderRadius: "2rem", overflow: "hidden", aspectRatio: "1 / 1" }}
            >
              <img
                src="/IMG/compressed_2mb.jpg"
                alt="Packaging a Greener Tomorrow — Packasia sustainability poster with forest canopy"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>
          </div>
        </div>
        </Velaris>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <p className="section-label mb-3 md:mb-4">Ready to Start?</p>
          <h2 className="mb-4 md:mb-5">
            Engineer your next packaging solution.
          </h2>
          <p className="text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Talk to our specialists and receive a custom quote within 24 hours.
          </p>
          <Link to="/quote" className="btn-primary w-full sm:w-auto justify-center">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
}
