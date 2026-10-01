'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0, 
        transitionEnd: { transform: 'none', filter: 'none' } 
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
