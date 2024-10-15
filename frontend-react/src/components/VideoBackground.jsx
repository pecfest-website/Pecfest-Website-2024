import styles from './VideoBackground.module.css';

const VideoBackground = ({ url }) => {
    return (
        <>
            <div className={styles['video-background']}>
                <video 
                    autoPlay 
                    loop 
                    muted  
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div 
                className={styles['video-overlay']} 
                onClick={(e) => e.preventDefault()} // Prevent click actions
            ></div>
        </>
    );
};

export default VideoBackground;
