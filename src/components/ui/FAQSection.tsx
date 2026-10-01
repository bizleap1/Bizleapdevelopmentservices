'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

export type FAQ = {
  question: string;
  answer: string;
};

const defaultFaqs: FAQ[] = [
  {
    question: 'What services does Bizleap provide?',
    answer: 'Bizleap is a full-service digital agency. We specialize in end-to-end digital marketing (SEO, Meta Ads, Google Ads) alongside premium custom website development, enterprise e-commerce (Shopify & Custom), and mobile app development.'
  },
  {
    question: 'Does Bizleap provide digital marketing services in Nagpur?',
    answer: 'Yes, our core team is based in Nagpur, and we are recognized as a leading digital marketing company in Nagpur. We provide highly targeted SEO, performance marketing, and social media management for local and national brands.'
  },
  {
    question: 'Do you build custom web applications?',
    answer: 'Absolutely. We do not just build basic templates. As a specialized web development company, we engineer scalable, custom web applications using modern tech stacks like React, Next.js, and Node.js.'
  },
  {
    question: 'Does Bizleap develop e-commerce websites?',
    answer: 'Yes, we develop high-conversion e-commerce platforms. Whether you need a Shopify setup or a fully custom e-commerce architecture designed to handle thousands of concurrent users, our e-commerce developers can deliver.'
  },
  {
    question: 'Do you work with businesses outside Nagpur?',
    answer: 'Yes. While we are a prominent website development company in Nagpur and serve clients across Pune, Mumbai, and Maharashtra, we also collaborate with ambitious businesses and enterprise clients globally.'
  },
  {
    question: 'Can Bizleap manage both marketing and technology for my business?',
    answer: 'Yes, that is our primary advantage. By managing both your technical infrastructure (web and app development) and your digital marketing strategy, we ensure perfect alignment for maximum ROI and seamless user experiences.'
  }
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: React.ReactNode;
  subtitle?: string;
}

export default function FAQSection({ 
  faqs = defaultFaqs,
  title = <>Frequently Asked <span style={{ color: 'var(--accent-yellow)' }}>Questions</span></>,
  subtitle = 'Everything you need to know about partnering with Bizleap.'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>{title}</h2>
          <p className={styles.faqSubtitle}>{subtitle}</p>
        </div>
        
        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${openIndex === idx ? styles.active : ''}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className={styles.faqQuestion}>
                <h3>{faq.question}</h3>
                <ChevronDown 
                  className={styles.faqIcon} 
                  style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} 
                />
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.faqAnswerWrapper}
                  >
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
