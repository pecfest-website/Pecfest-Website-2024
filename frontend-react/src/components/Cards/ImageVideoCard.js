import React, { useEffect, useState, Suspense, lazy, useRef } from 'react';
import styles from './HexagonCard.module.css';

const LazyVideo = lazy(() => import('../LazyVideo/LazyVideo')); // Lazy load video component

const HexagonCard = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the media should load
  const cardRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true); // Load media when in view
            observer.unobserve(entry.target); // Stop observing once loaded
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.hexagon} ${styles[item.borderColor]}`}
    >
      {isLoaded ? (
        item.type === 'image' ? (
          <img src={item.src} alt={item.alt} className={styles.media} />
        ) : (
          <Suspense fallback={<div>Loading video...</div>}>
            <LazyVideo src={item.src} className={styles.media} />
          </Suspense>
        )
      ) : (
        <div className={styles.placeholder}>Loading...</div>
      )}
    </div>
  );
};

export default HexagonCard;
