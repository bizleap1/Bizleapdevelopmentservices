import Image from 'next/image';
import Link from 'next/link';
// No lucide-react import needed
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" style={{ display: 'inline-flex' }}>
              <Image src="/logo-dark.png" alt="Bizleap Logo" width={200} height={60} style={{ objectFit: 'contain' }} />
            </a>
            <p className={styles.brandDesc}>
              Built to ship. Not just impress. We engineer digital experiences that drive real business impact.
            </p>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Services</h4>
            <a href="/services">Full Stack Development</a>
            <a href="/services">App Development</a>
            <a href="/services">E-Commerce</a>
            <a href="/services">UI/UX Design</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Company</h4>

            <a href="/work">Our Work</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Contact</h4>
            <a href="mailto:bizleapinc@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> bizleapinc@gmail.com
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-grey)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                <a href="tel:+917097095152">+91 70970 95152</a>
                <span>/</span>
                <a href="tel:+919307198119">+91 93071 98119</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--muted-grey)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                2, Wardha Rd, Near Sai Mandir,<br />
                Sawarkar Nagar, Gajanan Nagar,<br />
                Nagpur, Maharashtra 440015
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2026 BizLeap India Pvt. Ltd. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#privacy">PRIVACY</a>
            <a href="#terms">TERMS</a>
            <a href="#cookies">COOKIES</a>
          </div>
          <div className={styles.credit}>
            Crafted with <span className={styles.heart}>♥</span> by <span className={styles.creditBrand}>BizLeap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
