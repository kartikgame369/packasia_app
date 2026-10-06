import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, Map, ChevronDown } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/XfDG9dLMoFUDLz4j9';

const footerLinks = {
  'Quick Links': [
    { label: 'Our Story', to: '/about' },
    { label: 'Certifications', to: '#' },
    { label: 'Sustainability Report', to: '/insights' },
    { label: 'Careers', to: '#' },
  ],
  'Contact Us': [
    {
      label: '7020482515\n8237050035',
      to: 'tel:7020482515',
      icon: Phone,
    },
    {
      label: 'info@packasiapackaging.com\nsupport@packasiapackaging.com',
      to: 'mailto:info@packasiapackaging.com',
      icon: Mail,
    },
    {
      label: 'Plot No. 29, Wardha Rd, near Rly Gate, beside New Underpass, Manish Layout, Manish Nagar, Nagpur, Maharashtra 440037',
      to: GOOGLE_MAPS_URL,
      icon: MapPin,
      external: true,
    },
  ],
};

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: 'var(--color-surface-dim)', color: 'var(--color-text-primary)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b" style={{ borderColor: 'var(--color-surface-muted)' }}>
          
          {/* Brand Column */}
          <div className="lg:col-span-4 mb-6 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                alt="Packasia Logo" 
                className="h-8 w-auto object-contain" 
                src="/IMG/logo.png" 
              />
              <span className="font-bold text-2xl tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                Packasia
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              Sustainable industrial packaging solutions for a circular economy.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-black/5 hover:scale-105"
                  style={{ color: 'var(--color-text-primary)' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Accordion on mobile) */}
          <div className="lg:col-span-2">
            <button onClick={() => toggleSection('quick')} className="flex w-full justify-between items-center lg:cursor-default lg:pointer-events-none mb-4 lg:mb-6">
              <h4 className="font-bold text-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
              <ChevronDown size={16} className={`lg:hidden transition-transform ${openSection === 'quick' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 lg:space-y-4 overflow-hidden transition-all duration-300 ${openSection === 'quick' ? 'max-h-48' : 'max-h-0 lg:max-h-full'}`}>
              {footerLinks['Quick Links'].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-green-800 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Accordion on mobile) */}
          <div className="lg:col-span-3">
            <button onClick={() => toggleSection('contact')} className="flex w-full justify-between items-center lg:cursor-default lg:pointer-events-none mb-4 lg:mb-6">
              <h4 className="font-bold text-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h4>
              <ChevronDown size={16} className={`lg:hidden transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 lg:space-y-4 overflow-hidden transition-all duration-300 ${openSection === 'contact' ? 'max-h-72' : 'max-h-0 lg:max-h-full'}`}>
              {footerLinks['Contact Us'].map((l, i) => (
                <li key={i}>
                  <a
                    href={l.to}
                    className="flex items-start gap-3 text-sm transition-colors hover:text-green-800 font-medium group"
                    style={{ color: 'var(--color-text-secondary)' }}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <l.icon size={16} className="mt-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>
                      {l.label.split('\n').map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Map */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-[15px] hidden lg:block" style={{ fontFamily: 'var(--font-heading)' }}>Location</h4>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl h-24 lg:h-32 mb-3 flex flex-col items-center justify-center border transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'rgba(0,0,0,0.04)', borderColor: 'rgba(0,0,0,0.08)' }}
            >
              <Map className="mb-2 opacity-50" size={24} style={{ color: 'var(--color-text-primary)' }}/>
            </a>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>View on Google Maps</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-center sm:text-left" style={{ color: 'var(--color-text-muted)' }}>© 2026 Packasia Industries. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors hover:text-black font-medium" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</a>
            <a href="#" className="text-xs transition-colors hover:text-black font-medium" style={{ color: 'var(--color-text-muted)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}