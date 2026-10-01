'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, Search, TrendingUp, Target, Gem, Sparkles, Home as HomeIcon, ShoppingBag, Building2, Leaf, Scissors, Camera, Trees, Map, Dumbbell, Car, Atom, Terminal, Hexagon, Braces, Database, Cloud, Smartphone, Code, Lock, Bell, BarChart3, Store, CreditCard, Package, LayoutDashboard, ChevronDown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import AnimatedMarquee from '@/components/ui/AnimatedMarquee';
import FAQSection from '@/components/ui/FAQSection';
import styles from './page.module.css';

function LogoMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = performance.now();
    
    const scroll = (time: number) => {
      if (!isDragging.current) {
        // Move by a consistent amount regardless of framerate (roughly 30px per sec)
        const deltaTime = time - lastTime;
        const moveAmount = (deltaTime / 1000) * 30;
        
        el.scrollLeft += moveAmount;
        
        // Loop halfway through since we duplicated content exactly 4 times
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const logos = [
    "Academypath.png", "asian street.png", "barcode.png", "binous.png", 
    "MANI.png", "mysa.png", "suko.png", 
    "VIKALP_EDUCATION_logo_1080x1350_transparent.png", "wealth acumen.png"
  ];
  
  // Duplicate 4 times to ensure infinite scroll bounds
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div 
      ref={scrollRef}
      style={{ display: 'flex', overflow: 'hidden', cursor: 'grab', width: '100%', paddingRight: '1rem', touchAction: 'pan-y' }}
      onMouseDown={(e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current!.offsetLeft;
        scrollLeft.current = scrollRef.current!.scrollLeft;
        scrollRef.current!.style.cursor = 'grabbing';
      }}
      onMouseLeave={() => {
        isDragging.current = false;
        scrollRef.current!.style.cursor = 'grab';
      }}
      onMouseUp={() => {
        isDragging.current = false;
        scrollRef.current!.style.cursor = 'grab';
      }}
      onMouseMove={(e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX.current) * 1.5; // Drag speed multiplier
        scrollRef.current!.scrollLeft = scrollLeft.current - walk;
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollRef.current!.offsetLeft;
        scrollLeft.current = scrollRef.current!.scrollLeft;
      }}
      onTouchEnd={() => {
        isDragging.current = false;
      }}
      onTouchMove={(e) => {
        if (!isDragging.current) return;
        const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current!.scrollLeft = scrollLeft.current - walk;
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8, width: 'max-content' }}>
        {repeatedLogos.map((logo, idx) => {
          const isVikalp = logo.includes('VIKALP');
          const needsMultiplyFix = logo.includes('binous');
          
          return (
            <div key={idx} style={{ position: 'relative', width: '160px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <Image 
                src={`/new logos/${logo}`} 
                alt={logo.replace('.png', '')} 
                fill 
                sizes="160px"
                draggable={false}
                style={{ 
                  objectFit: 'contain', 
                  filter: needsMultiplyFix ? 'grayscale(100%) brightness(0.55) contrast(10000%)' : 'brightness(0)',
                  mixBlendMode: needsMultiplyFix ? 'multiply' : 'normal',
                  transform: isVikalp ? 'scale(1.8)' : needsMultiplyFix ? 'scale(1.5)' : 'scale(1)'
                }} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const portfolioCategories = [
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
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll animation for Process Line
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });
  const processScaleX = useSpring(processProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <Navbar />

      <main>
        {/* SPLIT SCREEN MINIMALIST HERO */}
        <section className={styles.heroSplit}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.heroVideoBg}
          >
            <source src="/hero section video 2.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroSplitGrid}>
            <div className={styles.heroSplitLeft}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={styles.heroSplitTitle}
              >
                Marketing & <br />
                <span className={styles.accent}>Technology</span> <br />
                that scales
              </motion.h1>

              <motion.p 
                className={styles.heroSplitSubline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                The premier digital marketing and website development company in Nagpur. We engineer high-performance websites, custom apps, and data-driven marketing campaigns to drive measurable growth.
              </motion.p>

              <motion.div 
                className={styles.heroSplitButtons}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <MagneticWrapper>
                  <Link href="https://www.bizleap.in/contact" className={styles.clayBtnPrimary}>
                    Start a Project <ArrowRight size={18} />
                  </Link>
                </MagneticWrapper>
                <MagneticWrapper>
                  <Link href="/work" className={styles.clayBtnSecondary}>
                    View Our Work <ArrowRight size={18} />
                  </Link>
                </MagneticWrapper>
              </motion.div>
            </div>
            
            {/* The right column is intentionally left empty so the custom background image shines through */}
            <div></div>

          </div>
        </section>

        {/* TRUST STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ borderBottom: '1px solid var(--border-color)', borderTop: '1px solid var(--border-color)', padding: '2rem 0' }}
        >
          <div className={`container ${styles.trustStripContainer}`}>
            
            <div className={styles.trustStripLeft}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', justifyContent: 'center' }} className={styles.trustStripLineGroup}>
                <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--accent-yellow)' }}></div>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-yellow)' }}></div>
              </div>
              <span className={styles.trustStripText}>
                TRUSTED BY AMBITIOUS BRANDS
              </span>
            </div>

            {/* Custom Draggable Marquee */}
            <div className={styles.trustStripMarquee}>
              <LogoMarquee />
            </div>

          </div>
        </motion.div>

        <motion.section 
          id="services" 
          className={`container ${styles.servicesSection}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Three things. <span className={styles.accentText}>Done exceptionally well.</span>
            </h2>
          </div>

          <motion.div 
            className={styles.serviceRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.serviceTextWrapper}>
              <div className={styles.serviceNumber}>01</div>
              <h3 className={styles.serviceTitle}>Full Stack Website Development</h3>
              <p className={styles.serviceCopy}>
                From fast marketing websites to complex web applications — strategy, UI, frontend, backend and deployment under one roof.
              </p>
              <ul className={styles.serviceTags}>
                <li><Atom className={styles.tagIcon} /> React</li>
                <li><Terminal className={styles.tagIcon} /> Next.js</li>
                <li><Hexagon className={styles.tagIcon} /> Node.js</li>
                <li><Braces className={styles.tagIcon} /> APIs</li>
                <li><Database className={styles.tagIcon} /> Databases</li>
                <li><Cloud className={styles.tagIcon} /> Cloud</li>
              </ul>
              <div className={styles.serviceActions}>
                <a href="/services" className={styles.btnPrimary}>Web Development Services <ArrowUpRight className={styles.btnIcon} /></a>
                <a href="https://www.bizleap.in/contact" className={styles.btnSecondary}>Contact Now <ArrowUpRight className={styles.btnIcon} /></a>
              </div>
            </div>
            <div className={styles.serviceVisual}>
              <Image src="/images/full_stack_final.png" alt="Full Stack Preview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', transform: 'scale(1.15)', transformOrigin: 'center', mixBlendMode: 'multiply', filter: 'contrast(1.05) brightness(1.05)' }} />
            </div>
          </motion.div>

          <motion.div 
            className={styles.serviceRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.serviceVisualDesktopFirst}>
              <Image src="/images/app_mockup_4k.jpg" alt="App Dev Preview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', transform: 'scale(1.6)', transformOrigin: 'center', mixBlendMode: 'multiply', filter: 'contrast(1.05) brightness(1.05)' }} />
            </div>
            <div className={styles.serviceTextWrapper}>
              <div className={styles.serviceNumber}>02</div>
              <h3 className={styles.serviceTitle}>App Development</h3>
              <p className={styles.serviceCopy}>
                Intuitive mobile and web applications designed around real user journeys and built for reliable performance.
              </p>
              <ul className={styles.serviceTags}>
                <li><Smartphone className={styles.tagIcon} /> Product Design</li>
                <li><Code className={styles.tagIcon} /> React Native</li>
                <li><Cloud className={styles.tagIcon} /> APIs</li>
                <li><Lock className={styles.tagIcon} /> Authentication</li>
                <li><Bell className={styles.tagIcon} /> Notifications</li>
                <li><BarChart3 className={styles.tagIcon} /> Analytics</li>
              </ul>
              <div className={styles.serviceActions}>
                <a href="/services" className={styles.btnPrimary}>App Development Services <ArrowRight className={styles.btnIcon} /></a>
                <a href="https://www.bizleap.in/contact" className={styles.btnSecondary}>Contact Now <ArrowRight className={styles.btnIcon} /></a>
              </div>
            </div>
            <div className={styles.serviceVisualMobileFirst}>
              <Image src="/images/app_mockup_4k.jpg" alt="App Dev Preview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', transform: 'scale(1.6)', transformOrigin: 'center', mixBlendMode: 'multiply', filter: 'contrast(1.05) brightness(1.05)' }} />
            </div>
          </motion.div>

          <motion.div 
            className={styles.serviceRow}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.serviceTextWrapper}>
              <div className={styles.serviceNumber}>03</div>
              <h3 className={styles.serviceTitle}>E-Commerce</h3>
              <p className={styles.serviceCopy}>
                Conversion-focused storefronts with seamless browsing, checkout, payments and scalable catalogue management.
              </p>
              <ul className={styles.serviceTags}>
                <li><Store className={styles.tagIcon} /> Custom Storefronts</li>
                <li><CreditCard className={styles.tagIcon} /> Payments</li>
                <li><Package className={styles.tagIcon} /> Inventory</li>
                <li><LayoutDashboard className={styles.tagIcon} /> Admin Panels</li>
                <li><BarChart3 className={styles.tagIcon} /> Analytics</li>
              </ul>
              <div className={styles.serviceActions}>
                <a href="/services" className={styles.btnPrimary}>E-Commerce Solutions <ArrowRight className={styles.btnIcon} /></a>
                <a href="https://www.bizleap.in/contact" className={styles.btnSecondary}>Contact Now <ArrowRight className={styles.btnIcon} /></a>
              </div>
            </div>
            <div className={styles.serviceVisual}>
              <Image src="/images/laptop_perfect.jpg" alt="E-Commerce Laptop Preview" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'center', mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.1)' }} />
            </div>
          </motion.div>
        </motion.section>

        {/* SELECTED WORK */}
        <motion.section 
          id="work" 
          className={styles.workSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Selected builds. <span className={styles.accentText}>Engineered for impact.</span>
              </h2>
            </div>
          </div>
          
          <div className={styles.workGridWrapper}>
            <div className="container">
              {/* Mobile Filter Custom Dropdown */}
              <div className={styles.mobileFilterDropdown}>
                <div 
                  className={`${styles.filterSelectHeader} ${isDropdownOpen ? styles.filterSelectHeaderOpen : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{activeCategory === 'All' ? 'ALL WORK' : activeCategory}</span>
                  <ChevronDown className={styles.filterSelectIcon} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </div>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      className={styles.filterSelectList}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div 
                        className={`${styles.filterSelectOption} ${activeCategory === 'All' ? styles.filterSelectOptionActive : ''}`}
                        onClick={() => { setActiveCategory('All'); setIsDropdownOpen(false); }}
                      >
                        ALL WORK
                      </div>
                      {portfolioCategories.map((cat, idx) => (
                        <div 
                          key={idx}
                          className={`${styles.filterSelectOption} ${activeCategory === cat.category ? styles.filterSelectOptionActive : ''}`}
                          onClick={() => { setActiveCategory(cat.category); setIsDropdownOpen(false); }}
                        >
                          {cat.category}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Filter Tabs */}
              <div className={styles.filterTabs}>
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

              <div className={styles.workGrid}>
                {(activeCategory === 'All' 
                  ? portfolioCategories.flatMap(c => c.items) 
                  : portfolioCategories.find(c => c.category === activeCategory)?.items || []
                ).map((work, idx) => (
                  <motion.div
                    key={`${activeCategory}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                  >
                    <a href={work.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.workCard}>
                      <div className={styles.workImage}>
                        <Image src={work.img} alt={work.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className={styles.hoverBadge}>VIEW WEBSITE <ArrowUpRight size={16} /></div>
                      </div>
                      <div className={styles.workMeta}>
                        <div>
                          <h3 className={styles.workClient}>{work.name}</h3>
                          <p className={styles.workDesc}>{work.desc}</p>
                        </div>
                        <div className={styles.workTags}>{work.tags}</div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>



        {/* PROCESS */}
        <motion.section 
          id="process" 
          className={`container ${styles.processSection}`} 
          ref={processRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >

          <div className={styles.processList}>
            <div className={styles.processItem}>
              <div className={styles.processNum}>01</div>
              <div className={styles.processName}>Discover</div>
              <div className={styles.processDesc}>Understand the business and user.</div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processNum}>02</div>
              <div className={styles.processName}>Design</div>
              <div className={styles.processDesc}>Shape structure, UX and interface.</div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processNum}>03</div>
              <div className={styles.processName}>Build</div>
              <div className={styles.processDesc}>Frontend, backend and integrations.</div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processNum}>04</div>
              <div className={styles.processName}>Test</div>
              <div className={styles.processDesc}>Performance, devices and edge cases.</div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processNum}>05</div>
              <div className={styles.processName}>Launch</div>
              <div className={styles.processDesc}>Deploy, monitor and improve.</div>
            </div>
          </div>
        </motion.section>


        {/* WHY BIZLEAP */}
        <motion.section 
          className={styles.whySection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Built to ship. <span className={styles.accentText}>Not just impress.</span></h2>
            </div>

            <div className={styles.whyBentoGrid}>
              
              <div className={styles.whyBentoCard}>
                <div className={styles.whyBentoText}>
                  <div className={styles.whyBentoNum}>01 <span className={styles.whyBentoLine}></span></div>
                  <h3>Performance <br />First</h3>
                  <p>We engineer lightning-fast experiences that convert. Speed is a feature, not an afterthought.</p>

                </div>
                <div className={styles.whyBentoImage}>
                  <Image src="/images/6d52a478-a5af-4655-8f90-a713fc037488.png" alt="Performance First" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: '25% center' }} />
                </div>
              </div>

              <div className={styles.whyBentoCard}>
                <div className={styles.whyBentoText}>
                  <div className={styles.whyBentoNum}>02 <span className={styles.whyBentoLine}></span></div>
                  <h3>Scalable <br />Architecture</h3>
                  <p>Built on robust, modern stacks that scale effortlessly as your business traffic grows.</p>

                </div>
                <div className={styles.whyBentoImage}>
                  <Image src="/images/c7797984-b560-4f3a-9225-97d1cf10a680.png" alt="Scalable Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: '80% center' }} />
                </div>
              </div>

              <div className={styles.whyBentoCard}>
                <div className={styles.whyBentoText}>
                  <div className={styles.whyBentoNum}>03 <span className={styles.whyBentoLine}></span></div>
                  <h3>Collaborative <br />Process</h3>
                  <p>We work closely with your team at every stage — keeping communication clear, transparent, and goal-driven.</p>

                </div>
                <div className={styles.whyBentoImage}>
                  <Image src="/images/custom_clear.jpg" alt="Collaborative Process" fill sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>

              <div className={styles.whyBentoCard}>
                <div className={styles.whyBentoText}>
                  <div className={styles.whyBentoNum}>04 <span className={styles.whyBentoLine}></span></div>
                  <h3>Ongoing <br />Support</h3>
                  <p>From launch to growth, we stay with you — ensuring smooth operations, regular updates, and proactive problem-solving.</p>

                </div>
                <div className={styles.whyBentoImage}>
                  <Image src="/images/fd23e046-033c-4a44-b8e2-738c5feef6a8.png" alt="Ongoing Support" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: '60% center' }} />
                </div>
              </div>

            </div>
          </div>
          <br /><br /><br />
          {/* TECH STACK */}
          <AnimatedMarquee 
            title="Built with modern technology. Chosen for the right reasons." 
            items={["NEXT.JS", "REACT", "TYPESCRIPT", "NODE", "POSTGRESQL", "AWS", "PRISMA", "CLOUDINARY"]} 
          />
        </motion.section>

        <FAQSection />

        {/* CTA */}
        <motion.section 
          id="contact" 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <h2 className={styles.ctaTitle}>Have something<br />worth building?</h2>

            <MagneticWrapper>
              <Link href="https://www.bizleap.in/contact" className={styles.ctaButton}>
                START A PROJECT <ArrowUpRight size={24} />
              </Link>
            </MagneticWrapper>

          </div>
        </motion.section>

      </main>
      
      <Footer />
    </>
  );
}
