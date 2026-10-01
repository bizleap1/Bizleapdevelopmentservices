'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from '../page.module.css';
import { ArrowUpRight, ArrowRight, Code2, Smartphone, Layout, Server, Zap, Database, Cloud, BarChart3, Fingerprint, MousePointerClick, ShieldCheck, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/ui/FAQSection';

const servicesFaqs = [
  {
    question: 'What web development technologies do you use?',
    answer: 'As a modern website development company, we build scalable platforms using React, Next.js, Node.js, and TypeScript. This ensures blazing fast load times, excellent SEO, and robust security for your business.'
  },
  {
    question: 'Do you provide full-stack web development services in Nagpur?',
    answer: 'Yes, we provide end-to-end full-stack web development services in Nagpur and across Maharashtra. Our services include frontend design, backend architecture, API integrations, and cloud deployment.'
  },
  {
    question: 'How much does a custom e-commerce website cost?',
    answer: 'E-commerce development costs vary based on features, inventory size, and whether we use Shopify or a fully custom Next.js/Node.js stack. Contact us for a precise quote tailored to your specific enterprise needs.'
  },
  {
    question: 'Do you offer mobile app development services?',
    answer: 'Yes, alongside web development, we are a premium mobile app development company. We build native-feeling, high-performance applications for iOS and Android that integrate seamlessly with your backend.'
  },
  {
    question: 'Do you redesign existing websites?',
    answer: 'Absolutely. If your current website is slow, outdated, or failing to convert visitors, our UI/UX and web development teams can completely redesign and re-engineer it for maximum performance and conversions.'
  }
];

const services = [
  {
    title: <>Full-Stack <br /><span className={styles.accentText}>Web Development</span></>,
    desc: 'We build highly scalable, blazingly fast, and completely custom web applications using modern tech stacks like Next.js, React, and Node.js. Designed to handle high traffic and deliver flawless user experiences.',
    mainIcon: Code2,
    tags: [
      { name: 'Custom Logic', icon: Code2 },
      { name: 'Architecture', icon: Database },
      { name: 'Cloud Deploy', icon: Cloud }
    ],
    img: '/images/full_stack_final.png',
    altText: 'Full-Stack Web Development'
  },
  {
    title: <>Premium <br /><span className={styles.accentText}>App Development</span></>,
    desc: 'From iOS to Android, we engineer fluid, high-performance mobile applications that users love. We focus on seamless animations, battery efficiency, and intuitive navigation.',
    mainIcon: Smartphone,
    tags: [
      { name: 'Native Feel', icon: Smartphone },
      { name: 'High Speed', icon: Zap },
      { name: 'Analytics', icon: BarChart3 }
    ],
    img: '/images/app_mockup_4k.jpg',
    altText: 'Premium App Development'
  },
  {
    title: <>High-End <br /><span className={styles.accentText}>UI/UX Design</span></>,
    desc: "We design interfaces that don't just look stunning—they convert. By combining psychological design principles with modern aesthetics, we create digital products that feel premium and effortless.",
    mainIcon: Layout,
    tags: [
      { name: 'Wireframing', icon: Layout },
      { name: 'Brand Identity', icon: Fingerprint },
      { name: 'Prototyping', icon: MousePointerClick }
    ],
    img: '/images/b582ee14-957f-4386-bc01-00494302c534.png',
    altText: 'High-End UI/UX Design'
  },
  {
    title: <>Enterprise <br /><span className={styles.accentText}>E-Commerce</span></>,
    desc: 'We architect robust e-commerce platforms that process millions in transactions. Featuring lightning-fast checkouts, custom payment gateways, and advanced inventory management systems.',
    mainIcon: ShoppingCart,
    tags: [
      { name: 'Scalability', icon: Server },
      { name: 'Security', icon: ShieldCheck },
      { name: 'Conversions', icon: Zap }
    ],
    img: '/images/e3f7114d-6823-4c2b-a29f-0ee669d486cc.png',
    altText: 'Enterprise E-Commerce'
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSplit} style={{ minHeight: '100vh', backgroundColor: '#f5f2f1' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/94c6354f-1211-49bc-8953-58898d5f2dbb.png" 
            alt="Services Hero Background" 
            fill 
            style={{ objectFit: 'contain', objectPosition: 'right 20%', transform: 'translateY(5vh)' }} 
            priority
          />
        </div>
        <div className={styles.heroSplitGrid} style={{ minHeight: '100vh', alignItems: 'center' }}>
          <div className={styles.heroSplitLeft} style={{ padding: '0 5vw', justifyContent: 'center', height: '100%', paddingTop: '8rem' }}>
            <h1 className={styles.heroSplitTitle} style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1' }}>
              Our <span className={styles.accent}>Expertise.</span>
            </h1>
            <p className={styles.heroSplitSubline} style={{ maxWidth: '450px', fontSize: '1.15rem', marginLeft: '0.25rem' }}>We deliver end-to-end solutions that elevate brands, scale operations, and drive unmatched digital growth.</p>
          </div>
          <div></div>
        </div>
      </section>
      
      {/* Premium Bento Grid Layout */}
      <section className={styles.bentoGridSection}>
        <div className={styles.bentoGrid}>
          {services.map((s, idx) => (
            <div key={idx} className={styles.bentoCard}>
              
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoTitleIcon}>
                    <s.mainIcon size={26} strokeWidth={2.5} />
                  </div>
                  <h2 className={styles.bentoTitle}>{s.title}</h2>
                </div>
                
                <p className={styles.bentoDesc}>{s.desc}</p>
                
                <div className={styles.bentoTags}>
                  {s.tags.map((Tag, i) => (
                    <span key={i} className={styles.bentoTag}>
                      <Tag.icon size={14} /> {Tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.bentoVisual}>
                <Image 
                  src={s.img} 
                  alt={s.altText} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      <FAQSection 
        faqs={servicesFaqs} 
        title={<>Service <span style={{ color: 'var(--accent-yellow)' }}>FAQs</span></>} 
        subtitle="Common questions about our web and app development services."
      />

      <Footer />
    </main>
  );
}
