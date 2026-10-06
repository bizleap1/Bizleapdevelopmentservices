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
    question: 'Which is the best digital marketing company in Nagpur?',
    answer: 'Bizleap is widely recognized as one of the best digital marketing companies in Nagpur. We deliver ROI-driven digital strategies, high-performing Meta & Google Ad campaigns, advanced search engine optimization (SEO), and conversion-focused web development designed to accelerate business growth.'
  },
  {
    question: 'Why choose Bizleap for digital marketing in Nagpur?',
    answer: 'Bizleap combines technical engineering excellence with creative marketing mastery. When you partner with us, you get a dedicated team of marketing strategists, media buyers, and full-stack developers committed to measurable results, clear ROI, and transparent monthly performance reporting.'
  },
  {
    question: 'Is Bizleap a top digital marketing agency in Nagpur?',
    answer: 'Yes. Bizleap is a top-rated digital agency in Nagpur trusted by leading regional, national, and international brands. We have built a proven track record of scaling revenue, capturing top Google rankings, and generating predictable lead generation pipelines for our clients.'
  },
  {
    question: 'What services does Bizleap provide?',
    answer: 'Bizleap provides complete end-to-end digital solutions including Custom Website & Web App Development, Search Engine Optimization (SEO), Performance Marketing (Meta Ads & Google Ads), Social Media Marketing & Brand Building, Custom E-Commerce Platforms, and Native Mobile App Development.'
  },
  {
    question: 'Which company is best for social media marketing in Nagpur?',
    answer: 'Bizleap stands out as the premier social media marketing company in Nagpur. We create high-engagement creative campaigns, strategic content calendars, reels production, and targeted paid advertising on Instagram, LinkedIn, Facebook, and YouTube that turn followers into paying customers.'
  }
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: React.ReactNode;
  subtitle?: string;
  id?: string;
}

export default function FAQSection({ 
  faqs = defaultFaqs,
  title = (
    <>
      Frequently Asked <span className={styles.accentText}>Questions</span>
    </>
  ),
  subtitle,
  id = 'faq'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id={id}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>{title}</h2>
          {subtitle && <p className={styles.faqSubtitle}>{subtitle}</p>}
        </div>
        
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const formattedQuestion = faq.question.match(/^\d+\.\s/)
              ? faq.question
              : `${idx + 1}. ${faq.question}`;
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <h3 className={styles.faqQuestionText}>{formattedQuestion}</h3>
                  <ChevronDown 
                    className={styles.faqIcon} 
                    size={20}
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.faqAnswerWrapper}
                    >
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f, idx) => ({
              "@type": "Question",
              "name": f.question.match(/^\d+\.\s/) ? f.question : `${idx + 1}. ${f.question}`,
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
