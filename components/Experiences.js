import React from 'react';
// Styles
import styles from '@styles/Experiences.module.css';
// Profile
import { experiences } from '../profile';

const Experiences = () => {
    return (
        <div className={styles.Experiences}>
            <h1>Experiencia:</h1>
            <ul>
                {experiences.map(({ title, place, description, from, to }, i) => (
                    <li key={i}>
                        <h2>{title}</h2>
                        <h3>{place}</h3>
                        <p>{description}</p>
                        <h4>{from} {to ? `- ${to}` : '- current'}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experiences;
