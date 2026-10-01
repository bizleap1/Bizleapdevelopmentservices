'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo-dark.png" alt="Bizleap Logo" width={150} height={40} style={{ objectFit: 'contain' }} priority />
          </a>
        </div>
        
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/process">Process</a>

        </div>

        <div className={styles.ctaGroup}>
          <a href="https://www.bizleap.in/contact" className={styles.secondaryButton}>
            Let's Talk
          </a>
          <a href="https://www.bizleap.in/contact" className={styles.primaryButton}>
            Start a Project <ArrowRight size={16} />
          </a>
          
          <button 
            className={styles.hamburgerBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} color="#111" /> : <Menu size={24} color="#111" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="/services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        </div>
      )}
    </nav>
  );
}
