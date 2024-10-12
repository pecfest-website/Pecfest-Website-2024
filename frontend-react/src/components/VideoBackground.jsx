
import styles from './VideoBackground.module.css';

const VideoBackground = ({url}) => {
    return (
        <div className={styles['video-background']}>
            <video autoPlay loop muted>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
 
export default VideoBackground;