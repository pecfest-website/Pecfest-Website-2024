import React from 'react';
import styles from './Card.module.css'


const Card = ({imageUrl, heading, tags}) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles['inner-container']}>
                    <div className={styles.image}>
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className={styles.heading}>{heading}</div>
                    {
                        tags.map(e=>
                            <p>{e}</p>
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default Card;