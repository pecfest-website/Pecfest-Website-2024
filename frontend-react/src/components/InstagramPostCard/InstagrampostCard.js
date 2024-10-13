import React from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark, FaEllipsisH } from 'react-icons/fa';
import styles from './InstagrampostCard.module.css';

const InstagramPost = ({ post, onClick }) => {
    const { user, media, likes, caption } = post;

    return (
        <div className={styles.card} onClick={onClick}>
            {/* Top Section */}
            <div className={styles.top}>
                <div className={styles.userDetails}>
                    <div className={styles.profileImg}>
                        <img src={user.profileImg} alt="user" className={styles.cover} />
                    </div>
                    <div>
                        <h3>{user.name}<br /><span>@{user.username}</span></h3>
                    </div>
                </div>
                <div className={styles.dot}>
                    <FaEllipsisH />
                </div>
            </div>

            {/* Media Section */}
            <div className={styles.mediaBg}>
                {media.type === 'image' ? (
                    <img src={media.src} alt="post" className={styles.media} />
                ) : (
                    <img src={media.thumbnail} alt="thumbnail" className={styles.media} />
                )}
            </div>

            {/* Buttons Section */}
            <div className={styles.btns}>
                <div className={styles.left}>
                    <FaHeart className={styles.icon} />
                    <FaComment className={styles.icon} />
                    <FaShare className={styles.icon} />
                </div>
                <div className={styles.right}>
                    <FaBookmark className={styles.icon} />
                </div>
            </div>

            {/* Likes Section */}
            <h4 className={styles.likes}>{likes.toLocaleString()} likes</h4>
        </div>
    );
};

export default InstagramPost;
