import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import styles from './Gallery.module.css';
import { media } from '../../utils/media_urls';

const LazyVideo = lazy(() => import('../LazyVideo/LazyVideo'));

const GalleryComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null); // Track current item index
  const galleryRefs = useRef([]);

  // Intersection Observer callback to load images/videos
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { index } = entry.target.dataset;
        const item = media[index];

        if (item.type === 'image') {
          entry.target.src = item.src;
        } else if (item.type === 'video') {
          entry.target.querySelector('source').src = item.src;
          entry.target.load();
        }
        observer.unobserve(entry.target);
      }
    });
  };

  // Setup Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    galleryRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Show modal and set the current index
  const showModal = (index) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setCurrentIndex(null);
  };

  // Navigate to the next item
  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  // Navigate to the previous item
  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalVisible) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowRight') {
          showNext();
        } else if (e.key === 'ArrowLeft') {
          showPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalVisible]);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
       <div className={styles.container}>
      <img src="Vector.svg" alt="Gallery Background" className={styles.backgroundImage} />
      <div className={styles.overlayText}>GALLERY</div>
    </div>
      <div className={styles.gallery}>
        {media.map((item, index) => (
          <div
            key={index}
            className={styles['gallery-item']}
            onClick={() => showModal(index)}
          >
            {item.type === 'image' ? (
              <img
                data-index={index}
                ref={(el) => (galleryRefs.current[index] = el)}
                alt={item.alt}
                style={{ width: '100%', maxWidth: '300px' }}
                loading="lazy"
                className={styles.galleryImage}
              />
            ) : (
              <Suspense fallback={<div>Loading video...</div>}>
                <LazyVideo
                  data-index={index}
                  ref={(el) => (galleryRefs.current[index] = el)}
                  className={styles.galleryVideo}
                />
              </Suspense>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVisible && currentIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.navButton} onClick={showPrev}>&lt;</button>
            {media[currentIndex].type === 'image' ? (
              <img
                src={media[currentIndex].src}
                alt={media[currentIndex].alt}
                className={styles.modalImage}
              />
            ) : (
              <video className={styles.modalVideo} controls>
                <source src={media[currentIndex].src} type="video/mp4" />
              </video>
            )}
            <button className={styles.navButton} onClick={showNext}>&gt;</button>
          </div>
          <div className={styles.caption}>{media[currentIndex].alt}</div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
