import { useEffect } from 'react';

export const ScrollReveal = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .about-card, .stat-card, .feature-card, .cta-section'
    );
    
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};