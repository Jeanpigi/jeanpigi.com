import React from 'react';
import Image from 'next/image';
import styles from '@styles/Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.Intro}>
            <h1 className={styles.Title}><strong>Hola,</strong> Soy Jean Pierre Giovanni Arenas Ortiz</h1>
            <div className={styles.Content}>
                <p className={styles.Border}>Freelancer</p>
                <p className={styles.Wave}>Freelancer</p>
            </div>
            <figure className={styles.Intro_picture}>
                <Image className={styles.Image} src="/jp.jpg" alt="Jean Pierre G" height={200} width={200} />
            </figure>
        </div>
    )
}

export default Intro;
