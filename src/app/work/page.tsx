'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './work.module.css';
import pageStyles from '../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import FAQSection from '@/components/ui/FAQSection';

const workFaqs = [
  {
    question: 'What types of projects does Bizleap build?',
    answer: 'Our portfolio features a diverse range of builds including high-traffic corporate websites, dynamic e-commerce stores, custom B2B software, and native mobile applications.'
  },
  {
    question: 'Do you only build websites for clients in Nagpur?',
    answer: 'No. While we are a top-rated website development company in Nagpur, our portfolio includes successful deployments for brands across Pune, Mumbai, and internationally.'
  },
  {
    question: 'Can you show examples of your e-commerce development?',
    answer: 'Yes! We have built numerous custom e-commerce platforms for fashion, retail, and B2B clients using modern frameworks to maximize speed and sales conversion rates.'
  },
  {
    question: 'How do you measure the success of a web project?',
    answer: 'As a performance-focused digital agency, we measure success by your core business metrics: improved load times, higher search engine rankings, increased lead generation, and better conversion rates.'
  }
];

interface PortfolioItem {
  name: string;
  desc: string;
  tags: string;
  img: string;
  link: string;
}

interface PortfolioCategory {
  category: string;
  items: PortfolioItem[];
}

const portfolioCategories: PortfolioCategory[] = [
  {
    category: 'Clothing Brands',
    items: [
      { name: 'MIRAYA', desc: 'Fashion Commerce', tags: 'E-COMMERCE / DESIGN', img: '/websites by bizleap/websites by bizleap/MIRAYA home page.png', link: 'https://mirayabygarima.com' },
      { name: 'SUKO', desc: 'Fashion Commerce', tags: 'E-COMMERCE / NEXT.JS', img: '/websites by bizleap/websites by bizleap/SUKO home page.png', link: 'https://indiancorporatewear.com' },
      { name: 'Rajwadi', desc: 'Fashion Commerce', tags: 'E-COMMERCE', img: '/websites by bizleap/websites by bizleap/Rajwadi home page.png', link: 'https://Rajwadirajputiposhak.com' }
    ]
  },
  {
    category: 'Training Institutes',
    items: [
      { name: 'ASMA', desc: 'Corporate Architecture', tags: 'REACT / NEXT.JS', img: '/websites by bizleap/websites by bizleap/ASMA home page.png', link: 'https://Asmaonline.in' },
      { name: 'BINOUS', desc: 'Fitness & Lifestyle', tags: 'E-COMMERCE / STRIPE', img: '/websites by bizleap/websites by bizleap/BINOUS home page.png', link: 'https://binouslab.com' },
      { name: 'Shutter School', desc: 'Ed-Tech Platform', tags: 'ED-TECH / VIDEO', img: '/websites by bizleap/websites by bizleap/Shutter School home page.png', link: 'https://shutterschool.in' },
      { name: 'Miles Along Smiles', desc: 'Healthcare Platform', tags: 'WEB APP / BOOKING', img: '/websites by bizleap/websites by bizleap/Miles Along Smiles home page.png', link: 'https://mas-livid.vercel.app/' }
    ]
  },
  {
    category: 'Pharmaceutical',
    items: [
      { name: 'Form 6', desc: 'Pharma Solutions', tags: 'CORPORATE', img: '/websites by bizleap/websites by bizleap/Form6 hero section.png', link: 'https://form-6-new.vercel.app/' },
      { name: 'Genekon', desc: 'Healthcare', tags: 'WEB APP', img: '/websites by bizleap/websites by bizleap/genecon pharma home page.png', link: 'https://genekon-pharma.vercel.app/' },
      { name: 'Chemora', desc: 'Chemical Solutions', tags: 'CORPORATE', img: '/websites by bizleap/websites by bizleap/chemora home page.png', link: 'https://chemoralifescience.com' }
    ]
  },
  {
    category: 'Corporate',
    items: [
      { name: 'URBAN TAXI', desc: 'Transport Logistics', tags: 'WEB APP / MAPS', img: '/websites by bizleap/websites by bizleap/URBAN TAXI home page.png', link: 'https://www.urbaniacrystataxi.com/' },
      { name: 'Art Interiorz', desc: 'Interior Design', tags: 'CORPORATE', img: '/websites by bizleap/websites by bizleap/Art interiors home page.png', link: 'https://www.artinteriorz.com/' },
      { name: 'MYSA', desc: 'Luxury Apparel', tags: 'FULL STACK / UI DESIGN', img: '/websites by bizleap/websites by bizleap/MAYSA home page.png', link: 'https://www.mysaservice.in/' },
      { name: 'Wealth Acumen', desc: 'Financial Services', tags: 'CORPORATE / FINTECH', img: '/websites by bizleap/websites by bizleap/wealth acumen home page.png', link: 'https://wealthacumen.in/' }
    ]
  },
  {
    category: 'Jewellery Stores',
    items: [
      { name: 'Oswal Jewellers', desc: 'Jewellery Commerce', tags: 'E-COMMERCE', img: '/websites by bizleap/websites by bizleap/Oswal jwellers home page.png', link: 'https://www.oswaljeweller.com/' }
    ]
  },
  {
    category: 'Food & Beverages',
    items: [
      { name: 'Taubys', desc: 'Food & Bakery', tags: 'E-COMMERCE', img: '/websites by bizleap/websites by bizleap/Taubys home page.png', link: 'https://taubys.com/' },
      { name: 'MMM Hotels', desc: 'Hospitality', tags: 'CORPORATE', img: '/websites by bizleap/websites by bizleap/MMM home page.png', link: 'https://www.mmmhotels.com/' }
    ]
  },
  {
    category: 'Real Estate',
    items: []
  }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayedWork = activeCategory === 'All' 
    ? portfolioCategories.flatMap(c => c.items) 
    : portfolioCategories.find(c => c.category === activeCategory)?.items || [];

  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={pageStyles.heroSplit} style={{ minHeight: '80vh', backgroundColor: '#f4f4f4' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/266786c3-2fa0-47ec-9795-4d733d8a3982.png" 
            alt="Work Hero Background" 
            fill 
            className={styles.workHeroImage}
            priority
          />
        </div>
        <div className={pageStyles.heroSplitGrid} style={{ minHeight: '80vh', alignItems: 'center' }}>
          <div className={pageStyles.heroSplitLeft} style={{ padding: '0 5vw', justifyContent: 'center', height: '100%', paddingTop: '8rem', background: 'transparent' }}>
            <h1 className={pageStyles.heroSplitTitle} style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1' }}>
              Selected <br /><span className={pageStyles.accent}>Builds.</span>
            </h1>
            <p className={pageStyles.heroSplitSubline} style={{ maxWidth: '450px', fontSize: '1.15rem', marginLeft: '0.25rem' }}>A curation of some of our finest recent works. Engineered for impact, built to ship.</p>
          </div>
          <div></div>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        
        {/* Sticky Filter Tabs (Desktop) */}
        <div className={`${styles.filterTabs} ${pageStyles.desktopFilterTabs}`}>
          <button 
            className={`${styles.filterTab} ${activeCategory === 'All' ? styles.activeTab : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All Work
          </button>
          {portfolioCategories.map((cat, idx) => (
            <button 
              key={idx}
              className={`${styles.filterTab} ${activeCategory === cat.category ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Mobile Filter Custom Dropdown */}
        <div className={pageStyles.mobileFilterDropdown}>
          <div 
            className={`${pageStyles.filterSelectHeader} ${isDropdownOpen ? pageStyles.filterSelectHeaderOpen : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{activeCategory === 'All' ? 'ALL WORK' : activeCategory}</span>
            <ChevronDown className={pageStyles.filterSelectIcon} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} />
          </div>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                className={pageStyles.filterSelectList}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className={`${pageStyles.filterSelectOption} ${activeCategory === 'All' ? pageStyles.filterSelectOptionActive : ''}`}
                  onClick={() => { setActiveCategory('All'); setIsDropdownOpen(false); }}
                >
                  ALL WORK
                </div>
                {portfolioCategories.map((cat, idx) => (
                  <div 
                    key={idx}
                    className={`${pageStyles.filterSelectOption} ${activeCategory === cat.category ? pageStyles.filterSelectOptionActive : ''}`}
                    onClick={() => { setActiveCategory(cat.category); setIsDropdownOpen(false); }}
                  >
                    {cat.category}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.workList}>
          {displayedWork.length > 0 ? (
            displayedWork.map((work, idx) => (
              <motion.div
                key={`${activeCategory}-${work.name}`} // Re-animate on filter change
                className={`${styles.workCard} ${idx % 2 === 0 ? styles.row : styles.rowReverse}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.workVisual}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Image 
                      src={work.img} 
                      alt={work.name} 
                      width={1920}
                      height={1080}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={idx < 2}
                    />
                  </motion.div>
                </div>
                
                <div className={styles.workInfo}>
                  <div className={styles.workTags}>
                    {work.tags.split('/').map((t, i) => (
                      <span key={i} className={styles.workTag}>{t.trim()}</span>
                    ))}
                  </div>
                  <h3 className={styles.workTitle}>{work.name}</h3>
                  <p className={styles.workDesc}>{work.desc}</p>
                  
                  <Link href={work.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                    View Website <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '6rem 1rem', width: '100%', color: 'var(--muted-grey)' }}>
              <p style={{ fontSize: '1.2rem', letterSpacing: '0.02em' }}>Projects in this category coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <FAQSection 
        faqs={workFaqs} 
        title={<>Portfolio <span style={{ color: 'var(--accent-yellow)' }}>FAQs</span></>} 
        subtitle="Questions about our past projects and capabilities."
      />

      <Footer />
    </main>
  );
}
