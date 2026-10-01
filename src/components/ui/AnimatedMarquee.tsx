import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedMarquee.module.css';

interface AnimatedMarqueeProps {
  items: string[];
  title?: string;
}

export default function AnimatedMarquee({ items, title }: AnimatedMarqueeProps) {
  // Duplicate items to ensure smooth infinite scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marqueeContent}
          animate={{ x: [0, -1035] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
