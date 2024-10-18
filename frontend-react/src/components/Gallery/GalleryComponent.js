// import React, { useState } from 'react';
// import styles from './Gallery.module.css';
// import { media } from '../../utils/media_urls'; // Ensure this imports your media data
// import InstagramPost from '../InstagramPostCard/InstagrampostCard';

// // Helper function to generate random data
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const getRandomCaption = () => {
//     const captions = [
//         'Exploring new horizons #adventure #explore',
//         'Amazing moments captured #photography #nature',
//         'Festival vibes are here! #pecfest2024 #DreamFest',
//         "Can't wait for more #excitingtimes #events",
//         'Creating memories that last forever #friends #goodtimes',
//     ];
//     return captions[getRandomNumber(0, captions.length - 1)];
// };

// const mediaList = media;

// const GalleryComponent = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [currentPost, setCurrentPost] = useState(null);

//     const posts = mediaList.map((media, index) => ({
//         id: index + 1,
//         user: {
//             name: 'PECFEST 24',
//             username: 'Dream Fest',
//             profileImg: 'logo.png',
//         },
//         media: {
//             type: media.type,
//             src: media.src,
//             thumbnail: media.thumbnail,
//         },
//         likes: getRandomNumber(1000, 10000), // Random number for likes
//         caption: getRandomCaption(), // Random caption from the list
//         commentsCount: getRandomNumber(10, 500), // Random number for comments
//     }));

//     // Show modal and set the current post
//     const openModal = (post) => {
//         setCurrentPost(post);
//         setModalVisible(true);
//     };

//     // Close modal
//     const closeModal = () => {
//         setModalVisible(false);
//         setCurrentPost(null);
//     };

//     return (
//         <div className={styles.galleryContainer}>
//             {/* Gallery of Instagram Posts */}
//             <div className={styles.postsGrid}>
//                 {posts.map((post) => (
//                     <InstagramPost
//                         key={post.id}
//                         post={post}
//                         onClick={() => openModal(post)}
//                     />
//                 ))}
//             </div>

//             {/* Modal */}
//             {modalVisible && currentPost && (
//                 <div className={styles.modal} onClick={closeModal}>
//                     <span className={styles.close} onClick={closeModal}>&times;</span>
//                     <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         {currentPost.media.type === 'image' ? (
//                             <img
//                                 src={currentPost.media.src}
//                                 alt={currentPost.caption}
//                                 className={styles.modalImage}
//                             />
//                         ) : (
//                             <video className={styles.modalVideo} controls>
//                                 <source src={currentPost.media.src} type="video/mp4" />
//                             </video>
//                         )}
//                         <div className={styles.caption}>{currentPost.caption}</div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GalleryComponent;

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import './styles.css'

export default function WovenImageList() {
  return (
    <div id='gallery-div'>
    <ImageList sx={{ width: 400, height: 250 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
