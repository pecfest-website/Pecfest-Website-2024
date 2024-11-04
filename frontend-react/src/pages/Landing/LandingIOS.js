import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';

function LandingIOS() {
    const [showSplash, setShowSplash] = useState(false);


    const isiOS = () => {
        return (
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        );
    };

    const navigate = useNavigate();

    useEffect(() => {
        // Only show the splash screen if the user is on an iOS device
        if (isiOS()) {
            setShowSplash(true);
        }
    }, []);

    const handleBeginClick = () => {
        // Hide the splash screen and allow video to play

        setShowSplash(false);

        navigate('/landing');
    };




    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                }}
            >
                <button
                    onClick={handleBeginClick}

                >








                    <div class={styles.radioWrapper}>
                      
                        <div class={styles.btn}>
                            <span aria-hidden="true">_</span>Lets Begin
                            <span class={styles.btn__glitch} aria-hidden="">Let's Begin</span>
                            <label class={styles.number}>r1</label>
                        </div>
                    </div>
                    Let’s Begin
                </button>
            </div>
        </div>


    )
}

export default LandingIOS