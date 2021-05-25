import React from 'react';
import Image from 'next/image';
import styles from '@styles/Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.Intro}>
            <h1><strong>Hola,</strong> Soy Jean Pierre Giovanni Arenas Ortiz</h1>
            <p>Freelancer</p>
            <figure className={styles.Intro_picture}>
                <Image className={styles.Image} src="/jp.jpg" alt="Jean Pierre G" height={200} width={200} />
            </figure>
        </div>
    )
}

export default Intro;
