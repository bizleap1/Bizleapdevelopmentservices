import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import styles from '../page.module.css';
import { Search, PenTool, Code2, CheckCircle2, Rocket } from 'lucide-react';
import { Metadata } from 'next';
import FAQSection from '@/components/ui/FAQSection';

const processFaqs = [
  {
    question: 'How long does it take to develop a custom website?',
    answer: 'The timeline for a custom website or web app depends on the complexity. A standard corporate website might take 4-6 weeks, while a complex e-commerce platform or custom software can take 3-6 months from discovery to launch.'
  },
  {
    question: 'What is your software development process?',
    answer: 'We follow an agile development process that includes deep strategy, high-fidelity prototyping, sprint-based engineering, rigorous testing, and finally, deployment. You receive continuous staging links to track progress.'
  },
  {
    question: 'Do you provide SEO during the development process?',
    answer: 'Yes, as a top-tier digital marketing company, technical SEO is built directly into our development lifecycle. We ensure perfect semantic HTML, fast loading speeds, and robust metadata out of the box.'
  },
  {
    question: 'Will I be involved during the prototyping phase?',
    answer: 'Absolutely. We share wireframes and high-fidelity Figma prototypes for your approval. We ensure the UI/UX aligns perfectly with your brand identity before we write a single line of code.'
  }
];

export const metadata: Metadata = {
  title: 'Our Process | Custom Software & Web Development Process',
  description: 'Learn how Bizleap builds highly scalable web applications, custom software, and digital marketing strategies from discovery to deployment.',
  alternates: {
    canonical: '/process',
  }
};

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We dive deep into your business goals, target audience, and technical requirements. We map out the entire system architecture, select the optimal tech stack, and create a comprehensive roadmap before writing a single line of code.',
    icon: Search,
    img: '/images/process_discovery_1790836622644.jpg'
  },
  {
    num: '02',
    title: 'Prototyping',
    desc: 'Our design team creates high-fidelity wireframes and interactive prototypes to perfectly align with your brand identity.',
    icon: PenTool,
    img: '/images/process_prototyping_1790836635797.jpg'
  },
  {
    num: '03',
    title: 'Engineering',
    desc: 'We build your product in rapid, test-driven sprints. You get continuous updates, staging links, and transparency.',
    icon: Code2,
    img: '/images/process_engineering_1790836806212.jpg'
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Rigorous testing across all devices and browsers. We optimize load times and run security audits for a flawless launch.',
    icon: CheckCircle2,
    img: '/images/process_optimization_1790836653156.jpg'
  },
  {
    num: '05',
    title: 'Deployment',
    desc: 'We deploy your application to production infrastructure, monitor performance, and stand by for post-launch support.',
    icon: Rocket,
    img: '/images/process_deployment_1790836780591.jpg'
  }
];

export default function ProcessPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.heroSplit} style={{ minHeight: '80vh', backgroundColor: '#d7cec8' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image 
            src="/images/017e55ff-cf9e-47c1-92e2-a4b76142a0e9.png" 
            alt="Process Hero Background" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
            priority
          />
        </div>
        <div className={styles.heroSplitGrid} style={{ minHeight: '80vh', alignItems: 'center' }}>
          <div className={styles.heroSplitLeft} style={{ padding: '0 5vw', justifyContent: 'center', height: '100%', paddingTop: '8rem' }}>
            <h1 className={styles.heroSplitTitle} style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1' }}>
              How we <span className={styles.accentText}>build.</span>
            </h1>
            <p className={styles.heroSplitSubline} style={{ maxWidth: '450px', fontSize: '1.15rem', marginLeft: '0.25rem' }}>A streamlined, transparent framework designed to take you from vision to production at lightning speed.</p>
          </div>
          <div></div>
        </div>
      </section>

      <section style={{ backgroundColor: '#ffffff', padding: '10rem 5vw' }}>
        <div className={styles.bentoGrid}>
          {processSteps.map((step, idx) => (
            <div 
              key={idx} 
              className={styles.bentoCard}
              style={{ gridColumn: idx === 0 ? '1 / -1' : 'auto', minHeight: '400px' }}
            >
              <div className={styles.bentoContent}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoTitleIcon}>
                    <step.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h2 className={styles.bentoTitle}>{step.title}</h2>
                </div>
                <p className={styles.bentoDesc}>{step.desc}</p>
              </div>
              
              <div className={styles.bentoVisual}>
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <FAQSection 
        faqs={processFaqs} 
        title={<>Process <span style={{ color: 'var(--accent-yellow)' }}>FAQs</span></>} 
        subtitle="How we manage and deliver high-performance digital products."
      />

      <Footer />
    </main>
  );
}
