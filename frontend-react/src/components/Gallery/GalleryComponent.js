import React, { useState } from 'react';
import styles from './Gallery.module.css';
import { media } from '../../utils/media_urls'; // Ensure this imports your media data
import InstagramPost from '../InstagramPostCard/InstagrampostCard';

// Helper function to generate random data
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomCaption = () => {
    const captions = [
        'Exploring new horizons #adventure #explore',
        'Amazing moments captured #photography #nature',
        'Festival vibes are here! #pecfest2024 #DreamFest',
        "Can't wait for more #excitingtimes #events",
        'Creating memories that last forever #friends #goodtimes',
    ];
    return captions[getRandomNumber(0, captions.length - 1)];
};

const mediaList = media;

const GalleryComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const posts = mediaList.map((media, index) => ({
        id: index + 1,
        user: {
            name: 'PECFEST 24',
            username: 'Dream Fest',
            profileImg: 'logo.png',
        },
        media: {
            type: media.type,
            src: media.src,
            thumbnail: media.thumbnail,
        },
        likes: getRandomNumber(1000, 10000), // Random number for likes
        caption: getRandomCaption(), // Random caption from the list
        commentsCount: getRandomNumber(10, 500), // Random number for comments
    }));

    // Show modal and set the current post
    const openModal = (post) => {
        setCurrentPost(post);
        setModalVisible(true);
    };

    // Close modal
    const closeModal = () => {
        setModalVisible(false);
        setCurrentPost(null);
    };

    return (
        <div className={styles.galleryContainer}>
            {/* Gallery of Instagram Posts */}
            <div className={styles.postsGrid}>
                {posts.map((post) => (
                    <InstagramPost
                        key={post.id}
                        post={post}
                        onClick={() => openModal(post)}
                    />
                ))}
            </div>

            {/* Modal */}
            {modalVisible && currentPost && (
                <div className={styles.modal} onClick={closeModal}>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {currentPost.media.type === 'image' ? (
                            <img
                                src={currentPost.media.src}
                                alt={currentPost.caption}
                                className={styles.modalImage}
                            />
                        ) : (
                            <video className={styles.modalVideo} controls>
                                <source src={currentPost.media.src} type="video/mp4" />
                            </video>
                        )}
                        <div className={styles.caption}>{currentPost.caption}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryComponent;
