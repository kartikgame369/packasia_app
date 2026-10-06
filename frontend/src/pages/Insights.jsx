import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const ARTICLES = [
  {
    id: 1,
    title: "Innovations in Biodegradable Coatings",
    category: "Sustainability",
    date: "October 12, 2024",
    excerpt: "Exploring new plant-based barrier coatings that provide moisture resistance without compromising recyclability.",
    image: "/IMG/1st_img.jpeg",
    link: "https://www.packagingdive.com/news/packaging-ecommerce-envelope-sustainability-mailers-innovation/820849/"
  },
  {
    id: 2,
    title: "PackAsia Expands European Operations",
    category: "News",
    date: "September 28, 2024",
    excerpt: "Announcing our new state-of-the-art facility in Germany to better serve our growing European client base.",
    image: "/IMG/2nd_img.jpeg",
    link: "https://www.packagingdive.com/news/international-paper-containerboard-price-hike-boxboard-sbs-smurfit-westrock/826355/"
  },
  {
    id: 3,
    title: "Reducing Retail Packaging Waste",
    category: "Case Studies",
    date: "September 15, 2024",
    excerpt: "How we helped a leading electronics brand reduce their packaging volume by 30% while improving structural integrity.",
    image: "/IMG/3rd_img.jpeg",
    link: "https://www.british-business-bank.co.uk/business-guidance/guidance-articles/sustainability/eco-friendly-packaging-alternatives"
  }
];

const Insights = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'News', 'Sustainability', 'Case Studies'];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">Insights & Innovation</h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Stay updated with the latest trends, company news, and deep dives into sustainable packaging technologies shaping the future of the industry.
          </p>
        </motion.div>
      </section>

      {/* Featured Report Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="lg:w-[55%] h-[300px] lg:h-auto">
            <img 
              src="/IMG/insights_bg.jpg" 
              alt="Featured Report" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-[45%] p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-semibold border border-gray-200 rounded-full text-gray-600 tracking-wider">
                FEATURED REPORT
              </span>
              <span className="text-sm text-gray-500 font-medium">October 2027</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              The Future of Sustainable Logistics 2027
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our comprehensive annual report detailing emerging packaging trends, regulatory changes, and actionable strategies for brands to achieve circularity in their supply chains.
            </p>
            
            <div>
              <Link to="#" className="inline-flex items-center text-[var(--color-forest-deep)] font-bold hover:text-green-800 transition-colors group">
                Read Report
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-3">Latest Articles</h2>
            <p className="text-[var(--color-text-muted)]">Discover our latest news and thought leadership.</p>
          </div>
          
          <div className="flex p-1 bg-gray-100 rounded-full overflow-x-auto max-w-full hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-[var(--color-forest-deep)] text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ARTICLES.map((article) => (
            <motion.div key={article.id} variants={fadeIn} className="group relative">
              <div className="h-56 rounded-2xl overflow-hidden relative mb-6 cursor-default">
                <div className="absolute top-4 left-4 z-10">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full text-gray-900 shadow-sm hover:bg-white transition-colors block">
                    {article.category}
                  </a>
                </div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="text-sm text-gray-500 mb-3">{article.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
              
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-[var(--color-forest-deep)] transition-colors">
                Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-[var(--color-surface-dim)]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Mail className="w-12 h-12 text-[var(--color-forest-deep)]" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Insights Delivered.</h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10">
              Join thousands of industry professionals receiving our monthly newsletter covering packaging innovation and sustainability.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-forest-deep)] focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[var(--color-forest-deep)] hover:bg-green-800 text-white px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy. We won't spam you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;