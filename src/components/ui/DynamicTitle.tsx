'use client';

import { useEffect, useState, useRef } from 'react';

export default function DynamicTitle() {
  const [originalTitle, setOriginalTitle] = useState('');
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Save the original title when the component mounts
    setOriginalTitle(document.title);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let scrollText = '🥺 We are already missing u come back...   ';
        document.title = scrollText;
        
        scrollInterval.current = setInterval(() => {
          // Use Array.from to correctly handle emoji surrogate pairs so they don't break
          const chars = Array.from(scrollText);
          scrollText = chars.slice(1).join('') + chars[0];
          document.title = scrollText;
        }, 150); // 150ms for a faster, smoother scroll effect
      } else {
        if (scrollInterval.current) {
          clearInterval(scrollInterval.current);
        }
        document.title = originalTitle || 'Bizleap | Digital Marketing & Web Development';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [originalTitle]);

  return null;
}
