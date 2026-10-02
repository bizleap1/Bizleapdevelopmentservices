'use client';

import { useEffect, useState, useRef } from 'react';

export default function DynamicTitle() {
  const [originalTitle, setOriginalTitle] = useState('');
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Save the original title when the component mounts
    setOriginalTitle(document.title);

    const handleVisibilityChange = () => {
      const links = document.querySelectorAll("link[rel~='icon']");
      const transparentFavicon = 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

      if (document.hidden) {
        // Change favicons to transparent
        links.forEach((link: any) => {
          if (!link.dataset.originalHref) {
            link.dataset.originalHref = link.href;
          }
          link.href = transparentFavicon;
        });

        let scrollText = '🥺 We are already missing u come back...   ';
        document.title = scrollText;
        
        // Use a Web Worker to bypass browser background tab throttling
        const blob = new Blob([
          `let interval;
           self.addEventListener('message', (e) => {
             if (e.data === 'start') {
               interval = setInterval(() => self.postMessage('tick'), 100);
             } else if (e.data === 'stop') {
               clearInterval(interval);
             }
           });`
        ], { type: 'application/javascript' });
        
        const workerUrl = URL.createObjectURL(blob);
        const worker = new Worker(workerUrl);
        scrollInterval.current = worker as any;
        
        worker.onmessage = () => {
          const chars = Array.from(scrollText);
          scrollText = chars.slice(1).join('') + chars[0];
          document.title = scrollText;
        };
        worker.postMessage('start');

      } else {
        if (scrollInterval.current) {
          (scrollInterval.current as any).postMessage('stop');
          (scrollInterval.current as any).terminate();
          scrollInterval.current = null;
        }
        document.title = originalTitle || 'Bizleap | Digital Marketing & Web Development';

        // Restore favicons
        links.forEach((link: any) => {
          if (link.dataset.originalHref) {
            link.href = link.dataset.originalHref;
          }
        });
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
